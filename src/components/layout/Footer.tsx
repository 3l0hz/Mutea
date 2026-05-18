
"use client";

import React from 'react';
import { MessageCircle, Instagram, Facebook, Twitter, PawPrint } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-4 border-t border-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-full text-white">
              <PawPrint className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">PawSense</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Especialistas en juguetes y gadgets inteligentes para mascotas. Elevando la diversión y el bienestar de perros y gatos en todo Chile.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8">Nuestra Tienda</h4>
          <ul className="flex flex-col gap-4 text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Catálogo de Juguetes</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Gadgets Tecnológicos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Nuevos Ingresos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ofertas Destacadas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8">Ayuda</h4>
          <ul className="flex flex-col gap-4 text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Políticas de Envío</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Seguimiento de Pedido</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Atención al Cliente</h4>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-bold shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp PawSense
            </a>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Métodos de Pago</h4>
            <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
              <img src="https://placehold.co/40x25?text=VISA" alt="Visa" className="rounded" />
              <img src="https://placehold.co/40x25?text=MC" alt="Mastercard" className="rounded" />
              <img src="https://placehold.co/40x25?text=Webpay" alt="Webpay" className="rounded" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} PawSense Chile. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
