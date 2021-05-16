import fs from 'fs';
import electron, { app } from 'electron';
import path from 'path';

const locale = navigator.language.split('-')[0];

let lang: any;

const file = path.join(__dirname, `/localization/${locale}.json`);
const defaultLocale = path.join(__dirname, `/localization/en.json`);
console.log('log', defaultLocale);
if (fs.existsSync(file)) {
  lang = JSON.parse(fs.readFileSync(file, 'utf-8'));
} else {
  lang = JSON.parse(fs.readFileSync(defaultLocale, 'utf-8'));
}
// eslint-disable-next-line import/prefer-default-export
export const t = (key: string) => {
  const translation = lang[key];
  if (translation === undefined) return 'missing translation';
  return translation;
};
