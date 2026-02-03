// LUXE INTERIEUR - LIGHTWEIGHT SEO SYSTEM
// No heavy data loading, no memory issues, always works

export const LOCALES = ['es', 'en', 'de', 'fr', 'it', 'pt', 'nl', 'pl', 'cs', 'el'] as const;
export type Locale = typeof LOCALES[number];

type Trans = {
  products: string;
  in: string;
  shipping: string;
  warranty: string;
  support: string;
  home: string;
  contact: string;
  viewAll: string;
  shop: string;
  description: string;
  qualityDesc: string;
  deliveryDesc: string;
  supportDesc: string;
};

// Complete translations for Luxe Interieur
export const T: Record<Locale, Trans> = {
  es: { products: 'Luxe Interieur Premium', in: 'en', shipping: 'Entrega e Instalación', warranty: 'Garantía 10 Años', support: 'Diseño a Medida', home: 'Inicio', contact: 'Contacto', viewAll: 'Ver Todo', shop: 'Colecciones', description: 'Muebles de lujo artesanales. Fabricación europea, entrega e instalación incluida.', qualityDesc: 'Materiales nobles y acabados impecables', deliveryDesc: 'Entrega e instalación profesional', supportDesc: 'Equipo de diseñadores disponible' },
  en: { products: 'Luxe Interieur Premium', in: 'in', shipping: 'Delivery & Installation', warranty: '10 Year Warranty', support: 'Bespoke Design', home: 'Home', contact: 'Contact', viewAll: 'View All', shop: 'Collections', description: 'Artisan luxury furniture. European craftsmanship, delivery and installation included.', qualityDesc: 'Noble materials and impeccable finishes', deliveryDesc: 'Professional delivery and installation', supportDesc: 'Design team available' },
  de: { products: 'Luxe Interieur Premium', in: 'in', shipping: 'Lieferung & Montage', warranty: '10 Jahre Garantie', support: 'Maßanfertigung', home: 'Startseite', contact: 'Kontakt', viewAll: 'Alle Anzeigen', shop: 'Kollektionen', description: 'Handgefertigte Luxusmöbel. Europäische Handwerkskunst, Lieferung und Montage inklusive.', qualityDesc: 'Edle Materialien und makellose Verarbeitung', deliveryDesc: 'Professionelle Lieferung und Montage', supportDesc: 'Designteam verfügbar' },
  fr: { products: 'Luxe Interieur Premium', in: 'à', shipping: 'Livraison & Installation', warranty: 'Garantie 10 Ans', support: 'Design Sur Mesure', home: 'Accueil', contact: 'Contact', viewAll: 'Voir Tout', shop: 'Collections', description: 'Mobilier de luxe artisanal. Fabrication européenne, livraison et installation incluses.', qualityDesc: 'Matériaux nobles et finitions impeccables', deliveryDesc: 'Livraison et installation professionnelles', supportDesc: 'Équipe de designers disponible' },
  it: { products: 'Luxe Interieur Premium', in: 'a', shipping: 'Consegna & Installazione', warranty: 'Garanzia 10 Anni', support: 'Design Su Misura', home: 'Home', contact: 'Contatto', viewAll: 'Vedi Tutto', shop: 'Collezioni', description: 'Mobili di lusso artigianali. Artigianato europeo, consegna e installazione incluse.', qualityDesc: 'Materiali nobili e finiture impeccabili', deliveryDesc: 'Consegna e installazione professionale', supportDesc: 'Team di designer disponibile' },
  pt: { products: 'Luxe Interieur Premium', in: 'em', shipping: 'Entrega & Instalação', warranty: 'Garantia 10 Anos', support: 'Design Por Medida', home: 'Início', contact: 'Contato', viewAll: 'Ver Tudo', shop: 'Coleções', description: 'Mobiliário de luxo artesanal. Fabrico europeu, entrega e instalação incluídas.', qualityDesc: 'Materiais nobres e acabamentos impecáveis', deliveryDesc: 'Entrega e instalação profissional', supportDesc: 'Equipe de designers disponível' },
  nl: { products: 'Luxe Interieur Premium', in: 'in', shipping: 'Levering & Installatie', warranty: '10 Jaar Garantie', support: 'Op Maat Ontwerp', home: 'Home', contact: 'Contact', viewAll: 'Bekijk Alles', shop: 'Collecties', description: 'Ambachtelijk luxe meubilair. Europees vakmanschap, levering en installatie inbegrepen.', qualityDesc: 'Edele materialen en onberispelijke afwerking', deliveryDesc: 'Professionele levering en installatie', supportDesc: 'Ontwerpteam beschikbaar' },
  pl: { products: 'Luxe Interieur Premium', in: 'w', shipping: 'Dostawa & Montaż', warranty: 'Gwarancja 10 Lat', support: 'Design Na Wymiar', home: 'Strona główna', contact: 'Kontakt', viewAll: 'Zobacz Wszystko', shop: 'Kolekcje', description: 'Luksusowe meble rzemieślnicze. Europejskie rzemiosło, dostawa i montaż w cenie.', qualityDesc: 'Szlachetne materiały i nienaganne wykończenie', deliveryDesc: 'Profesjonalna dostawa i montaż', supportDesc: 'Zespół projektantów dostępny' },
  cs: { products: 'Luxe Interieur Premium', in: 'v', shipping: 'Dodání & Instalace', warranty: 'Záruka 10 Let', support: 'Design Na Míru', home: 'Domů', contact: 'Kontakt', viewAll: 'Zobrazit Vše', shop: 'Kolekce', description: 'Luxusní řemeslný nábytek. Evropské řemeslo, dodání a instalace v ceně.', qualityDesc: 'Ušlechtilé materiály a bezchybné zpracování', deliveryDesc: 'Profesionální dodání a instalace', supportDesc: 'Tým designérů k dispozici' },
  el: { products: 'Luxe Interieur Premium', in: 'σε', shipping: 'Παράδοση & Εγκατάσταση', warranty: 'Εγγύηση 10 Ετών', support: 'Σχεδιασμός Κατά Παραγγελία', home: 'Αρχική', contact: 'Επικοινωνία', viewAll: 'Δείτε Όλα', shop: 'Συλλογές', description: 'Χειροποίητα πολυτελή έπιπλα. Ευρωπαϊκή τεχνογνωσία, παράδοση και εγκατάσταση περιλαμβάνονται.', qualityDesc: 'Ευγενή υλικά και άψογο φινίρισμα', deliveryDesc: 'Επαγγελματική παράδοση και εγκατάσταση', supportDesc: 'Ομάδα σχεδιαστών διαθέσιμη' },
};

// Format ANY slug to readable title - NEVER fails, ZERO memory
export function formatSlugToTitle(slug: string): string {
  if (!slug) return '';
  // Decode URL-encoded characters (e.g., %C3%A4 -> ä)
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    // If decode fails, use original
  }
  return decoded
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Get locale safely - defaults to 'en'
export function getLocale(locale: string): Locale {
  return LOCALES.includes(locale as Locale) ? locale as Locale : 'en';
}

// Get translations safely
export function getT(locale: string) {
  return T[getLocale(locale)] || T.en;
}
