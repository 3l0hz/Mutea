
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'MUTEA | Tranquilidad en cualquier lugar',
  description: 'Descubre la nueva experiencia de silencio con MUTEA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${orbitron.variable} antialiased selection:bg-primary/20 bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
