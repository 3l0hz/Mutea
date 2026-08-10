
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MuteaVideoSectionProps {
  videoUrl: string;
  posterUrl?: string;
  startTime?: number;
}

export function MuteaVideoSection({ 
  videoUrl, 
  posterUrl, 
  startTime = 0 
}: MuteaVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (!isPlaying) {
      if (!hasStarted && startTime > 0) {
        videoRef.current.currentTime = startTime;
        setHasStarted(true);
      }
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-100/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Encabezado */}
        <div className="text-center space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <div className="inline-block">
            <span className="text-[10px] font-display font-black tracking-[0.3em] text-primary uppercase bg-primary/5 px-4 py-1 rounded-full">
              MUTEA EN ACCIÓN
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">
            EL SILENCIO, <span className="text-primary">EN TUS MANOS.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto font-medium">
            Conoce Mutea y descubre una nueva forma de recuperar tu tranquilidad en cualquier entorno.
          </p>
        </div>

        {/* Contenedor del Video Premium */}
        <div 
          className="w-full max-w-[1280px] relative group animate-in fade-in zoom-in-95 duration-1000 delay-200 fill-mode-both"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Sombra tecnológica */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent rounded-[26px] blur-sm opacity-20 transition duration-1000"></div>
          
          <div className="relative aspect-video w-full bg-slate-900 rounded-[22px] md:rounded-[28px] overflow-hidden shadow-2xl shadow-slate-200/40 border border-slate-100">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              preload="metadata"
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>

            {/* Overlay de Previsualización y Botón Play */}
            {!isPlaying && (
              <div 
                className={cn(
                  "absolute inset-0 z-10 flex items-center justify-center transition-all duration-500 cursor-pointer",
                  isHovered ? "bg-black/5" : "bg-black/0"
                )}
                onClick={handleTogglePlay}
              >
                <button 
                  className={cn(
                    "w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300 transform",
                    "bg-white/90 backdrop-blur-md border border-white/50 shadow-2xl text-primary",
                    isHovered ? "scale-110" : "scale-100"
                  )}
                  aria-label="Reproducir video"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
