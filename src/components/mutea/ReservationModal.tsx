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
  city: z.string().min(2, "La ciudad es obligatoria"),
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
      city: "",
      variant: initialVariant,
      includeUpsell: initialUpsell,
      message: "",
    },
  });

  // Sync form with external selection changes when modal opens
  React.useEffect(() => {
    if (open) {
      form.setValue('variant', initialVariant);
      form.setValue('includeUpsell', initialUpsell);
    }
  }, [open, initialVariant, initialUpsell, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "56940628182";
    const packText = values.includeUpsell ? "con Pack Energía" : "sin Pack Energía";
    const commentText = values.message ? ` Comentario: ${values.message}` : "";
    
    const fullText = `Hola! Mi nombre es ${values.fullName}, soy de ${values.city}. Quiero solicitar MUTEA en color ${values.variant} ${packText}.${commentText}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullText)}`, '_blank');
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-8 bg-white border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-black uppercase tracking-tight text-center mb-4">
            Reserva tu MUTEA Pro
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" className="h-12 rounded-none bg-slate-50 border-slate-200 focus:border-primary transition-all" {...field} />
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
                    <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">Ciudad / Región</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Santiago, RM" className="h-12 rounded-none bg-slate-50 border-slate-200 focus:border-primary transition-all" {...field} />
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
                    <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">Color del dispositivo</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Blanco" id="modal-white" />
                          <Label htmlFor="modal-white" className="text-xs font-display font-bold uppercase tracking-widest">Blanco</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Negro" id="modal-black" />
                          <Label htmlFor="modal-black" className="text-xs font-display font-bold uppercase tracking-widest">Negro</Label>
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
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest cursor-pointer">
                        Incluir Pack Energía (+ $10.000)
                      </FormLabel>
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
                  <FormLabel className="text-[10px] font-display font-black uppercase tracking-widest text-foreground/40">Mensaje Adicional (Opcional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Escribe aquí..." className="min-h-[80px] rounded-none bg-slate-50 border-slate-200 resize-none" {...field} />
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
