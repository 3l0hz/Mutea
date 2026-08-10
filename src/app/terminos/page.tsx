
import React from 'react';
import { Header } from '@/components/mutea/Header';
import { Footer } from '@/components/mutea/Footer';
import { WhatsAppButton } from '@/components/mutea/WhatsAppButton';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TerminosPage() {
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
            Términos y <br /><span className="text-primary">Condiciones</span>
          </h1>
          <p className="text-sm font-display font-bold uppercase tracking-widest text-foreground/40">
            Última actualización: agosto de 2026
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12 text-foreground/70 font-medium leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">1. Identificación del Proveedor</h2>
            <p>MUTEA es una marca comercial dedicada a la comercialización de productos tecnológicos. Los datos legales del proveedor, incluyendo razón social, RUT, domicilio y medios de contacto, serán informados al consumidor antes de concretar la compra.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">2. Proceso de Compra</h2>
            <p>Las compras se gestionan directamente mediante WhatsApp. El proceso contempla:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>El cliente solicita información sobre el producto.</li>
              <li>MUTEA informa precio, características, disponibilidad, despacho y medios de pago.</li>
              <li>El cliente confirma su intención de compra.</li>
              <li>Se coordina el pago.</li>
              <li>MUTEA confirma por escrito los antecedentes de la operación.</li>
              <li>Se coordina el despacho o entrega.</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">3. Precios y Disponibilidad</h2>
            <p>Los precios publicados en el sitio corresponden a pesos chilenos (CLP). Los precios, promociones, disponibilidad y costos de despacho serán informados antes de confirmar la compra. MUTEA respetará las condiciones y precios informados al consumidor conforme a la legislación aplicable.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">4. Despachos</h2>
            <p>Las condiciones de despacho, cobertura, costos y plazos estimados serán informados al momento de coordinar la compra. Los plazos pueden variar dependiendo de la comuna, empresa de transporte y circunstancias ajenas al proveedor.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">5. Derecho de Retracto</h2>
            <p>En las compras realizadas a distancia serán respetados los derechos establecidos por la legislación chilena aplicable, incluyendo el derecho de retracto cuando resulte aplicable. El consumidor podrá ejercer los derechos que correspondan conforme a la normativa vigente.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">6. Garantía Legal</h2>
            <p>Los productos nuevos cuentan con la garantía legal establecida por la legislación chilena. Cuando corresponda, el consumidor podrá ejercer las alternativas y derechos establecidos por la legislación vigente frente a productos defectuosos.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">7. Productos y Uso</h2>
            <p>El consumidor deberá utilizar cualquier producto adquirido de acuerdo con sus instrucciones, especificaciones y normativa aplicable. MUTEA no será responsable por daños derivados de un uso distinto al indicado por el fabricante o de intervenciones no autorizadas.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">8. Atención al Cliente</h2>
            <p>Las consultas, solicitudes de postventa, garantías y demás comunicaciones podrán gestionarse mediante WhatsApp o el correo electrónico informado oficialmente por MUTEA: <strong>hola@mutea.cl</strong></p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black uppercase tracking-wider text-foreground">9. Modificaciones</h2>
            <p>MUTEA podrá actualizar estos Términos y Condiciones cuando sea necesario. La versión aplicable a una compra será la que corresponda al momento de su contratación.</p>
          </section>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
