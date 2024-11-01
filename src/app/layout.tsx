import DefaultLayout from '@/layout';
import Footer from '@/layout/Footer';

import 'leaflet/dist/leaflet.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Booking App',
  description: 'Description Booking App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className}`}>
        <main className="">
          <DefaultLayout />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
