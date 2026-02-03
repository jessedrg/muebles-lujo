import { Shield, Truck, Wrench, HeadphonesIcon } from "lucide-react";
import { type Locale } from "@/lib/seo-data";

interface FeaturesProps {
  locale: Locale;
}

export function Features({ locale }: FeaturesProps) {
  const texts: Record<string, { title: string; features: { title: string; desc: string }[] }> = {
    es: {
      title: 'Excelencia artesanal',
      features: [
        { title: 'Fabricación europea', desc: 'Materiales nobles y artesanos expertos' },
        { title: 'Entrega e instalación', desc: 'Servicio completo en tu hogar' },
        { title: 'Diseño a medida', desc: 'Personalizamos cada pieza' },
        { title: 'Garantía 10 años', desc: 'Calidad que perdura' },
      ]
    },
    en: {
      title: 'Artisan excellence',
      features: [
        { title: 'European craftsmanship', desc: 'Noble materials and expert artisans' },
        { title: 'Delivery & installation', desc: 'Complete service to your home' },
        { title: 'Bespoke design', desc: 'We customize every piece' },
        { title: '10 year warranty', desc: 'Quality that lasts' },
      ]
    },
    de: {
      title: 'Handwerkliche Exzellenz',
      features: [
        { title: 'Europäische Handwerkskunst', desc: 'Edle Materialien und erfahrene Handwerker' },
        { title: 'Lieferung & Montage', desc: 'Komplettservice bis zu Ihnen' },
        { title: 'Maßanfertigung', desc: 'Wir personalisieren jedes Stück' },
        { title: '10 Jahre Garantie', desc: 'Qualität die hält' },
      ]
    },
    fr: {
      title: 'Excellence artisanale',
      features: [
        { title: 'Fabrication européenne', desc: 'Matériaux nobles et artisans experts' },
        { title: 'Livraison & installation', desc: 'Service complet chez vous' },
        { title: 'Design sur mesure', desc: 'Nous personnalisons chaque pièce' },
        { title: 'Garantie 10 ans', desc: 'Qualité qui dure' },
      ]
    },
    it: {
      title: 'Eccellenza artigianale',
      features: [
        { title: 'Artigianato europeo', desc: 'Materiali nobili e artigiani esperti' },
        { title: 'Consegna & installazione', desc: 'Servizio completo a casa tua' },
        { title: 'Design su misura', desc: 'Personalizziamo ogni pezzo' },
        { title: 'Garanzia 10 anni', desc: 'Qualità che dura' },
      ]
    },
    pt: {
      title: 'Excelência artesanal',
      features: [
        { title: 'Fabrico europeu', desc: 'Materiais nobres e artesãos especialistas' },
        { title: 'Entrega & instalação', desc: 'Serviço completo em sua casa' },
        { title: 'Design por medida', desc: 'Personalizamos cada peça' },
        { title: 'Garantia 10 anos', desc: 'Qualidade que perdura' },
      ]
    },
    nl: {
      title: 'Ambachtelijke excellentie',
      features: [
        { title: 'Europees vakmanschap', desc: 'Edele materialen en ervaren ambachtslieden' },
        { title: 'Levering & installatie', desc: 'Complete service bij u thuis' },
        { title: 'Op maat ontwerp', desc: 'Wij personaliseren elk stuk' },
        { title: '10 jaar garantie', desc: 'Kwaliteit die blijft' },
      ]
    },
    pl: {
      title: 'Rzemieślnicza doskonałość',
      features: [
        { title: 'Europejskie rzemiosło', desc: 'Szlachetne materiały i doświadczeni rzemieślnicy' },
        { title: 'Dostawa i montaż', desc: 'Kompleksowa usługa do domu' },
        { title: 'Design na wymiar', desc: 'Personalizujemy każdy element' },
        { title: 'Gwarancja 10 lat', desc: 'Jakość która trwa' },
      ]
    },
    cs: {
      title: 'Proč si vybrat nás',
      features: [
        { title: 'Záruka 5 let', desc: 'Plné krytí všech produktů' },
        { title: 'Doprava zdarma', desc: 'Bezplatné doručení po celé ČR' },
        { title: 'Profesionální instalace', desc: 'Specializovaný technický tým' },
        { title: 'Podpora 24/7', desc: 'Zákaznický servis vždy k dispozici' },
      ]
    },
    el: {
      title: 'Γιατί να μας επιλέξετε',
      features: [
        { title: 'Εγγύηση 5 ετών', desc: 'Πλήρης κάλυψη σε όλα τα προϊόντα' },
        { title: 'Δωρεάν αποστολή', desc: 'Δωρεάν παράδοση σε όλη την Ελλάδα' },
        { title: 'Επαγγελματική εγκατάσταση', desc: 'Εξειδικευμένη τεχνική ομάδα' },
        { title: 'Υποστήριξη 24/7', desc: 'Εξυπηρέτηση πελατών πάντα διαθέσιμη' },
      ]
    },
  };

  const t = texts[locale] || texts.es;
  const icons = [Shield, Truck, Wrench, HeadphonesIcon];

  return (
    <section className="py-24 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-neutral-900 text-center mb-16">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 bg-white rounded-full border border-neutral-100">
                  <Icon className="w-5 h-5 text-neutral-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
