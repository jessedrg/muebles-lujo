"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { type Locale } from "@/lib/seo-data";
import { openIntercomChat } from "@/components/intercom";

interface CTAProps {
  locale: Locale;
}

export function CTA({ locale }: CTAProps) {
  const texts: Record<string, { title: string; subtitle: string; cta: string; catalog: string }> = {
    es: { title: '¿Diseñamos tu espacio?', subtitle: 'Asesoramiento personalizado. Entrega e instalación incluida.', cta: 'Solicitar Proyecto', catalog: 'Ver Colecciones' },
    en: { title: 'Shall we design your space?', subtitle: 'Personalized advice. Delivery and installation included.', cta: 'Request Project', catalog: 'View Collections' },
    de: { title: 'Gestalten wir Ihren Raum?', subtitle: 'Persönliche Beratung. Lieferung und Montage inklusive.', cta: 'Projekt Anfragen', catalog: 'Kollektionen Ansehen' },
    fr: { title: 'Concevons votre espace?', subtitle: 'Conseil personnalisé. Livraison et installation incluses.', cta: 'Demander un Projet', catalog: 'Voir Collections' },
    it: { title: 'Progettiamo il tuo spazio?', subtitle: 'Consulenza personalizzata. Consegna e installazione incluse.', cta: 'Richiedi Progetto', catalog: 'Vedi Collezioni' },
    pt: { title: 'Desenhamos o seu espaço?', subtitle: 'Assessoria personalizada. Entrega e instalação incluídas.', cta: 'Solicitar Projeto', catalog: 'Ver Coleções' },
    nl: { title: 'Ontwerpen we uw ruimte?', subtitle: 'Persoonlijk advies. Levering en installatie inbegrepen.', cta: 'Project Aanvragen', catalog: 'Bekijk Collecties' },
    pl: { title: 'Zaprojektujemy Twoją przestrzeń?', subtitle: 'Spersonalizowane doradztwo. Dostawa i montaż w cenie.', cta: 'Zamów Projekt', catalog: 'Zobacz Kolekcje' },
  };
  const t = texts[locale] || texts.es;

  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
          {t.title}
        </h2>
        <p className="text-neutral-400 mb-10 max-w-md mx-auto">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => openIntercomChat()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 text-sm rounded-full hover:bg-neutral-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t.cta}
          </button>
          <Link 
            href={`/${locale === 'en' ? '' : locale + '/'}sofas-lujo`}
            className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-700 text-white text-sm rounded-full hover:bg-neutral-800 transition-colors"
          >
            {t.catalog}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
