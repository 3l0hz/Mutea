"use client";

import React from 'react';
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
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MessageCircle } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre es obligatorio"),
  phone: z.string().min(8, "El teléfono es obligatorio"),
  city: z.string().min(2, "La región y comuna son obligatorias"),
  address: z.string().min(5, "La dirección de envío es obligatoria"),
  variant: z.enum(["Blanco", "Negro"]),
  includeUpsell: z.boolean(),
  message: z.string().optional(),
});

interface ReservationModalProps {
  trigger?: React.ReactNode;
  initialVariant?: "Blanco" | "Negro";
  initialUpsell?: boolean;
}

export function ReservationModal({ 
  trigger, 
  initialVariant = "Blanco", 
  initialUpsell = false 
}: ReservationModalProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      city: "",
      address: "",
      variant: initialVariant,
      includeUpsell: initialUpsell,
      message: "",
    },
  });

  React.useEffect(() => {
    if (open) {
      form.setValue('variant', initialVariant);
      form.setValue('includeUpsell', initialUpsell);
    }
  }, [open, initialVariant, initialUpsell, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "56940628182";
    const packText = values.includeUpsell ? "Sí" : "No";
    const commentText = values.message ? values.message : "Ninguno";

    const fullText = `Hola! Me gustaría confirmar mi pedido de MUTEA:
👤 Nombre: ${values.fullName}
📞 Teléfono: ${values.phone}
📍 Región y Comuna: ${values.city}
🏠 Dirección: ${values.address}
🎨 Color: ${values.variant}
⚡ Batería Externa: ${packText}
📝 Comentario: ${commentText}`;

    // Registrar la reserva como contacto en Meta Pixel
    (window as any).fbq?.('track', 'Contact', {
      content_name: 'Reserva Mutea',
    });

    // Abrir WhatsApp con los datos de la reserva
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullText)}`,
      '_blank'
    );

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-8 bg-white border-none shadow-2xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-black uppercase tracking-tight text-center mb-4">
            Reserva tu MUTEA
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                      Teléfono / WhatsApp de Contacto
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                        Región y Comuna
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ej: Región Metropolitana, Las Condes o Ej: Valparaíso, Viña del Mar"
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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                        Dirección de Envío
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Calle, Número, Depto/Casa"
                          className="h-12 rounded-none bg-slate-50 border-slate-200 focus:border-primary transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">

              <FormField
                control={form.control}
                name="variant"
                render={({ field }) => (
                  <FormItem className="space-y-3">

                    <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                      Color del dispositivo
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
                          <Label
                            htmlFor="modal-white"
                            className="text-xs font-display font-bold uppercase tracking-widest cursor-pointer"
                          >
                            Blanco
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Negro" id="modal-black" />
                          <Label
                            htmlFor="modal-black"
                            className="text-xs font-display font-bold uppercase tracking-widest cursor-pointer"
                          >
                            Negro
                          </Label>
                        </div>

                      </RadioGroup>
                    </FormControl>

                    <FormMessage />

                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="includeUpsell"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4 border border-slate-100 bg-slate-50/50 rounded-xl">

                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="modal-upsell"
                      />
                    </FormControl>

                    <div className="space-y-1 leading-none">
                      <Label
                        htmlFor="modal-upsell"
                        className="text-[10px] font-display font-black uppercase tracking-widest cursor-pointer"
                      >
                        Incluir Batería Externa (+ $10.000)
                      </Label>
                    </div>

                  </FormItem>
                )}
              />

            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>

                  <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">
                    Mensaje Adicional (Opcional)
                  </FormLabel>

                  <FormControl>
                    <Textarea
                      placeholder="Escribe aquí..."
                      className="min-h-[80px] rounded-none bg-slate-50 border-slate-200 resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />

                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-16 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-none font-display font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20"
            >
              Confirmar por WhatsApp
              <MessageCircle className="w-5 h-5 fill-current" />
            </Button>

          </form>
        </Form>

      </DialogContent>
    </Dialog>
  );
}