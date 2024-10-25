import { Address } from '@ton/core';
import { isTelegramUrl } from '@tonconnect/ui-react';
import twa from '@twa-dev/sdk';
import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { DIRECT_LINK } from './constants';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const shortAddress = (addr: string | undefined | null): string => {
  if (!addr) return 'UQxx...xxxx';

  return addr.length > 10 ? `${addr.substring(0, 5)}...${addr.substring(addr.length - 4)}` : addr;
};

/**
 * 格式化数字为带逗号的样式
 */
export const commaNum = (num: number | string | bigint | undefined, min?: number, max?: number) => {
  const parsedNum = Number(num);

  return parsedNum.toLocaleString(undefined, {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  });
};
export const openLink = (url: string) => {
  if (isTelegramUrl(url)) {
    twa.openTelegramLink(url);
    return;
  }

  twa.openLink(url);
};

export const shareOnX = (text: string) => openLink(`https://x.com/intent/tweet?text=${text}`);

export const shareOnTg = (url: string, text: string) => {
  openLink(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
};

export const hideKeyboard = () => {
  if (!(document.activeElement instanceof HTMLElement)) return;

  document.activeElement.blur();
};

/** 检测地址是否合法 */
export const isAddress = (address: string) => {
  try {
    Address.parse(address);
    return true;
  } catch (e) {
    return false;
  }
};

// 比较两个地址是否相同
export const compareAddresses = (address1: string | Address, address2: string | Address) => {
  try {
    const a1 = address1 instanceof Address ? address1 : Address.parse(address1);
    const a2 = address2 instanceof Address ? address2 : Address.parse(address2);

    return a1.equals(a2);
  } catch (e) {
    return false;
  }
};

export const getStartParam = () => twa.initDataUnsafe.start_param;

export const getDirectLink = (startParam?: string) => `${DIRECT_LINK}${startParam ? `?startapp=${startParam}` : ''}`;

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Copied');
  } catch (e) {
    toast.error('Failed to copy');
  }
};
