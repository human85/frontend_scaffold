import { isAdmin } from '@/lib';
import twa from '@twa-dev/sdk';
import eruda from 'eruda';
import { useEffect } from 'react';

/** 移动端调试工具 */
export function useEruda() {
  useEffect(() => {
    if (!isAdmin) return;
    if (twa.platform !== 'ios' && twa.platform !== 'android') return;

    eruda.init();
  }, []);
}
