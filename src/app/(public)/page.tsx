import Sidebar from '@/components/features/sidebar';
import { navItems } from '@/lib/nav';

// TODO: Sidebar тут тимчасово для розробки — прибрати після реалізації auth middleware.
// На продакшн / не повинна мати sidebar (це зона (public), не (app)).

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar items={navItems} />
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight">Transfer Vision</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          AI-powered football scouting platform
        </p>
      </main>
    </div>
  );
}
