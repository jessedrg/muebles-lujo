import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type Locale } from "@/lib/seo-data";

interface CategoriesProps {
  locale: Locale;
}

const CATEGORIES = [
  { 
    slug: 'sofas-lujo',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop',
    price: '3.500€',
    names: { es: 'Sofás de Lujo', en: 'Luxury Sofas', de: 'Luxus-Sofas', fr: 'Canapés de Luxe', it: 'Divani di Lusso', pt: 'Sofás de Luxo', nl: 'Luxe Banken', pl: 'Luksusowe Sofy' },
    desc: { es: 'Confort excepcional', en: 'Exceptional comfort', de: 'Außergewöhnlicher Komfort', fr: 'Confort exceptionnel', it: 'Comfort eccezionale', pt: 'Conforto excepcional', nl: 'Uitzonderlijk comfort', pl: 'Wyjątkowy komfort' },
    featured: true
  },
  { 
    slug: 'mesas-comedor',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1632&auto=format&fit=crop',
    price: '2.800€',
    names: { es: 'Mesas de Comedor', en: 'Dining Tables', de: 'Esstische', fr: 'Tables à Manger', it: 'Tavoli da Pranzo', pt: 'Mesas de Jantar', nl: 'Eettafels', pl: 'Stoły Jadalne' },
    desc: { es: 'Elegancia artesanal', en: 'Artisan elegance', de: 'Handwerkliche Eleganz', fr: 'Élégance artisanale', it: 'Eleganza artigianale', pt: 'Elegância artesanal', nl: 'Ambachtelijke elegantie', pl: 'Rzemieślnicza elegancja' },
    featured: false
  },
  { 
    slug: 'sillones-diseno',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1287&auto=format&fit=crop',
    price: '1.900€',
    names: { es: 'Sillones de Diseño', en: 'Designer Armchairs', de: 'Designer-Sessel', fr: 'Fauteuils Design', it: 'Poltrone di Design', pt: 'Poltronas de Design', nl: 'Design Fauteuils', pl: 'Fotele Designerskie' },
    desc: { es: 'Diseño icónico', en: 'Iconic design', de: 'Ikonisches Design', fr: 'Design iconique', it: 'Design iconico', pt: 'Design icónico', nl: 'Iconisch design', pl: 'Kultowy design' },
    featured: false
  },
  { 
    slug: 'camas-premium',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop',
    price: '4.200€',
    names: { es: 'Camas Premium', en: 'Premium Beds', de: 'Premium-Betten', fr: 'Lits Premium', it: 'Letti Premium', pt: 'Camas Premium', nl: 'Premium Bedden', pl: 'Łóżka Premium' },
    desc: { es: 'Descanso sublime', en: 'Sublime rest', de: 'Erhabene Ruhe', fr: 'Repos sublime', it: 'Riposo sublime', pt: 'Descanso sublime', nl: 'Sublieme rust', pl: 'Wzniosły odpoczynek' },
    featured: true
  },
  { 
    slug: 'aparadores',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1287&auto=format&fit=crop',
    price: '2.400€',
    names: { es: 'Aparadores', en: 'Sideboards', de: 'Sideboards', fr: 'Buffets', it: 'Credenze', pt: 'Aparadores', nl: 'Dressoirs', pl: 'Kredensy' },
    desc: { es: 'Almacenaje elegante', en: 'Elegant storage', de: 'Elegante Aufbewahrung', fr: 'Rangement élégant', it: 'Stoccaggio elegante', pt: 'Armazenamento elegante', nl: 'Elegante opberging', pl: 'Eleganckie przechowywanie' },
    featured: false
  },
  { 
    slug: 'muebles-exterior',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop',
    price: '3.100€',
    names: { es: 'Muebles Exterior', en: 'Outdoor Furniture', de: 'Gartenmöbel', fr: 'Mobilier Extérieur', it: 'Mobili da Esterno', pt: 'Móveis Exterior', nl: 'Tuinmeubelen', pl: 'Meble Ogrodowe' },
    desc: { es: 'Lujo al aire libre', en: 'Outdoor luxury', de: 'Luxus im Freien', fr: 'Luxe en plein air', it: 'Lusso all\'aperto', pt: 'Luxo ao ar livre', nl: 'Luxe buiten', pl: 'Luksus na zewnątrz' },
    featured: false
  },
];

export function Categories({ locale }: CategoriesProps) {
  const texts: Record<string, { title: string; subtitle: string; from: string; viewAll: string }> = {
    es: { title: 'Colecciones', subtitle: 'Piezas únicas para espacios extraordinarios', from: 'Desde', viewAll: 'Ver colección' },
    en: { title: 'Collections', subtitle: 'Unique pieces for extraordinary spaces', from: 'From', viewAll: 'View collection' },
    de: { title: 'Kollektionen', subtitle: 'Einzigartige Stücke für außergewöhnliche Räume', from: 'Ab', viewAll: 'Kollektion ansehen' },
    fr: { title: 'Collections', subtitle: 'Pièces uniques pour des espaces extraordinaires', from: 'À partir de', viewAll: 'Voir la collection' },
    it: { title: 'Collezioni', subtitle: 'Pezzi unici per spazi straordinari', from: 'Da', viewAll: 'Vedi collezione' },
    pt: { title: 'Coleções', subtitle: 'Peças únicas para espaços extraordinários', from: 'Desde', viewAll: 'Ver coleção' },
    nl: { title: 'Collecties', subtitle: 'Unieke stukken voor buitengewone ruimtes', from: 'Vanaf', viewAll: 'Bekijk collectie' },
    pl: { title: 'Kolekcje', subtitle: 'Unikalne elementy dla niezwykłych przestrzeni', from: 'Od', viewAll: 'Zobacz kolekcję' },
  };
  const t = texts[locale] || texts.es;

  const featuredCats = CATEGORIES.filter(c => c.featured);
  const regularCats = CATEGORIES.filter(c => !c.featured);

  return (
    <section className="py-32 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-neutral-500 text-lg font-light max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Featured Grid - 2 large items */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredCats.map((cat) => (
            <Link 
              key={cat.slug}
              href={`/${locale === 'en' ? '' : locale + '/'}${cat.slug}`}
              className="group relative bg-white overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <Image 
                  src={cat.image} 
                  alt={cat.names[locale as keyof typeof cat.names] || cat.names.es}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-2 tracking-tight">
                    {cat.names[locale as keyof typeof cat.names] || cat.names.es}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light">
                    {cat.desc[locale as keyof typeof cat.desc] || cat.desc.es}
                  </p>
                  <p className="text-sm text-neutral-400 mt-3">
                    {t.from} <span className="text-neutral-900">{cat.price}</span>
                  </p>
                </div>
                <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular Grid - 4 smaller items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regularCats.map((cat) => (
            <Link 
              key={cat.slug}
              href={`/${locale === 'en' ? '' : locale + '/'}${cat.slug}`}
              className="group"
            >
              {/* Image */}
              <div className="aspect-square relative bg-white overflow-hidden mb-6">
                <Image 
                  src={cat.image} 
                  alt={cat.names[locale as keyof typeof cat.names] || cat.names.es}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-lg font-light text-neutral-900 mb-1 tracking-tight group-hover:text-amber-700 transition-colors">
                  {cat.names[locale as keyof typeof cat.names] || cat.names.es}
                </h3>
                <p className="text-sm text-neutral-400 font-light">
                  {t.from} {cat.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
