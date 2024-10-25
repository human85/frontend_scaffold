import { Button, Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle } from '@/components';

export const ClaimTip = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerTitle className="text-[22px] leading-7">You can claim your honors every 8 hours.</DrawerTitle>

        <div className="mt-8 flex items-center justify-center gap-4 font-montserrat-semibold text-xl leading-none tracking-[0.8px] text-orange-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
            <path
              d="M13.8001 0C14.0387 0 14.2677 0.0948213 14.4364 0.263604C14.6052 0.432387 14.7001 0.661305 14.7001 0.9C14.7001 1.13869 14.6052 1.36761 14.4364 1.5364C14.2677 1.70518 14.0387 1.8 13.8001 1.8H12.9001V4.5C12.9006 5.39117 12.6803 6.26858 12.2589 7.05384C11.8376 7.8391 11.2282 8.50773 10.4853 9C11.1999 9.47312 11.7913 10.1098 12.2106 10.8571C12.63 11.6045 12.8651 12.4411 12.8965 13.2975L12.9001 13.5V16.2H13.8001C14.0387 16.2 14.2677 16.2948 14.4364 16.4636C14.6052 16.6324 14.7001 16.8613 14.7001 17.1C14.7001 17.3387 14.6052 17.5676 14.4364 17.7364C14.2677 17.9052 14.0387 18 13.8001 18H1.20005C0.961354 18 0.732436 17.9052 0.563653 17.7364C0.39487 17.5676 0.300049 17.3387 0.300049 17.1C0.300049 16.8613 0.39487 16.6324 0.563653 16.4636C0.732436 16.2948 0.961354 16.2 1.20005 16.2H2.10005V13.5C2.09953 12.6088 2.3198 11.7314 2.74117 10.9462C3.16254 10.1609 3.77188 9.49227 4.51475 9C3.80022 8.52688 3.20877 7.89023 2.78945 7.14285C2.37014 6.39547 2.13504 5.5589 2.10365 4.7025L2.10005 4.5V1.8H1.20005C0.961354 1.8 0.732436 1.70518 0.563653 1.5364C0.39487 1.36761 0.300049 1.13869 0.300049 0.9C0.300049 0.661305 0.39487 0.432387 0.563653 0.263604C0.732436 0.0948213 0.961354 0 1.20005 0H13.8001ZM7.50005 9.9C6.57643 9.9 5.68814 10.255 5.01892 10.8916C4.34969 11.5281 3.95073 12.3975 3.90455 13.32L3.90005 13.5V16.2H11.1V13.5C11.1 12.5452 10.7208 11.6295 10.0456 10.9544C9.3705 10.2793 8.45483 9.9 7.50005 9.9ZM11.1 1.8H3.90005V4.5C3.90003 5.4392 4.26706 6.34122 4.92281 7.01359C5.57856 7.68596 6.47112 8.07544 7.41002 8.09893C8.34893 8.12242 9.25984 7.77805 9.94839 7.13931C10.6369 6.50056 11.0486 5.61802 11.0956 4.68L11.1 4.5V1.8Z"
              fill="#FF8800"
            />
          </svg>

          <span>08:40:29</span>
        </div>

        <p className="mt-8">
          While farming is in progress, you can't change the badge. Once farming ends, you're free to swap badges in the
          slots.
        </p>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="orange">Understand</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
