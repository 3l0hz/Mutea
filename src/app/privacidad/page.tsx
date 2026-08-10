
import React from 'react';
import { Header } from '@/components/mutea/Header';
import { Footer } from '@/components/mutea/Footer';
import { WhatsAppButton } from '@/components/mutea/WhatsAppButton';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacidadPage() {
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
            Política de <br /><span className="text-primary">Privacidad</span>
          </h1>
          <p className="text-sm font-display font-bold uppercase tracking-widest text-foreground/40">
            Última actualización: agosto de 2026
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12 text-foreground/70 font-medium leading-relaxed">
          <p>MUTEA podrá recopilar los datos que el consumidor entregue voluntariamente durante el proceso de consulta o compra, tales como nombre, teléfono, correo electrónico y datos necesarios para coordinar la entrega.</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">Uso de los Datos</h2>
            <p>Estos datos serán utilizados exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gestionar consultas y solicitudes de información.</li>
              <li>Procesar y confirmar compras.</li>
              <li>Coordinar despachos y entregas de productos.</li>
              <li>Entregar soporte técnico y servicio de postventa.</li>
              <li>Gestionar garantías y solicitudes de devolución.</li>
              <li>Cumplir obligaciones legales y tributarias vigentes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">Tratamiento y Seguridad</h2>
            <p>MUTEA no utilizará los datos personales para finalidades incompatibles con aquellas informadas al consumidor. Los datos serán tratados conforme a la legislación chilena aplicable en materia de protección de datos personales.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">Contacto para Datos Personales</h2>
            <p>Para cualquier solicitud relacionada con la actualización, rectificación o eliminación de sus datos personales, el consumidor podrá comunicarse directamente a través de nuestro correo oficial:</p>
            <p className="font-display font-black uppercase tracking-widest text-primary">hola@mutea.cl</p>
          </section>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
