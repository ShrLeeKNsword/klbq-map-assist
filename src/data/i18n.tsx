import { I18nData, Languages } from '../types/interface';
import en_US from './languages/en_US';
import ja_JP from './languages/ja_JP';
import zh_CN from './languages/zh_CN';

export const i18nData: {
  [key in Languages]: I18nData
} = {
  English: en_US,
  日本語: ja_JP,
  简体中文: zh_CN
}