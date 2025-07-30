import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';

import Dashboard from '@/pages/app/dashboard';
import Settings from '@/pages/app/settings';
import Projects from '@/pages/projects';

import Login from '@/pages/auth/login';
import SignUp from '@/pages/auth/sign-up';

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },

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
      {
        path: 'projects',
        element: <Projects />,
        handle: {
          breadcrumbs: [{ title: 'Projects List', href: '/projects' }],
        },
      },
    ],
  },
]);

export default router;
