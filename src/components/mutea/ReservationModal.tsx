"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MessageCircle, CheckCircle2, X } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre es obligatorio"),
  whatsapp: z.string().min(8, "El WhatsApp es obligatorio"),
  email: z.string().email("Email inválido").optional().or(z.literal('')),
  variant: z.enum(["Blanco", "Negro"]),
});

interface ReservationModalProps {
  trigger?: React.ReactNode;
  initialVariant?: "Blanco" | "Negro";
}

export function ReservationModal({ 
  trigger, 
  initialVariant = "Blanco"
}: ReservationModalProps) {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      whatsapp: "",
      email: "",
      variant: initialVariant,
    },
  });

  React.useEffect(() => {
    if (open) {
      form.setValue('variant', initialVariant);
      setSubmitted(false);
    }
  }, [open, initialVariant, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "56940628182";
    
    const fullText = `Hola! Me gustaría solicitar la reserva de mi unidad MUTEA:
👤 Nombre: ${values.fullName}
📞 WhatsApp: ${values.whatsapp}
📧 Email: ${values.email || 'No proporcionado'}
🎨 Color Preferido: ${values.variant}
⚡ Batería Externa: Incluida (20.000 mAh + cable)

Quedo atento a la disponibilidad de componentes para mi unidad.`;

    // Registrar la reserva como contacto en Meta Pixel
    (window as any).fbq?.('track', 'Contact', {
      content_name: 'Solicitud Reserva Mutea',
    });

    // Abrir WhatsApp con los datos de la reserva
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullText)}`,
      '_blank'
    );

    setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-8 bg-white border-none shadow-2xl overflow-y-auto max-h-[90vh]">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display font-black uppercase tracking-tight text-center mb-2">
                Reserva tu unidad
              </DialogTitle>
              <p className="text-[11px] text-foreground/50 text-center font-medium leading-relaxed px-4">
                MUTEA se fabrica en unidades limitadas según disponibilidad de componentes. Déjanos tus datos y te contactaremos cuando tu unidad esté disponible.
              </p>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                          Nombre Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre"
                            className="h-12 rounded-none bg-slate-50 border-slate-200 focus:border-primary transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                          WhatsApp de Contacto
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Ej: +56 9 1234 5678"
                            className="h-12 rounded-none bg-slate-50 border-slate-200 focus:border-primary transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                          Email (Opcional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            className="h-12 rounded-none bg-slate-50 border-slate-200 focus:border-primary transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <FormField
                    control={form.control}
                    name="variant"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                          Color preferido
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Blanco" id="modal-white" />
                              <Label htmlFor="modal-white" className="text-xs font-display font-bold uppercase tracking-widest cursor-pointer">Blanco</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Negro" id="modal-black" />
                              <Label htmlFor="modal-black" className="text-xs font-display font-bold uppercase tracking-widest cursor-pointer">Negro</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  variant="mutea"
                  className="w-full h-16 transition-all flex items-center justify-center gap-3"
                >
                  Solicitar Reserva
                  <MessageCircle className="w-5 h-5 fill-current" />
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-4">Solicitud Recibida</h3>
            <p className="text-sm text-foreground/50 font-medium leading-relaxed max-w-[280px] mb-8">
              Recibimos tu solicitud de reserva. Te contactaremos cuando haya disponibilidad para preparar tu unidad MUTEA.
            </p>
            <Button 
              variant="outline" 
              className="rounded-full px-8 h-12 text-[10px] font-display font-bold uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
