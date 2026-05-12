'use client';

import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard, Users, Crosshair } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavItem } from '@/lib/nav';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  players: Users,
  scouting: Crosshair,
};

interface SidebarProps {
  title?: string;
  items: NavItem[];
  footer?: ReactNode;
}

export default function Sidebar({ title = 'Transfer Vision', items, footer }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-sidebar-border bg-sidebar px-4 py-6">
      <div className="mb-8 px-2">
        <span className="text-lg font-semibold tracking-tight text-sidebar-foreground">
          {title}
        </span>
      </div>

      <nav>
        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const Icon = ICON_MAP[item.id];
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href + '/');

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  )}
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0" />}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {footer && (
        <div className="mt-auto pt-8 text-sm text-sidebar-foreground/60">{footer}</div>
      )}
    </aside>
  );
}
