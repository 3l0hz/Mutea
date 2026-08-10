
import React from 'react';
import { Header } from '@/components/mutea/Header';
import { Footer } from '@/components/mutea/Footer';
import { WhatsAppButton } from '@/components/mutea/WhatsAppButton';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GarantiaPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Header />
      
      <div className="pt-40 pb-24 px-6 max-w-[900px] mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-display font-black uppercase tracking-widest text-primary mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <header className="space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">
            Cambios y <br /><span className="text-primary">Garantía</span>
          </h1>
          <p className="text-sm font-display font-bold uppercase tracking-widest text-foreground/40">
            Compromiso MUTEA con el consumidor
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12 text-foreground/70 font-medium leading-relaxed">
          <p>MUTEA respeta los derechos establecidos en la legislación chilena de protección de los consumidores. Estamos comprometidos con ofrecer productos de alta calidad y un servicio de soporte eficiente.</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">Garantía Legal</h2>
            <p>En caso de productos defectuosos o que presenten problemas cubiertos por la garantía legal, el consumidor podrá ejercer los derechos que correspondan conforme a la legislación vigente ante el Servicio Nacional del Consumidor (SERNAC) y las normativas chilenas.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">Procedimiento de Solicitud</h2>
            <p>Para solicitar asistencia, el cliente deberá comunicarse con MUTEA mediante WhatsApp o correo electrónico, indicando los siguientes antecedentes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nombre completo del comprador.</li>
              <li>Número de pedido o comprobante de transferencia.</li>
              <li>Fecha de compra.</li>
              <li>Descripción detallada del problema o motivo de la solicitud.</li>
              <li>Cualquier antecedente adicional que permita identificar la operación.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">Gestión</h2>
            <p>MUTEA coordinará el procedimiento correspondiente según la naturaleza de la solicitud y la normativa aplicable, informando al cliente sobre los pasos a seguir para la revisión técnica o el cambio del producto si correspondiese.</p>
          </section>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
