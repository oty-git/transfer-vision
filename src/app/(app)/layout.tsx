import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/players', label: 'Players' },
  { href: '/scouting', label: 'Scouting' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r border-border bg-sidebar px-4 py-6">
        <div className="mb-8 px-2">
          <span className="text-lg font-semibold tracking-tight">Transfer Vision</span>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
