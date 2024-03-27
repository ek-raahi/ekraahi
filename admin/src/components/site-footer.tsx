import { FC, HTMLAttributes } from 'react';

import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { cn } from '@/lib/cn';

export const SiteFooter: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-2 py-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <p className="text-center text-sm leading-loose sm:text-left">
            Ek Raahi.
            {/* Built by{' '}
            <a
              href="https://github.com/ejekanshjain"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              jayeshkugsiya
            </a>
            . */}
          </p>
        </div>
        <DarkModeToggle />
      </div>
    </footer>
  );
};
