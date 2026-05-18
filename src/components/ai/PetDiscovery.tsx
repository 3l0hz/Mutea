
"use client";

import React, { useState } from 'react';
import { Sparkles, Send, Loader2, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { petGiftFinder, PetGiftFinderOutput } from '@/ai/flows/pet-gift-finder';

export function PetDiscovery() {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<PetGiftFinderOutput | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    
    setLoading(true);
    try {
      const results = await petGiftFinder({ petDescription: description });
      setRecommendations(results);
    } catch (error) {
      console.error("AI discovery failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-xs font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>DESCUBRIMIENTO ASISTIDO POR AI</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            ¿Buscas el regalo perfecto para tu mascota?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Cuéntanos cómo es tu perro o gato y nuestra inteligencia artificial te recomendará los mejores gadgets de PawSense.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-grow relative">
              <Input 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ej: Perro pastor alemán joven muy activo que ama morder..."
                className="h-16 rounded-full border-none bg-white/10 backdrop-blur-md text-white placeholder:text-white/50 px-8 text-lg outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              />
            </div>
            <Button 
              type="submit" 
              disabled={loading}
              className="h-16 px-10 rounded-full bg-accent text-white hover:bg-accent/90 transition-all font-bold text-lg min-w-[180px]"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Encontrar regalo"}
            </Button>
          </form>
        </div>
      </div>

      {recommendations && (
        <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-top-8 duration-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-muted flex-grow" />
            <span className="text-muted-foreground font-bold flex items-center gap-2">
              <PawPrint className="w-4 h-4" /> RECOMENDACIONES PARA TI
            </span>
            <div className="w-12 h-px bg-muted flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((item, idx) => (
              <Card key={idx} className="rounded-[2rem] border-none shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.02]">
                <div className="bg-muted aspect-video relative">
                  <img src={`https://picsum.photos/seed/gift-${idx}/400/250`} alt={item.name} className="object-cover w-full h-full" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary font-bold text-xs px-3 py-1.5 rounded-full">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{item.description}</p>
                  <div className="mt-auto space-y-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-muted-foreground uppercase">Precio estimado</span>
                      <span className="font-bold text-primary">{item.estimatedPriceRange}</span>
                    </div>
                    <Button variant="outline" className="w-full rounded-full font-bold">Ver detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => setRecommendations(null)}
              className="rounded-full text-muted-foreground"
            >
              Nueva búsqueda
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
