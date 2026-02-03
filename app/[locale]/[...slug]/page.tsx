import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/store/header";
import { Features } from "@/components/store/features";
import { CTA } from "@/components/store/cta";
import { Footer } from "@/components/store/footer";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/seo-data";
import { ArrowRight, Check, Star } from "lucide-react";
import { SEOHead, FAQSection, type SEOData } from "@/components/seo/programmatic-seo";
import { IntercomButton } from "@/components/pages/intercom-button";
import { ShopifyProducts } from "@/components/store/shopify-products";
import { ScrollToProductsButton } from "@/components/store/scroll-to-products";

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

// Category data for luxury furniture with localized slugs
const CATEGORIES = [
  { 
    slug: 'sofas-lujo',
    slugs: { es: 'sofas-lujo', en: 'luxury-sofas', de: 'luxus-sofas', fr: 'canapes-luxe', it: 'divani-lusso', pt: 'sofas-luxo', nl: 'luxe-banken', pl: 'luksusowe-sofy' },
    image: 'https://images.unsplash.com/photo-1577421759415-bba870669383?q=80&w=2671&auto=format&fit=crop',
    price: '3.500€',
    names: { es: 'Sofás de Lujo', en: 'Luxury Sofas', de: 'Luxus-Sofas', fr: 'Canapés de Luxe', it: 'Divani di Lusso', pt: 'Sofás de Luxo', nl: 'Luxe Banken', pl: 'Luksusowe Sofy' },
    desc: { 
      es: 'Sofás artesanales de alta gama. Fabricación europea, entrega e instalación incluida.', 
      en: 'High-end artisan sofas. European craftsmanship, delivery and installation included.', 
      de: 'Hochwertige handgefertigte Sofas. Europäische Handwerkskunst, Lieferung und Montage inklusive.', 
      fr: 'Canapés artisanaux haut de gamme. Fabrication européenne, livraison et installation incluses.',
      it: 'Divani artigianali di alta gamma. Artigianato europeo, consegna e installazione incluse.',
      pt: 'Sofás artesanais de alta gama. Fabrico europeu, entrega e instalação incluídas.',
      nl: 'Hoogwaardige ambachtelijke banken. Europees vakmanschap, levering en installatie inbegrepen.',
      pl: 'Wysokiej klasy sofy rzemieślnicze. Europejskie rzemiosło, dostawa i montaż w cenie.'
    }
  },
  { 
    slug: 'mesas-comedor',
    slugs: { es: 'mesas-comedor', en: 'dining-tables', de: 'esstische', fr: 'tables-salle-manger', it: 'tavoli-pranzo', pt: 'mesas-jantar', nl: 'eettafels', pl: 'stoly-jadalne' },
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1335&auto=format&fit=crop',
    price: '2.800€',
    names: { es: 'Mesas de Comedor', en: 'Dining Tables', de: 'Esstische', fr: 'Tables à Manger', it: 'Tavoli da Pranzo', pt: 'Mesas de Jantar', nl: 'Eettafels', pl: 'Stoły Jadalne' },
    desc: { 
      es: 'Mesas de comedor de madera maciza. Elegancia artesanal para tu hogar.', 
      en: 'Solid wood dining tables. Artisan elegance for your home.', 
      de: 'Esstische aus Massivholz. Handwerkliche Eleganz für Ihr Zuhause.', 
      fr: 'Tables à manger en bois massif. Élégance artisanale pour votre maison.',
      it: 'Tavoli da pranzo in legno massello. Eleganza artigianale per la tua casa.',
      pt: 'Mesas de jantar em madeira maciça. Elegância artesanal para a sua casa.',
      nl: 'Eettafels van massief hout. Ambachtelijke elegantie voor uw huis.',
      pl: 'Stoły jadalne z litego drewna. Rzemieślnicza elegancja dla Twojego domu.'
    }
  },
  { 
    slug: 'sillones-diseno',
    slugs: { es: 'sillones-diseno', en: 'designer-armchairs', de: 'designer-sessel', fr: 'fauteuils-design', it: 'poltrone-design', pt: 'poltronas-design', nl: 'design-fauteuils', pl: 'fotele-designerskie' },
    image: 'https://images.unsplash.com/photo-1680773525486-3313809b1a14?q=80&w=1287&auto=format&fit=crop',
    price: '1.900€',
    names: { es: 'Sillones de Diseño', en: 'Designer Armchairs', de: 'Designer-Sessel', fr: 'Fauteuils Design', it: 'Poltrone di Design', pt: 'Poltronas de Design', nl: 'Design Fauteuils', pl: 'Fotele Designerskie' },
    desc: { 
      es: 'Sillones de diseño icónico. Confort y estilo excepcional.', 
      en: 'Iconic designer armchairs. Exceptional comfort and style.', 
      de: 'Ikonische Designer-Sessel. Außergewöhnlicher Komfort und Stil.', 
      fr: 'Fauteuils au design iconique. Confort et style exceptionnels.',
      it: 'Poltrone dal design iconico. Comfort e stile eccezionali.',
      pt: 'Poltronas de design icónico. Conforto e estilo excecionais.',
      nl: 'Iconische design fauteuils. Uitzonderlijk comfort en stijl.',
      pl: 'Kultowe fotele designerskie. Wyjątkowy komfort i styl.'
    }
  },
  { 
    slug: 'camas-premium',
    slugs: { es: 'camas-premium', en: 'premium-beds', de: 'premium-betten', fr: 'lits-premium', it: 'letti-premium', pt: 'camas-premium', nl: 'premium-bedden', pl: 'lozka-premium' },
    image: 'https://images.unsplash.com/photo-1664538922512-127ff7e30aef?q=80&w=2274&auto=format&fit=crop',
    price: '4.200€',
    names: { es: 'Camas Premium', en: 'Premium Beds', de: 'Premium-Betten', fr: 'Lits Premium', it: 'Letti Premium', pt: 'Camas Premium', nl: 'Premium Bedden', pl: 'Łóżka Premium' },
    desc: { 
      es: 'Camas de lujo para un descanso sublime. Calidad que perdura.', 
      en: 'Luxury beds for sublime rest. Quality that lasts.', 
      de: 'Luxusbetten für erhabene Ruhe. Qualität die hält.', 
      fr: 'Lits de luxe pour un repos sublime. Qualité qui dure.',
      it: 'Letti di lusso per un riposo sublime. Qualità che dura.',
      pt: 'Camas de luxo para um descanso sublime. Qualidade que perdura.',
      nl: 'Luxe bedden voor sublieme rust. Kwaliteit die blijft.',
      pl: 'Luksusowe łóżka dla wzniosłego odpoczynku. Jakość która trwa.'
    }
  },
  { 
    slug: 'aparadores',
    slugs: { es: 'aparadores', en: 'sideboards', de: 'sideboards', fr: 'buffets', it: 'credenze', pt: 'aparadores', nl: 'dressoirs', pl: 'kredensy' },
    image: 'https://www.tlcinteriors.com.au/wp-content/uploads/2016/07/ascot-parque-low-buffet-sideboards-on-the-life-creative.jpg',
    price: '2.400€',
    names: { es: 'Aparadores', en: 'Sideboards', de: 'Sideboards', fr: 'Buffets', it: 'Credenze', pt: 'Aparadores', nl: 'Dressoirs', pl: 'Kredensy' },
    desc: { 
      es: 'Aparadores de diseño exclusivo. Almacenamiento elegante para tu hogar.', 
      en: 'Exclusive design sideboards. Elegant storage for your home.', 
      de: 'Sideboards mit exklusivem Design. Elegante Aufbewahrung für Ihr Zuhause.', 
      fr: 'Buffets au design exclusif. Rangement élégant pour votre maison.',
      it: 'Credenze dal design esclusivo. Stoccaggio elegante per la tua casa.',
      pt: 'Aparadores de design exclusivo. Arrumação elegante para a sua casa.',
      nl: 'Dressoirs met exclusief design. Elegante opbergruimte voor uw huis.',
      pl: 'Kredensy o ekskluzywnym designie. Eleganckie przechowywanie dla Twojego domu.'
    }
  },
  { 
    slug: 'muebles-exterior',
    slugs: { es: 'muebles-exterior', en: 'outdoor-furniture', de: 'gartenmoebel', fr: 'mobilier-exterieur', it: 'mobili-esterno', pt: 'moveis-exterior', nl: 'tuinmeubelen', pl: 'meble-ogrodowe' },
    image: 'https://images.unsplash.com/photo-1768725845307-f7e7f18e04b3?q=80&w=1287&auto=format&fit=crop',
    price: '3.100€',
    names: { es: 'Muebles de Exterior', en: 'Outdoor Furniture', de: 'Gartenmöbel', fr: 'Mobilier Extérieur', it: 'Mobili da Esterno', pt: 'Móveis de Exterior', nl: 'Tuinmeubelen', pl: 'Meble Ogrodowe' },
    desc: { 
      es: 'Mobiliario de exterior premium. Resistente y elegante para tu terraza.', 
      en: 'Premium outdoor furniture. Durable and elegant for your terrace.', 
      de: 'Premium-Gartenmöbel. Langlebig und elegant für Ihre Terrasse.', 
      fr: 'Mobilier d\'extérieur premium. Résistant et élégant pour votre terrasse.',
      it: 'Mobili da esterno premium. Resistenti ed eleganti per la tua terrazza.',
      pt: 'Mobiliário de exterior premium. Resistente e elegante para a sua varanda.',
      nl: 'Premium tuinmeubelen. Duurzaam en elegant voor uw terras.',
      pl: 'Meble ogrodowe premium. Trwałe i eleganckie na Twój taras.'
    }
  },
];

