import { Outlet, Link } from 'react-router-dom';
import { BackgroundPattern } from '@/components/background-pattern';
import ModeToggle from '@/components/mode-toggle';

const AuthLayout = () => {
  return (
    <main className="relative flex min-h-screen flex-col text-sm">
      <BackgroundPattern />
      <nav className="sticky top-0 z-10 container mx-auto flex h-16 w-full items-center justify-between">
        <Link to="/">ProjectManagement</Link>
        <ModeToggle />
      </nav>
      <div className="z-10 container mx-auto mb-20 flex flex-grow items-center justify-center px-4 md:px-0">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
