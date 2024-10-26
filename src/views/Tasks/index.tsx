import { ArrowButton, Card, Loading } from '@/components';
import { RANDOM_IMG, TaskType, cn } from '@/lib';
import { useState } from 'react';
import { TaskItem } from './components';
import { useTasks } from './hooks';

const TABS = ['Badge', 'Social', 'Partners'] as const;

export const Tasks = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);

  const { tasks, tasksLoading, tasksLoadingMore } = useTasks();

  const badgeTasks = tasks?.filter(item => item.type === TaskType.badge);
  const socialTasks = tasks?.filter(item => item.type === TaskType.daily || item.type === TaskType.onetime);
  const partnerTasks = tasks?.filter(item => item.type === TaskType.partner);

  const loading = (tasksLoading && !tasks) || tasksLoadingMore;

  return (
    <div className="p-11">
      <Card className="flex animate-jump-in items-center justify-between gap-8 p-7">
        <div className="flex flex-col justify-center gap-8">
          <p className="max-w-40 text-xl font-medium">Omni Dogs Badge is live!</p>

          <p className="text-xs text-[#CDCDCD]">For $DOGS holders</p>
        </div>

        <div className="flex flex-shrink-0 flex-col justify-center gap-5">
          <img src={RANDOM_IMG} className="size-20 rounded-full shadow-[0px_0px_8px_2px_#ffffff3f]" />

          <ArrowButton bg="linear-gradient(0deg, #2C2C2C, #2C2C2C), linear-gradient(90deg, #fff, #f80)">
            Claim
          </ArrowButton>
        </div>
      </Card>

      <div className="mt-11">
        <ul className="flex justify-between font-montserrat-medium text-lg leading-none">
          {TABS.map(tab => (
            <li className="flex flex-col items-center gap-3" key={tab} onClick={() => setActiveTab(tab)}>
              <button className={cn(activeTab !== tab && 'opacity-40')}>{tab}</button>

              <svg
                className={cn(activeTab !== tab && 'opacity-0')}
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="2"
                viewBox="0 0 90 2"
                fill="none"
              >
                <path d="M0 1L90 1.00001" stroke="url(#paint0_linear_15_1610)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_15_1610"
                    x1="-8.7"
                    y1="1"
                    x2="100.8"
                    y2="1.00001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0" />
                    <stop offset="0.47" stopColor="#CFCFCF" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </li>
          ))}
        </ul>

        <TabContent isAcitive={activeTab === 'Badge'}>
          {badgeTasks?.map(task => <TaskItem key={task.id} taskItem={task} />)}

          <Loading loading={loading} />
        </TabContent>

        <TabContent isAcitive={activeTab === 'Social'}>
          {socialTasks?.map(task => <TaskItem key={task.id} taskItem={task} />)}
          <Loading loading={loading} />
        </TabContent>

        <TabContent isAcitive={activeTab === 'Partners'}>
          {partnerTasks?.map(task => <TaskItem key={task.id} taskItem={task} />)}
          <Loading loading={loading} />
        </TabContent>
      </div>
    </div>
  );
};

const TabContent = ({ children, isAcitive }: { children: React.ReactNode; isAcitive?: boolean }) => {
  return (
    <ul hidden={!isAcitive} className="mt-6 animate-fade-left space-y-2">
      {children}
    </ul>
  );
};
