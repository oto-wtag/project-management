import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface ModeToggleProps {
  className?: string;
}

export default function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-7 w-14" />;
  }

  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      className={`flex h-7 w-14 cursor-pointer rounded-full p-[3px] transition-all duration-300 ${
        isDark ? 'border border-zinc-800 bg-zinc-950' : 'border border-zinc-200 bg-white'
      } ${className || ''}`}
      onClick={toggleTheme}
      type="button"
      tabIndex={0}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="flex w-full items-center justify-between">
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-300 ${
            isDark ? 'translate-x-0 bg-zinc-800' : 'translate-x-7 bg-gray-200'
          }`}
        >
          {isDark ? (
            <Moon className="h-[14px] w-[14px] text-white" strokeWidth={1.5} />
          ) : (
            <Sun className="h-[14px] w-[14px] text-gray-700" strokeWidth={1.5} />
          )}
        </div>
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-300 ${
            isDark ? 'bg-transparent' : '-translate-x-7'
          }`}
        >
          {isDark ? (
            <Sun className="h-[14px] w-[14px] text-gray-500" strokeWidth={1.5} />
          ) : (
            <Moon className="h-[14px] w-[14px] text-black" strokeWidth={1.5} />
          )}
        </div>
      </div>
    </button>
  );
}
