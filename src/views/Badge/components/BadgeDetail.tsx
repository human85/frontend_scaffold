import { Button, Drawer, DrawerContent, DrawerTitle } from '@/components';
import { RANDOM_IMG } from '@/lib';

export const BadgeDetail = () => {
  return (
    <Drawer>
      <DrawerContent>
        <DrawerTitle className="mt-8 flex flex-col items-center gap-8">
          <img src={RANDOM_IMG} alt="badge" className="size-[140px] rounded-full" />
          <p className="font-montserrat-bold text-[26px] leading-none tracking-[-1px]">Omni Cat Bage</p>
        </DrawerTitle>

        <ul className="mt-7 rounded-2xl border border-[#BDBDBD] p-5 font-montserrat-medium text-xl leading-none text-orange-primary shadow-lg">
          <li className="flex items-center justify-between">
            <div className="flex items-end gap-1">
              <span>Slot:</span>
              <span className="text-xs leading-none">(Required)</span>
            </div>

            <div className="flex gap-3">
              <div className="size-[14px] rounded-full bg-orange-primary drop-shadow-sm" />
              <div className="size-[14px] rounded-full bg-orange-primary drop-shadow-sm" />
              <div className="size-[14px] rounded-full bg-orange-primary drop-shadow-sm" />
            </div>
          </li>

          <li className="mt-4 flex items-center justify-between">
            <div>Yield:</div>

            <div className="flex items-end gap-1">
              <span>36</span>
              <span className="text-xs leading-none">Honors/hour</span>
            </div>
          </li>
        </ul>

        <p className="mt-8 flex justify-between font-montserrat-bold text-lg leading-none">
          <span>Combo: 2%</span>
          <span>Series: Animals</span>
        </p>

        <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-white via-orange-primary to-white" />

        <p className="mt-5 leading-[22px]">
          Combine badges from the same series for extra bonuses. For example, using 'dogs' and 'cats' from the Animals
          Series will provide a 2% buff when farming.
        </p>

        <Button variant="orange" className="mt-8 h-10">
          Share to earn xxx honors
        </Button>

        <div className="mt-4 rounded-2xl bg-[#F0F0F0] py-2 text-center text-sm leading-6">
          Congrats. You have claimed <br /> <span className="font-montserrat-bold">100</span> honors from sharing!
        </div>
      </DrawerContent>
    </Drawer>
  );
};
