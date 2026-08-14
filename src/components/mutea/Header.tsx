"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ReservationModal } from './ReservationModal';

const LOGO_OFFICIAL_URL = "https://exntfmqdonkpbzrlsbww.supabase.co/storage/v1/object/sign/HeroSection/Mutea%20Logo/mutea%20png.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY4MzQ3Ni1lYjFiLTQ0YjUtYmNmZC0zZGZkODM3ZmFmMjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIZXJvU2VjdGlvbi9NdXRlYSBMb2dvL211dGVhIHBuZy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1NDM3NTU1LCJleHAiOjE4MTY5NzM1NTV9.JionC7C3f8CyKblQ7G-B45SgzPcn-YQWTqs4DltRqXg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 flex items-center h-28 md:h-32",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between w-full h-full py-2">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src={LOGO_OFFICIAL_URL}
              alt="MUTEA Logo"
              width={300}
              height={75}
              className="!h-20 md:!h-24 w-auto object-contain transition-all duration-300"
              unoptimized
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-10">
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#beneficios" className="text-[10px] font-display font-bold tracking-widest text-foreground/60 hover:text-primary transition-colors uppercase">Beneficios</Link>
            <Link href="/#casos" className="text-[10px] font-display font-bold tracking-widest text-foreground/60 hover:text-primary transition-colors uppercase">Casos de Uso</Link>
          </div>
          
          <ReservationModal 
            trigger={
              <Button variant="mutea" className="px-6 md:px-8 h-12 md:h-13 text-[10px] md:text-[11px]">
                Comprar
              </Button>
            }
          />
        </div>
      </nav>
    </header>
  );
}
