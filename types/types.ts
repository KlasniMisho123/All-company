import { colorClassMap } from '@/utils';

export type ColorVariant = keyof typeof colorClassMap;

export type serviceProps = {
  color: ColorVariant;
  icon: string;
  title: string;
  paragraph: string;
  linkSrc: string;
};