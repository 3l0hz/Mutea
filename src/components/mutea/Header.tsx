
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
      isScrolled ? "bg-white/90 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-3"
    )}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src={LOGO_OFFICIAL_URL}
            alt="MUTEA Logo"
            width={400}
            height={100}
            className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
            unoptimized
          />
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#beneficios" className="text-[10px] font-display font-bold tracking-widest text-foreground/60 hover:text-primary transition-colors uppercase">Beneficios</a>
          <a href="#casos" className="text-[10px] font-display font-bold tracking-widest text-foreground/60 hover:text-primary transition-colors uppercase">Casos de Uso</a>
          <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 font-display font-bold tracking-widest uppercase text-[10px]">
            Comprar
          </Button>
        </div>
      </nav>
    </header>
  );
}
