import { BadgeIcon, FriendsIcon, TasksIcon } from '@/assets';
import { cn } from '@/lib';
import { NavLink, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

export const Navbar = ({ hidden }: { hidden?: boolean }) => {
  const { pathname } = useLocation();

  if (pathname.split('/').length > 2 || hidden) return null;

  return (
    <nav
      style={{ boxShadow: '0px 0px 6px 4px #ffffff66 inset' }}
      className="fixed bottom-8 left-1/2 z-40 flex h-20 w-[calc(100vw-90px)] -translate-x-1/2 justify-around rounded-full bg-black"
    >
      <NavItem icon={<BadgeIcon />} text="Badge" to="/" />
      <NavItem icon={<TasksIcon />} text="Tasks" to="/tasks" />
      <NavItem icon={<FriendsIcon />} text="Friends" to="/friends" />
    </nav>
  );
};

const NavItem = ({
  text,
  to,
  disabled = false,
  icon,
}: {
  text: string;
  to: string;
  disabled?: boolean;
  icon: React.ReactNode;
}) => {
  if (disabled) {
    return (
      <span
        onClick={() => toast.info('Coming soon...')}
        className="flex flex-1 flex-col items-center justify-between opacity-65"
      >
        {icon}

        <span className="text-[10px] text-white">{text}</span>
      </span>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex flex-1 flex-col items-center justify-between py-4 text-white [&_path]:fill-white',
          isActive && 'rounded-full bg-white text-black [&_path]:fill-black'
        )
      }
      end
    >
      {icon}

      <span className="text-[10px]">{text}</span>
    </NavLink>
  );
};
