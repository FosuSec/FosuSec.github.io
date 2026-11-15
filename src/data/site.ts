/**
 * 站点级配置：品牌信息、链接等全局常量。
 * 修改这里即可统一更新全站头部/尾部的信息。
 */
export const site = {
  name: '佛大网络安全实验室',
  nameEn: 'FosuSec Cybersecurity Lab',
  shortName: 'FosuSec',
  fullName: '佛大网络安全实验室（FosuSec）',
  startYear: '2023',
  description:
    '佛大网络安全实验室（FosuSec）致力于网络安全技术研究、CTF 竞赛与安全人才培养。',
  descriptionEn:
    'FosuSec (Foshan University Cybersecurity Lab) focuses on cybersecurity research, CTF competitions, and talent development.',
  url: 'https://fosusec.github.io',
  github: 'https://github.com/FosuSec',
  email: 'aurorp1g@gmail.com ',
  /** 招新 / 加入入口是否开启 */
  recruitmentOpen: true,
} as const;