import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vaylora Global | More money home',
  description: 'Compare international transfer fees and actual recipient payouts. Independent comparison. No money transfers.',
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
