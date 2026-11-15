# 内容模板生成工具使用说明

用于在 `src/content` 下快速生成符合 content collection schema 的 Markdown 文件（新闻 / Writeup）。

## 快速开始

```bash
# 生成一条新闻（默认分类「新闻」，日期为今天）
npm run new:news -- "实验室招新启动"

# 生成一篇 Writeup（带标签和作者）
npm run new:writeups -- "某 CTF 逆向题解" --category "CTF Writeup" --tags "CTF,Reverse" --author "FosuSec"
```

## 可用命令

| 命令 | 说明 |
| --- | --- |
| `npm run new` | 通用命令，需通过 `--type` 或位置参数指定类型 |
| `npm run new:news` | 生成新闻 / 活动 / 通知（`news` 类型） |
| `npm run new:writeups` | 生成 CTF Writeup / 技术博客（`writeups` 类型） |

## 参数说明

| 参数 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `--type` / `-t` | 是 | - | 内容类型：`news` 或 `writeups` |
| `--title` | 是 | - | 标题 |
| `--description` / `-d` | 否 | 等于标题 | 描述 |
| `--category` / `-c` | 否 | 按类型取默认值 | 分类 |
| `--date` | 否 | 今天 | 日期，格式 `YYYY-MM-DD` |
| `--author` | 否 | `FosuSec` | 作者（仅 `writeups`） |
| `--tags` | 否 | 无 | 标签（仅 `writeups`），逗号分隔 |
| `--pinned` / `-p` | 否 | `false` | 置顶（仅 `news`），作为公告置顶显示 |

分类取值：

- `news`：`新闻` / `活动` / `通知`（默认 `新闻`）
- `writeups`：`CTF Writeup` / `安全研究` / `工具分享`（默认 `CTF Writeup`）

## 使用方式

支持两种传参方式：

```bash
# 1. 位置参数
node scripts/new-post.mjs news "实验室招新启动"

# 2. 命名参数
node scripts/new-post.mjs --type news --title "实验室招新启动" --category "通知"
```

## 示例

```bash
# 新闻
npm run new:news -- "实验室举行第一次技术分享会" --category "活动"

# 通知
npm run new:news -- "实验室招新正式启动" --category "通知"

# 置顶公告
npm run new:news -- "实验室重要公告" --pinned

# CTF Writeup
npm run new:writeups -- "某 CTF 逆向题解" --tags "CTF,Reverse"

# 安全研究文章
npm run new:writeups -- "Web 安全入门学习路线" --category "安全研究" --tags "Web,学习路线,入门"
```

## 生成规则

1. **frontmatter**：自动写入 `title`、`description`、`date`、`category`，以及按类型追加 `pinned`、`author`、`tags` 字段，与 `src/content.config.ts` 中的 schema 保持一致。
2. **abbrlink**：根据标题自动计算 CRC32（与 `src/utils/crc32.ts` 一致），作为文章 URL slug。
3. **文件名**：
   - `news`：`日期-标题.md`（如 `2026-11-15-实验室内部培训.md`）
   - `writeups`：`标题.md`（如 `test-ctf-writeup.md`）
   - 中文标题保留原样；仅当标题清洗后为空时才回退为 abbrlink。
4. **覆盖保护**：若目标文件已存在，脚本会报错并退出，不会覆盖已有内容。

## 注意事项

- 生成的正文为占位内容，请按需替换为正式内容。
- `src/content` 已在 `.gitignore` 中被忽略，生成的文件默认不会进入版本控制。