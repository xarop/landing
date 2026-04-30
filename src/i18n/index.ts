import type { Locale, Translation } from './types';
import { ca } from './ca';
import { es } from './es';
import { en } from './en';

export const translations: Record<Locale, Translation> = { ca, es, en };

export const localePath: Record<Locale, string> = {
  ca: '/',
  es: '/es/',
  en: '/en/',
};

export const localeLabel: Record<Locale, string> = {
  ca: 'CA',
  es: 'ES',
  en: 'EN',
};

export type { Locale, Translation };