// Find category by any localized slug
function getCategoryBySlug(slug: string) {
  return CATEGORIES.find(c => {
    if (c.slug === slug) return true;
    const allSlugs = Object.values(c.slugs);
    return allSlugs.includes(slug) || allSlugs.some(s => slug.includes(s));
  });
}

const SITE_URL = "https://luxeinterieur.io";

// Dynamic metadata for Google SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (SUPPORTED_LOCALES.includes(locale as Locale) ? locale : 'es') as Locale;
  const category = getCategoryBySlug(slug?.[0] || '');
  
  const catName = category?.names[validLocale as keyof typeof category.names] || category?.names.es || 'Muebles de Lujo';
  const catDesc = category?.desc[validLocale as keyof typeof category.desc] || category?.desc.es || 'Mobiliario de lujo artesanal para tu hogar.';
  const ogImage = category?.image ? `${category.image.split('?')[0]}?w=1200&h=630&fit=crop&q=80` : 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=630&fit=crop&q=80';
  
  const title = `${catName} | Luxe Interieur`;
  const description = `${catDesc} Fabricación europea, entrega e instalación incluida.`;
  const canonicalUrl = `${SITE_URL}/${locale}/${slug?.join('/') || ''}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Luxe Interieur',
      locale: locale === 'es' ? 'es_ES' : locale === 'en' ? 'en_US' : `${locale}_${locale.toUpperCase()}`,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: catName }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const validLocale = SUPPORTED_LOCALES.includes(locale as Locale) ? locale as Locale : 'es';
  const category = getCategoryBySlug(slug?.[0] || '');
  
  const catName = category?.names[validLocale as keyof typeof category.names] || category?.names.es || 'Muebles de Lujo';
  const catDesc = category?.desc[validLocale as keyof typeof category.desc] || category?.desc.es || 'Mobiliario de lujo artesanal para tu hogar.';
  const catImage = category?.image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop';
  const catPrice = category?.price || '2.500€';
  
  // Related categories
  const relatedCategories = CATEGORIES.filter(c => c.slug !== category?.slug).slice(0, 3);

  // SEO Data for Schema and FAQs
  const seoData: SEOData = {
    locale: validLocale as SEOData['locale'],
    pageType: 'category',
    product: catName,
    productSlug: category?.slug || 'sofas-lujo',
    priceMin: parseInt(catPrice.replace(/[^0-9]/g, '')) || 1900,
    priceMax: parseInt(catPrice.replace(/[^0-9]/g, '')) * 5 || 20000,
    brand: 'Luxe Interieur',
    domain: 'luxeinterieur.io',
    warranty: '10 años',
    relatedProducts: relatedCategories.map(c => ({
      name: c.names[validLocale as keyof typeof c.names] || c.names.es,
      slug: c.slug,
      price: c.price
    }))
  };
  
  // Translations
  const texts: Record<string, { from: string; quote: string; features: string; related: string; warranty: string; delivery: string; catalog: string; quality: string; crafted: string; bespoke: string; european: string }> = {
    es: { from: 'Desde', quote: 'Solicitar Proyecto', features: 'Características', related: 'Otras colecciones', warranty: 'Garantía 10 años', delivery: 'Entrega e instalación', catalog: 'Ver Productos', quality: 'Calidad Artesanal', crafted: 'Fabricación europea', bespoke: 'Diseño a medida', european: 'Materiales nobles' },
    en: { from: 'From', quote: 'Request Project', features: 'Features', related: 'Other collections', warranty: '10 year warranty', delivery: 'Delivery & installation', catalog: 'View Products', quality: 'Artisan Quality', crafted: 'European craftsmanship', bespoke: 'Bespoke design', european: 'Noble materials' },
    de: { from: 'Ab', quote: 'Projekt Anfragen', features: 'Eigenschaften', related: 'Andere Kollektionen', warranty: '10 Jahre Garantie', delivery: 'Lieferung & Montage', catalog: 'Produkte Ansehen', quality: 'Handwerksqualität', crafted: 'Europäische Handwerkskunst', bespoke: 'Maßanfertigung', european: 'Edle Materialien' },
    fr: { from: 'À partir de', quote: 'Demander un Projet', features: 'Caractéristiques', related: 'Autres collections', warranty: 'Garantie 10 ans', delivery: 'Livraison & installation', catalog: 'Voir Produits', quality: 'Qualité Artisanale', crafted: 'Fabrication européenne', bespoke: 'Design sur mesure', european: 'Matériaux nobles' },
    it: { from: 'Da', quote: 'Richiedi Progetto', features: 'Caratteristiche', related: 'Altre collezioni', warranty: 'Garanzia 10 anni', delivery: 'Consegna & installazione', catalog: 'Vedi Prodotti', quality: 'Qualità Artigianale', crafted: 'Artigianato europeo', bespoke: 'Design su misura', european: 'Materiali nobili' },
    pt: { from: 'Desde', quote: 'Solicitar Projeto', features: 'Características', related: 'Outras coleções', warranty: 'Garantia 10 anos', delivery: 'Entrega & instalação', catalog: 'Ver Produtos', quality: 'Qualidade Artesanal', crafted: 'Fabrico europeu', bespoke: 'Design por medida', european: 'Materiais nobres' },
    nl: { from: 'Vanaf', quote: 'Project Aanvragen', features: 'Kenmerken', related: 'Andere collecties', warranty: '10 jaar garantie', delivery: 'Levering & installatie', catalog: 'Bekijk Producten', quality: 'Ambachtelijke Kwaliteit', crafted: 'Europees vakmanschap', bespoke: 'Op maat ontwerp', european: 'Edele materialen' },
    pl: { from: 'Od', quote: 'Zamów Projekt', features: 'Cechy', related: 'Inne kolekcje', warranty: 'Gwarancja 10 lat', delivery: 'Dostawa i montaż', catalog: 'Zobacz Produkty', quality: 'Jakość Rzemieślnicza', crafted: 'Europejskie rzemiosło', bespoke: 'Design na wymiar', european: 'Szlachetne materiały' },
  };
  const t = texts[validLocale] || texts.es;

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      <Header locale={validLocale} />
      
      <main>
        {/* Luxury Hero - Full Width Image with Overlay */}
        <section className="relative min-h-[85vh]">
          {/* Background Image */}
          <Image
            src={catImage}
            alt={catName}
            fill
            className="object-cover"
            priority
          />
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 min-h-[85vh] flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
              <div className="max-w-2xl">
                {/* Tag */}
                <span className="inline-block text-xs tracking-[0.3em] text-amber-200/80 uppercase mb-8 font-light">
                  Luxe Interieur
                </span>

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white leading-[1.05] mb-8 tracking-tight">
                  {catName}
                </h1>

                {/* Description */}
                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg font-light">
                  {catDesc}
                </p>
                
                {/* Price */}
                <div className="mb-12">
                  <span className="text-sm text-white/50 tracking-wider uppercase">{t.from}</span>
                  <p className="text-4xl font-extralight text-white tracking-tight mt-1">{catPrice}</p>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <IntercomButton 
                    text={t.quote}
                    className="px-10 py-5 bg-white text-neutral-900 text-sm tracking-wide hover:bg-amber-50 transition-all duration-300"
                  />
                  <ScrollToProductsButton 
                    text={t.catalog}
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-white text-sm tracking-wide hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Features Bar */}
        <section className="py-20 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { title: t.warranty, desc: t.quality },
                { title: t.crafted, desc: t.european },
                { title: t.bespoke, desc: t.delivery },
                { title: t.quality, desc: t.warranty },
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-6 border border-neutral-200 flex items-center justify-center">
                    <Check className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-sm font-light text-neutral-900 tracking-wide">{feature.title}</p>
                  <p className="text-xs text-neutral-400 mt-2">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews - Luxury Style */}
        <section className="py-24 bg-[#f8f6f3]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extralight text-neutral-900 text-center mb-16 tracking-tight">
              {validLocale === 'es' ? 'Lo que dicen nuestros clientes' : validLocale === 'en' ? 'What our clients say' : validLocale === 'de' ? 'Was unsere Kunden sagen' : 'Ce que disent nos clients'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(() => {
                const reviews: Record<string, { text: string; author: string; location: string }[]> = {
                  es: [
                    { text: 'La calidad del sofá es excepcional. El cuero italiano es suave y el acabado impecable. Un verdadero lujo.', author: 'María García', location: 'Madrid' },
                    { text: 'Diseño a medida perfecto para nuestro salón. El equipo fue muy profesional y atento a cada detalle.', author: 'Carlos Ruiz', location: 'Barcelona' },
                    { text: 'Muebles que transforman espacios. La mesa de comedor es una obra de arte. Recomendado 100%.', author: 'Ana Martínez', location: 'Valencia' },
                  ],
                  en: [
                    { text: 'The sofa quality is exceptional. Italian leather is soft and the finish impeccable. True luxury.', author: 'James Wilson', location: 'London' },
                    { text: 'Perfect bespoke design for our living room. The team was very professional and attentive to every detail.', author: 'Sarah Thompson', location: 'Manchester' },
                    { text: 'Furniture that transforms spaces. The dining table is a work of art. 100% recommended.', author: 'Michael Brown', location: 'Edinburgh' },
                  ],
                  de: [
                    { text: 'Die Qualität des Sofas ist außergewöhnlich. Italienisches Leder ist weich und die Verarbeitung makellos.', author: 'Hans Müller', location: 'München' },
                    { text: 'Perfektes maßgeschneidertes Design für unser Wohnzimmer. Das Team war sehr professionell.', author: 'Anna Schmidt', location: 'Berlin' },
                    { text: 'Möbel, die Räume verwandeln. Der Esstisch ist ein Kunstwerk. 100% empfohlen.', author: 'Thomas Weber', location: 'Hamburg' },
                  ],
                  fr: [
                    { text: 'La qualité du canapé est exceptionnelle. Le cuir italien est doux et la finition impeccable.', author: 'Marie Dubois', location: 'Paris' },
                    { text: 'Design sur mesure parfait pour notre salon. L\'équipe était très professionnelle.', author: 'Pierre Martin', location: 'Lyon' },
                    { text: 'Des meubles qui transforment les espaces. La table à manger est une œuvre d\'art.', author: 'Sophie Bernard', location: 'Marseille' },
                  ],
                };
                const r = reviews[validLocale] || reviews.es;
                return r.map((review, i) => (
                  <div key={i} className="bg-white p-10">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-neutral-600 mb-8 leading-relaxed font-light">"{review.text}"</p>
                    <div className="border-t border-neutral-100 pt-6">
                      <p className="text-sm font-medium text-neutral-900">{review.author}</p>
                      <p className="text-xs text-neutral-400 mt-1">{review.location}</p>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </section>

        {/* Shopify Products */}
        <ShopifyProducts 
          locale={validLocale} 
          collection={category?.slug} 
          title={catName}
          limit={8}
        />

        {/* Related Collections - Luxury Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-4xl font-extralight text-neutral-900 text-center mb-6 tracking-tight">{t.related}</h2>
            <p className="text-neutral-500 text-center mb-16 font-light">
              {validLocale === 'es' ? 'Descubre más piezas exclusivas' : validLocale === 'en' ? 'Discover more exclusive pieces' : 'Entdecken Sie mehr exklusive Stücke'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCategories.map((cat) => (
                <Link 
                  key={cat.slug}
                  href={`/${locale}/${cat.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
                    <Image
                      src={cat.image}
                      alt={cat.names[validLocale as keyof typeof cat.names] || cat.names.es}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-light text-neutral-900 mb-2 tracking-tight group-hover:text-amber-700 transition-colors">
                    {cat.names[validLocale as keyof typeof cat.names] || cat.names.es}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light">
                    {t.from} <span className="text-neutral-900">{cat.price}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <FAQSection data={seoData} />

        <Features locale={validLocale} />
        <CTA locale={validLocale} />
      </main>

      {/* SEO Schema Markup */}
      <SEOHead data={seoData} />

      <Footer locale={validLocale} />
    </div>
  );
}
