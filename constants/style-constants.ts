import clsx from 'clsx';

import { Lora } from 'next/font/google';

export const serifFont = Lora({ subsets: ['latin'], weight: ['400'] });

export const H1Styles: string = clsx('text-5xl font-bold', serifFont.className);
export const H2Styles: string = clsx('text-4xl font-bold');
export const CardListStyles = clsx('flex flex-col space-y-5 py-5');
