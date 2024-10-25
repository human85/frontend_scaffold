import { SlotLockedIcon } from '@/assets';
import {
  ArrowButton,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from '@/components';

export const UnlockSlot = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <ArrowButton>Unlock</ArrowButton>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerTitle>Unlock Slot</DrawerTitle>
        <div className="mt-8 flex items-center justify-between">
          <div className="size-5 rounded-full bg-orange-primary" />
          <div className="size-5 rounded-full bg-orange-primary" />
          <div className="size-5 rounded-full bg-orange-primary" />
          <SlotLockedIcon className="[&_circle]:fill-[#C8C8C8]" />
          <SlotLockedIcon className="[&_circle]:fill-[#C8C8C8]" />
          <SlotLockedIcon className="[&_circle]:fill-[#C8C8C8]" />
          <SlotLockedIcon className="[&_circle]:fill-[#C8C8C8]" />
          <SlotLockedIcon className="[&_circle]:fill-[#C8C8C8]" />
          <SlotLockedIcon className="[&_circle]:fill-[#C8C8C8]" />
        </div>

        <ul className="mt-8">
          <li className="flex items-center justify-between">
            <span>Current slot:</span>

            <div className="grid h-[26px] w-20 place-items-center rounded-full border-[0.4px]">3</div>
          </li>

          <li className="mt-5 flex items-center justify-between">
            <span>Cost for next slot:</span>

            <div className="flex h-[26px] items-end gap-1 rounded-full border-[0.4px] px-6 text-xs leading-[22px]">
              <span className="font-montserrat-bold text-base">500</span>Honors
            </div>
          </li>
        </ul>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="orange">Unlock next slot</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
