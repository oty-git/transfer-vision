import type { Metadata } from 'next';
import { Oswald, Source_Sans_3 } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Transfer Vision',
  description: 'AI-powered football scouting platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${oswald.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
