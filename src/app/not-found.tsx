import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
        <p className="text-foreground/10 text-8xl font-bold tracking-tight">
          404
        </p>
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
        <Button>
          <Link href="/">Go home</Link>
        </Button>
      </main>
    </div>
  );
}
