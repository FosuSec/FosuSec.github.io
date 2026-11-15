import { ui, defaultLocale, type Locale, type TranslationKey } from './ui';

export type { Locale, TranslationKey };

/** 返回指定语言的翻译函数（缺省时回退到默认语言） */
export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/** 从 URL 路径判断当前语言 */
export function getLocaleFromUrl(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

/** 去掉路径中的语言前缀，得到站内相对路径 */
export function stripLocale(pathname: string): string {
  const without = pathname.replace(/\/$/, '');
  if (without === '/en') return '/';
  return without.startsWith('/en/') ? without.slice(3) : without || '/';
}