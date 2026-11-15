export const locales = ['zh', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

/** 站内界面文案（导航、页脚、按钮等）的中英文案 */
export const ui = {
  zh: {
    'site.name': '佛大网络安全实验室',
    'site.shortName': 'FosuSec',
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.news': '动态',
    'nav.awards': '获奖',
    'nav.writeups': 'Writeups',
    'nav.join': '加入我们',
    'nav.contact': '联系方式',
    'footer.github': 'GitHub',
    'footer.about': '关于我们',
    'footer.contact': '联系我们',
    'footer.email': '邮箱',
    'theme.toggle': '切换深色 / 浅色模式',
    'lang.switch': 'English',
  },
  en: {
    'site.name': 'FosuSec Cybersecurity Lab',
    'site.shortName': 'FosuSec',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.awards': 'Awards',
    'nav.writeups': 'Writeups',
    'nav.join': 'Join Us',
    'nav.contact': 'Contact',
    'footer.github': 'GitHub',
    'footer.about': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email',
    'theme.toggle': 'Toggle dark mode',
    'lang.switch': '中文',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['zh'];