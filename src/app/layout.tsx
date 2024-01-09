import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anna-kajsa',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-right" toastOptions={{ duration: 2500 }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
