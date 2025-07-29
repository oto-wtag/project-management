import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layouts/app-layout';
import Dashboard from '@/pages/dashboard';
import Settings from '@/pages/settings';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: {
          breadcrumbs: [{ title: 'Dashboard', href: '/' }],
        },
      },
      {
        path: 'settings',
        element: <Settings />,
        handle: {
          breadcrumbs: [
            { title: 'Dashboard', href: '/' },
            { title: 'Settings', href: '/settings' },
          ],
        },
      },
    ],
  },
]);

export default router;
