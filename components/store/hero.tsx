"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { type Locale } from "@/lib/seo-data";
import { openIntercomChat } from "@/components/intercom";

interface HeroProps {
  locale: Locale;
  cityName?: string;
}

export function Hero({ locale }: HeroProps) {
  const texts: Record<string, { tag: string; title: string; subtitle: string; cta: string; contact: string; stats: { value: string; label: string }[] }> = {
    es: {
      tag: 'Mobiliario de Lujo',
      title: 'Diseño que\ndefine espacios',
      subtitle: 'Muebles artesanales de alta gama. Fabricación europea, entrega e instalación incluida.',
      cta: 'Explorar Colección',
      contact: 'Contactar',
      stats: [
        { value: '15+', label: 'Años' },
        { value: '5.000+', label: 'Proyectos' },
        { value: 'A medida', label: 'Diseño' },
      ]
    },
    en: {
      tag: 'Luxury Furniture',
      title: 'Design that\ndefines spaces',
      subtitle: 'High-end artisan furniture. European craftsmanship, delivery and installation included.',
      cta: 'Explore Collection',
      contact: 'Contact',
      stats: [
        { value: '15+', label: 'Years' },
        { value: '5,000+', label: 'Projects' },
        { value: 'Bespoke', label: 'Design' },
      ]
    },
    de: {
      tag: 'Luxusmöbel',
      title: 'Design das\nRäume definiert',
      subtitle: 'Hochwertige handgefertigte Möbel. Europäische Handwerkskunst, Lieferung und Montage inklusive.',
      cta: 'Kollektion Entdecken',
      contact: 'Kontakt',
      stats: [
        { value: '15+', label: 'Jahre' },
        { value: '5.000+', label: 'Projekte' },
        { value: 'Maßanfertigung', label: 'Design' },
      ]
    },
    fr: {
      tag: 'Mobilier de Luxe',
      title: 'Le design qui\ndéfinit les espaces',
      subtitle: 'Mobilier artisanal haut de gamme. Fabrication européenne, livraison et installation incluses.',
      cta: 'Explorer la Collection',
      contact: 'Contact',
      stats: [
        { value: '15+', label: 'Ans' },
        { value: '5 000+', label: 'Projets' },
        { value: 'Sur mesure', label: 'Design' },
      ]
    },
    it: {
      tag: 'Mobili di Lusso',
      title: 'Design che\ndefinisce gli spazi',
      subtitle: 'Mobili artigianali di alta gamma. Artigianato europeo, consegna e installazione incluse.',
      cta: 'Esplora Collezione',
      contact: 'Contatto',
      stats: [
        { value: '15+', label: 'Anni' },
        { value: '5.000+', label: 'Progetti' },
        { value: 'Su misura', label: 'Design' },
      ]
    },
    pt: {
      tag: 'Mobiliário de Luxo',
      title: 'Design que\ndefine espaços',
      subtitle: 'Móveis artesanais de alta gama. Fabrico europeu, entrega e instalação incluídas.',
      cta: 'Explorar Coleção',
      contact: 'Contato',
      stats: [
        { value: '15+', label: 'Anos' },
        { value: '5.000+', label: 'Projetos' },
        { value: 'Por medida', label: 'Design' },
      ]
    },
    nl: {
      tag: 'Luxe Meubelen',
      title: 'Design dat\nruimtes definieert',
      subtitle: 'Hoogwaardige ambachtelijke meubels. Europees vakmanschap, levering en installatie inbegrepen.',
      cta: 'Collectie Bekijken',
      contact: 'Contact',
      stats: [
        { value: '15+', label: 'Jaar' },
        { value: '5.000+', label: 'Projecten' },
        { value: 'Op maat', label: 'Design' },
      ]
    },
    pl: {
      tag: 'Luksusowe Meble',
      title: 'Design który\ndefiniuje przestrzeń',
      subtitle: 'Wysokiej klasy meble rzemieślnicze. Europejskie rzemiosło, dostawa i montaż w cenie.',
      cta: 'Zobacz Kolekcję',
      contact: 'Kontakt',
      stats: [
        { value: '15+', label: 'Lat' },
        { value: '5 000+', label: 'Projektów' },
        { value: 'Na wymiar', label: 'Design' },
      ]
    },
  };

  const t = texts[locale] || texts.es;
  const titleParts = t.title.split('\n');

  return (
    <section className="relative min-h-screen bg-[#f8f6f3]">
      {/* Full-width hero with overlay text */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury interior design" 
          fill 
          className="object-cover" 
          priority 
          sizes="100vw"
        />
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
            <div className="max-w-2xl">
              {/* Tag */}
              <span className="inline-block text-xs tracking-[0.3em] text-amber-200/80 uppercase mb-8 font-light">
                {t.tag}
              </span>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white leading-[1.05] mb-8 tracking-tight">
                {titleParts.map((part, i) => (
                  <span key={i} className={i === 1 ? "block text-amber-100/90" : "block"}>
                    {part}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-lg font-light">
                {t.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <Link 
                  href={`/${locale}/sofas-lujo`}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-neutral-900 text-sm tracking-wide hover:bg-amber-50 transition-all duration-300"
                >
                  {t.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button 
                  onClick={() => openIntercomChat()}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-white text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.contact}
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-12 pt-8 border-t border-white/20">
                {t.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-extralight text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs text-white/50 mt-2 tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
