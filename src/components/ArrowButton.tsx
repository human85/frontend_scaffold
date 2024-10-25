import { cn } from '@/lib';
import { ChevronRight } from 'lucide-react';
import { forwardRef } from 'react';
import { Button, ButtonProps } from './ui';

type Props = ButtonProps & {
  height?: number;
  bg?: string;
};

export const ArrowButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, height = 24, className, bg, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        style={{ height, paddingRight: height + 6, backgroundImage: bg }}
        className={cn(
          'fancy-border relative py-2 pl-[13px] font-montserrat-medium text-[10px] leading-none text-orange-primary shadow-none',
          className
        )}
      >
        {children}

        <div
          style={{ height, width: height }}
          className="absolute right-0 grid place-items-center rounded-full bg-orange-primary"
        >
          <ChevronRight color="white" style={{ height: height / 1.5, width: height / 1.5 }} />
        </div>
      </Button>
    );
  }
);
