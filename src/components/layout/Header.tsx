
"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, Search, X, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Juguetes', href: '#' },
    { label: 'Gadgets', href: '#' },
    { label: 'Paseo', href: '#' },
    { label: 'Ofertas', href: '#', highlighted: true },
  ];

  return (
    <header className={cn(
      "fixed top-4 left-4 right-4 z-50 transition-all duration-300",
      isScrolled ? "top-2" : "top-4"
    )}>
      <nav className={cn(
        "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/20 transition-all duration-300",
        isScrolled && "py-3 shadow-xl"
      )}>
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-full text-white">
            <PawPrint className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">PawSense</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                item.highlighted ? "text-accent" : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-12">
              <span className="text-2xl font-bold text-primary">PawSense</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="flex flex-col gap-8">
              {menuItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className={cn(
                    "text-3xl font-bold tracking-tight",
                    item.highlighted ? "text-accent" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <Button className="w-full h-14 rounded-3xl text-lg font-bold">Ver Carrito</Button>
              <Button variant="outline" className="w-full h-14 rounded-3xl text-lg font-bold">Contáctanos</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
