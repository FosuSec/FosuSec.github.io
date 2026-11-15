import { parseArgs } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');

/**
 * 内容类型定义：目录、默认分类、可选字段与正文模板。
 */
const TRACKS = {
  news: {
    dir: 'news',
    defaultCategory: '新闻',
    categories: ['新闻', '活动', '通知'],
    hasAuthor: false,
    hasTags: false,
    body: (title) => `这里是「${title}」的正文占位内容。你可以用 Markdown 编写完整的正文。

## 概述

（在此补充背景与概述）

## 详情

（在此补充具体内容）
`,
  },
  writeups: {
    dir: 'writeups',
    defaultCategory: 'CTF Writeup',
    categories: ['CTF Writeup', '安全研究', '工具分享'],
    hasAuthor: true,
    hasTags: true,
    body: () => `这里是 Writeup 的正文占位内容。你可以用 Markdown 编写完整的解题过程。

## 题目描述

（在此补充题目描述与附件信息）

## 分析过程

（在此补充分析思路、关键步骤与脚本）

## 总结

（在此补充解题心得与知识点总结）
`,
  },
};

const USAGE = `用法：
  node scripts/new-post.mjs <type> <title> [选项]
  node scripts/new-post.mjs --type <type> --title <title> [选项]

type: news | writeups

选项：
  -t, --type        内容类型（news / writeups）
      --title       标题（必填）
  -d, --description 描述（可选，默认使用标题）
  -c, --category    分类（可选）
      --date        日期（可选，默认今天，格式 YYYY-MM-DD）
      --author      作者（仅 writeups，默认 FosuSec）
      --tags        标签（仅 writeups，逗号分隔）

示例：
  npm run new:news -- "实验室招新启动"
  npm run new:writeups -- "某 CTF 逆向题解" --category "CTF Writeup" --tags "CTF,Reverse"
`;

/**
 * CRC32（多项式 0xEDB88320），与 hexo-abbrlink 的 crc32+hex 保持一致。
 */
const CRC_TABLE = new Int32Array(256);
for (let i = 0; i < 256; i++) {
  let crc = i;
  for (let j = 0; j < 8; j++) {
    crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  }
  CRC_TABLE[i] = crc;
}

function crc32(str) {
  const bytes = new TextEncoder().encode(str);
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ bytes[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function generateAbbrlink(title) {
  return crc32(title).toString(16).padStart(8, '0');
}

/** 生成安全的文件名片段：保留标题原文（含中文），仅替换非法字符与空白。 */
function slugify(title) {
  return title
    .trim()
    .replace(/[\\/:*?"<>|\s]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** YAML 单引号字符串，内部单引号翻倍转义。 */
function yamlSingle(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

function today() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function isDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function main() {
  const { values, positionals } = parseArgs({
    options: {
      type: { type: 'string', short: 't' },
      title: { type: 'string' },
      description: { type: 'string', short: 'd' },
      category: { type: 'string', short: 'c' },
      date: { type: 'string' },
      author: { type: 'string' },
      tags: { type: 'string' },
    },
    allowPositionals: true,
  });

  const pos = [...positionals];
  let type = values.type;
  let title = values.title;

  if (!type && pos.length) type = pos.shift();
  if (!title && pos.length) title = pos.shift();

  if (!type || !title) {
    console.error('缺少必填参数：type 与 title。\n');
    console.error(USAGE);
    process.exit(1);
  }

  const track = TRACKS[type];
  if (!track) {
    console.error(`未知类型：${type}（支持 ${Object.keys(TRACKS).join(' / ')}）`);
    process.exit(1);
  }

  const description = values.description || title;
  const category = values.category || track.defaultCategory;
  const date = values.date || today();
  if (!isDate(date)) {
    console.error(`日期格式错误：${date}（应为 YYYY-MM-DD）`);
    process.exit(1);
  }

  const abbrlink = generateAbbrlink(title);
  const slug = slugify(title) || abbrlink;
  const filename = type === 'news' ? `${date}-${slug}.md` : `${slug}.md`;

  const frontmatter = [
    `title: ${yamlSingle(title)}`,
    `abbrlink: ${abbrlink}`,
    `description: ${yamlSingle(description)}`,
    `date: ${date}`,
    `category: ${yamlSingle(category)}`,
  ];
  if (track.hasAuthor) {
    frontmatter.push(`author: ${yamlSingle(values.author || 'FosuSec')}`);
  }
  if (track.hasTags) {
    const tags = (values.tags || '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    frontmatter.push(`tags: [${tags.map(yamlSingle).join(', ')}]`);
  }

  const filePath = path.join(CONTENT_DIR, track.dir, filename);
  if (fs.existsSync(filePath)) {
    console.error(`文件已存在，未覆盖：${filePath}`);
    process.exit(1);
  }

  const content = `---\n${frontmatter.join('\n')}\n---\n\n${track.body(title)}`;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');

  console.log(`已生成 ${type} 内容：`);
  console.log(`  路径：${path.relative(ROOT, filePath)}`);
  console.log(`  abbrlink：${abbrlink}`);
}

main();