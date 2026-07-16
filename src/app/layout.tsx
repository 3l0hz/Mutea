
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MUTEA | Próximamente',
  description: 'Descubre la nueva experiencia de MUTEA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased selection:bg-primary/10`}>
        {children}
      </body>
    </html>
  );
}
