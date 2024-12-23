// src/app/layout.tsx

import { BookingProvider } from '@/components/Providers';
import Footer from '@/layout/Footer';
import { ReactQueryProvider } from '@/react-query/ReactQueryProvider';
import { ReduxProvider } from '@/redux/ReduxProvider';
import { AnimatePresence } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultLayout from '../../src/layout/';
import './globals.css';

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
                <AnimatePresence>
                  <DefaultLayout />
                  {children}
                  <Footer />
                </AnimatePresence>
                <ToastContainer />
              </BookingProvider>
            </ReduxProvider>
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
