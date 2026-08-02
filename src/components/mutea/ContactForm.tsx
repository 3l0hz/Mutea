
"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MessageCircle, Send } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  city: z.string().min(2, {
    message: "La región y comuna son obligatorias.",
  }),
  message: z.string().optional(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      city: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "56940628182";
    const baseText = `Hola! Mi nombre es ${values.fullName}, soy de la región y comuna: ${values.city}. Me gustaría obtener información sobre MUTEA.`;
    const messagePart = values.message ? ` Consulta: ${values.message}` : "";
    const fullText = encodeURIComponent(baseText + messagePart);
    
    window.open(`https://wa.me/${phoneNumber}?text=${fullText}`, '_blank');
  }

  return (
    <section className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50">
          <div className="text-center space-y-4 mb-12">
            <span className="text-primary font-display font-black tracking-[0.3em] uppercase text-[10px]">Atención Personalizada</span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">¿Tienes Dudas?</h2>
            <p className="text-foreground/50 font-medium max-w-lg mx-auto">
              Completa tus datos y cuéntanos en qué podemos ayudarte. Te responderemos directamente por WhatsApp.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Juan Pérez" className="h-14 rounded-none border-slate-200 focus:border-primary transition-all bg-slate-50/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">Región y Comuna</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Región Metropolitana, Las Condes o Ej: Valparaíso, Viña del Mar" className="h-14 rounded-none border-slate-200 focus:border-primary transition-all bg-slate-50/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">Mensaje o Consulta (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Escribe aquí tu pregunta o detalle de tu pedido..." 
                        className="min-h-[120px] rounded-none border-slate-200 focus:border-primary transition-all bg-slate-50/50 resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full h-20 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-none text-lg font-display font-black uppercase tracking-[0.2em] shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-3"
              >
                Continuar a WhatsApp
                <MessageCircle className="w-6 h-6 fill-current" />
              </Button>
            </form>
          </Form>

          <p className="text-center text-[9px] font-display font-bold text-foreground/30 uppercase tracking-[0.2em] mt-8">
            Al hacer clic serás redirigido a una conversación segura de WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
