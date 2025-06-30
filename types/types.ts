import { colorClassMap } from '@/utils';

export type ColorVariant = keyof typeof colorClassMap;

export type serviceProps = {
  color: ColorVariant;
  icon: string;
  title: string;
  paragraph: string;
  linkSrc: string;
};

export type userFeedCardType = {
    stats: number
    color: ColorVariant,
    icon: string,
    title: string,
    subTitle: string,
    p: string,
    linkHref: string
}