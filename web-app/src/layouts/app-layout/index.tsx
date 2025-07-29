import { useMatches, Outlet } from 'react-router-dom';
import { useState } from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { AppSidebarHeader } from '@/components/sidebar/app-sidebar-header';

import type { BreadcrumbItem } from '@/lib/types';

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem('sidebar') !== 'false' : true
  );

  const handleSidebarChange = (open: boolean) => {
    setIsOpen(open);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar', String(open));
    }
  };

  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const handle = lastMatch?.handle as { breadcrumbs?: BreadcrumbItem[] };
  const breadcrumbs: BreadcrumbItem[] = handle?.breadcrumbs || [];

  return (
    <SidebarProvider defaultOpen={isOpen} open={isOpen} onOpenChange={handleSidebarChange}>
      <AppSidebar />
      <SidebarInset>
        <AppSidebarHeader breadcrumbs={breadcrumbs} />
        <div className="p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
