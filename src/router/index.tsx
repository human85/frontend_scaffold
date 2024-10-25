import Layout from '@/layout';
import { Badge, Friends, Tasks } from '@/views';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Badge />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'friends',
        element: <Friends />,
      },
    ],
  },
]);

export default router;
