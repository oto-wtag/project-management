'use client';
import DotPattern from '@/components/dot-pattern';
import Particles from '@/components/particles';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

export const BackgroundPattern = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          '[mask-image:radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]',
          'dark:fill-slate-700'
        )}
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={isLightTheme ? '#000' : '#fff'}
        refresh
      />
    </>
  );
};
