import { Outlet, ScrollRestoration } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Outlet />
      Hello Layout
      <p>human</p>
      <ScrollRestoration />
    </div>
  );
}

export default Layout;
