import { AddIcon, SlotEmptyIcon, SlotEquippedIcon, SlotLockedIcon, StageIcon } from '@/assets';
import { ArrowButton, Button, Card } from '@/components';
import { RANDOM_IMG, cn } from '@/lib';
import { useState } from 'react';
import { BadgeDetail, ClaimTip, HowToFarm, UnlockSlot } from './components';

export const Badge = () => {
  const [openClaimTip, setOpenClaimTip] = useState(false);

  return (
    <div className="animate-fade-up px-8 pt-11 text-center">
      <p className="tracking-[1.28px]">HONOR</p>

      <div className="relative mx-auto mt-4 w-fit">
        <span className="font-montserrat-semibold text-[40px] leading-none tracking-[3.2px]">2,100</span>
        <div className="absolute -right-16 bottom-0 text-xs leading-none text-[#B6B6B6]">
          <p>Rate:</p>
          <p className="mt-2">180/Hour</p>
        </div>
      </div>

      <StageIcon className="mx-auto mt-10" />

      <div className="mt-11 px-5">
        <div className="flex items-center justify-between">
          <span className="text-xs">Current Slot: 3</span>

          <UnlockSlot />
        </div>

        {/* 卡槽 */}
        <div className="mt-5 flex items-center justify-between">
          <SlotEquippedIcon className="-m-[9px]" />
          <SlotEmptyIcon />
          <SlotLockedIcon />
          <SlotLockedIcon />
          <SlotLockedIcon />
          <SlotLockedIcon />
          <SlotLockedIcon />
          <SlotLockedIcon />
          <SlotLockedIcon />
        </div>
      </div>

      <Card className="mt-11">
        <div className="flex items-center justify-between">
          <span>equipped</span>

          <HowToFarm />
          <Button variant="orange" className="h-7 text-xs" onClick={() => setOpenClaimTip(true)}>
            Start Farming
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-y-5">
          <div className="grid size-[60px] place-items-center rounded-full border border-[#636363] bg-[#353535]">
            <AddIcon />
          </div>
        </div>
      </Card>

      <div className="mt-11 px-5">
        <div className="flex items-center justify-between">
          <span className="text-xs">Current Slot: 3</span>

          <ArrowButton>Claim</ArrowButton>
        </div>

        <div className="mt-5 flex flex-wrap justify-between gap-2">
          {Array.from({ length: 28 }).map((_, i) => (
            <img
              key={i}
              src={RANDOM_IMG}
              className={cn(
                //  6 15 19 (i - 5) % 9 === 0
                'size-12 rounded-full bg-white',
                i === 27 && 'mr-auto',
                (i - 5) % 9 === 0 && 'ml-6',
                (i - 8) % 9 === 0 && 'mr-6'
              )}
              alt="badge"
            />
          ))}
        </div>
      </div>

      <ClaimTip open={openClaimTip} onOpenChange={setOpenClaimTip} />
      <BadgeDetail />
    </div>
  );
};
