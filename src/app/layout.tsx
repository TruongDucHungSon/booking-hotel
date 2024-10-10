import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import './globals.css';

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
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
