import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import './globals.css';
import { DatesProvider } from '@mantine/dates';
import 'dayjs/locale/vi';
import DefaultLayout from '@/layout';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} bg-gray-100`}>
        <MantineProvider>
          <DatesProvider settings={{ locale: 'vi', timezone: 'UTC' }}>
            <DefaultLayout>{children}</DefaultLayout>
          </DatesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
