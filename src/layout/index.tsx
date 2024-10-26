import { LogoIcon, StageIcon } from '@/assets';
import { Button, Header, Navbar, Toaster } from '@/components';
import { useCreateUser, useEruda } from '@/hooks';
import { useAppStore } from '@/store';
import { createPortal } from 'react-dom';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  const isNewUser = useAppStore(state => state.isNewUser);

  useEruda();

  if (isNewUser) return <LandingPage />;

  return (
    <div className="pb-32 pt-16">
      <Header />
      <Outlet />
      <Navbar />
      <ScrollRestoration />
      {createPortal(<Toaster />, document.body)}
    </div>
  );
};

const LandingPage = () => {
  const { createUser, createUserLoading } = useCreateUser();

  return (
    <div className="flex h-screen flex-col items-center justify-evenly px-11">
      <LogoIcon className="-my-6" />

      <div>
        <h2 className="text-center">
          <p className="mx-auto w-fit bg-silver-text bg-clip-text font-montserrat-semibold text-[32px] leading-[44px] text-transparent">
            Your Badge
          </p>

          <p className="mx-auto w-fit bg-silver-text bg-clip-text font-montserrat-semibold text-[32px] leading-[44px] text-transparent">
            Your <span className="bg-orange-text bg-clip-text">Honors</span>
          </p>
        </h2>
        <StageIcon className="my-12" />
        <p className="text-center text-lg leading-none">‘Claim’ - ‘Equip’ - ‘Earn’</p>
      </div>

      <Button onClick={() => createUser()} loading={createUserLoading} variant="orange" className="h-10 w-full">
        Enter
      </Button>
    </div>
  );
};

export default Layout;
