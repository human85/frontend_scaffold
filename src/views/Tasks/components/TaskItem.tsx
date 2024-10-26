import { CheckedIcon } from '@/assets';
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Claim } from './Claim';

export const TaskItem = ({ checked = false, taskItem }: { checked?: boolean; taskItem: API.TaskItem }) => {
  const [openClaim, setOpenClaim] = useState(false);

  return (
    <li>
      <Collapsible>
        <CollapsibleTrigger className="group flex min-h-20 w-full items-center rounded-full bg-[#303030] px-[2px] py-[2px] pr-5">
          <img className="size-[76px] rounded-full object-cover" src={taskItem.logo} />

          <div className="ml-2 mr-auto flex flex-col gap-2">
            <p className="max-w-32 text-left font-montserrat-semibold text-xs">{taskItem.name}</p>

            <div className="flex items-center gap-1">
              <span className="text-[#8D8D8D max-w-16 truncate text-[10px] leading-none">{taskItem.desc}</span>
              <ChevronDown size={14} className="transition-all group-data-[state=open]:-rotate-180" />
            </div>
          </div>

          <div onClick={e => e.stopPropagation()}>
            {checked ? (
              <CheckedIcon />
            ) : (
              <Button asChild onClick={() => setOpenClaim(true)} className="text-[10px]">
                <span>Check</span>
              </Button>
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-2 overflow-hidden rounded-3xl bg-white text-xs leading-[18px] text-black data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
          <div className="py-4 pl-7 pr-16">
            <span className="font-montserrat-bold">To be eligible: </span>
            {taskItem.desc}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Claim open={openClaim} onOpenChange={setOpenClaim} />
    </li>
  );
};
