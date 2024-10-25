// import { useUserInfo } from '@/hooks';
import { cn, shortAddress } from '@/lib';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
// import { useInitData } from '@telegram-apps/sdk-react';
import { LogoIcon } from '@/assets';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import { ChevronDownCircle } from 'lucide-react';
import { createPortal } from 'react-dom';
import { Button } from './ui';
// import { XStarIcon } from './Icons';
// import { Button, Popover, PopoverContent, PopoverTrigger } from './ui';

export function Header({ children, className }: { children?: React.ReactNode; className?: string }) {
  // const initData = useInitData();
  // const avatar = initData?.user?.photoUrl;
  // const usernamne = initData?.user?.username || 'N/A';

  const avatar = '';
  const usernamne = 'N/A';
  const address = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  // const { userInfo } = useUserInfo();
  // const setOpenWalletConnect = useAppStore(state => state.setOpenWalletConnect);
  return (
    <>
      {createPortal(
        <div className={cn('fixed left-0 right-0 top-0 z-40 flex h-16 items-center px-5 backdrop-blur-sm', className)}>
          <div className="flex items-center gap-2">
            {avatar ? (
              <img src={avatar} className="size-7 rounded-full" alt="avatar" />
            ) : (
              <LogoIcon className="size-8" />
            )}

            <span className="text-xs">@{usernamne}</span>
          </div>

          {children || (
            <div className="ml-auto flex items-center gap-2 text-sm leading-none">
              <span>{address ? shortAddress(address) : 'Wallet'}</span>

              {address ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <ChevronDownCircle className="transition-all data-[state=open]:-rotate-180" size={20} />
                  </PopoverTrigger>

                  <PopoverContent
                    style={{
                      backgroundImage: 'linear-gradient(0deg, #000, #000), linear-gradient(90deg, #0ff, #8c66f9)',
                    }}
                    className="fancy-border grid w-fit cursor-pointer place-items-center rounded-full px-5 py-[10px]"
                    align="end"
                    sideOffset={8}
                    onClick={() => tonConnectUI.disconnect()}
                  >
                    <span className="bg-gradient-primary bg-clip-text font-montserrat-medium text-xs leading-none text-transparent">
                      Disconnect
                    </span>
                  </PopoverContent>
                </Popover>
              ) : (
                <Button
                  variant="fancy"
                  className="h-5 px-3 py-0 text-xs leading-none"
                  onClick={() => tonConnectUI.openModal()}
                >
                  <span className="text-orange-primary">Connect</span>
                </Button>
              )}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
