import Sidebar from '@/components/features/sidebar';
import { navItems } from '@/lib/nav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar items={navItems} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
