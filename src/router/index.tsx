import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import { Home } from '@/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
