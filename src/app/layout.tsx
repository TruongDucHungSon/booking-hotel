// src/app/layout.tsx

import Footer from '@/layout/Footer';
import { ReactQueryProvider } from '@/react-query/ReactQueryProvider';
import { ReduxProvider } from '@/redux/ReduxProvider';
import 'leaflet/dist/leaflet.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import DefaultLayout from '../../src/layout/';
import './globals.css';
import { BookingProvider } from '@/components/Providers';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Booking App',
  description: 'Description Booking App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className}`}>
        <main className="root">
          <ReactQueryProvider>
            <ReduxProvider>
              <BookingProvider>
                <DefaultLayout />
                {children}
                <Footer />
              </BookingProvider>
            </ReduxProvider>
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
