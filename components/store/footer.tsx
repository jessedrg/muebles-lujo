import Link from "next/link";
import { type Locale } from "@/lib/seo-data";

interface FooterProps {
  locale: Locale;
}

const CATEGORIES: Record<string, { slug: string; name: string }[]> = {
  es: [{ slug: 'sofas-lujo', name: 'Sofás' }, { slug: 'mesas-comedor', name: 'Mesas' }, { slug: 'sillones-diseno', name: 'Sillones' }, { slug: 'camas-premium', name: 'Camas' }],
  en: [{ slug: 'luxury-sofas', name: 'Sofas' }, { slug: 'dining-tables', name: 'Tables' }, { slug: 'designer-armchairs', name: 'Armchairs' }, { slug: 'premium-beds', name: 'Beds' }],
  de: [{ slug: 'luxus-sofas', name: 'Sofas' }, { slug: 'esstische', name: 'Tische' }, { slug: 'designer-sessel', name: 'Sessel' }, { slug: 'premium-betten', name: 'Betten' }],
  fr: [{ slug: 'canapes-luxe', name: 'Canapés' }, { slug: 'tables-salle-manger', name: 'Tables' }, { slug: 'fauteuils-design', name: 'Fauteuils' }, { slug: 'lits-premium', name: 'Lits' }],
  it: [{ slug: 'divani-lusso', name: 'Divani' }, { slug: 'tavoli-pranzo', name: 'Tavoli' }, { slug: 'poltrone-design', name: 'Poltrone' }, { slug: 'letti-premium', name: 'Letti' }],
  pt: [{ slug: 'sofas-luxo', name: 'Sofás' }, { slug: 'mesas-jantar', name: 'Mesas' }, { slug: 'poltronas-design', name: 'Poltronas' }, { slug: 'camas-premium', name: 'Camas' }],
  nl: [{ slug: 'luxe-banken', name: 'Banken' }, { slug: 'eettafels', name: 'Tafels' }, { slug: 'design-fauteuils', name: 'Fauteuils' }, { slug: 'premium-bedden', name: 'Bedden' }],
  pl: [{ slug: 'luksusowe-sofy', name: 'Sofy' }, { slug: 'stoly-jadalne', name: 'Stoły' }, { slug: 'fotele-designerskie', name: 'Fotele' }, { slug: 'lozka-premium', name: 'Łóżka' }],
};

export function Footer({ locale }: FooterProps) {
  const texts: Record<string, { desc: string; products: string; company: string; legal: string; privacy: string; terms: string; about: string; contact: string; faq: string }> = {
    es: { desc: 'Mobiliario de lujo artesanal. Fabricación europea, entrega e instalación incluida.', products: 'Colecciones', company: 'Empresa', legal: 'Legal', privacy: 'Privacidad', terms: 'Términos', about: 'Nosotros', contact: 'Contacto', faq: 'FAQ' },
    en: { desc: 'Artisan luxury furniture. European craftsmanship, delivery and installation included.', products: 'Collections', company: 'Company', legal: 'Legal', privacy: 'Privacy', terms: 'Terms', about: 'About', contact: 'Contact', faq: 'FAQ' },
    de: { desc: 'Handgefertigte Luxusmöbel. Europäische Handwerkskunst, Lieferung und Montage inklusive.', products: 'Kollektionen', company: 'Unternehmen', legal: 'Impressum', privacy: 'Datenschutz', terms: 'AGB', about: 'Über uns', contact: 'Kontakt', faq: 'FAQ' },
    fr: { desc: 'Mobilier de luxe artisanal. Fabrication européenne, livraison et installation incluses.', products: 'Collections', company: 'Entreprise', legal: 'Mentions légales', privacy: 'Confidentialité', terms: 'CGV', about: 'À propos', contact: 'Contact', faq: 'FAQ' },
    it: { desc: 'Mobili di lusso artigianali. Artigianato europeo, consegna e installazione incluse.', products: 'Collezioni', company: 'Azienda', legal: 'Note legali', privacy: 'Privacy', terms: 'Termini', about: 'Chi siamo', contact: 'Contatto', faq: 'FAQ' },
    pt: { desc: 'Mobiliário de luxo artesanal. Fabrico europeu, entrega e instalação incluídas.', products: 'Coleções', company: 'Empresa', legal: 'Legal', privacy: 'Privacidade', terms: 'Termos', about: 'Sobre', contact: 'Contato', faq: 'FAQ' },
    nl: { desc: 'Ambachtelijke luxe meubels. Europees vakmanschap, levering en installatie inbegrepen.', products: 'Collecties', company: 'Bedrijf', legal: 'Juridisch', privacy: 'Privacy', terms: 'Voorwaarden', about: 'Over ons', contact: 'Contact', faq: 'FAQ' },
    pl: { desc: 'Luksusowe meble rzemieślnicze. Europejskie rzemiosło, dostawa i montaż w cenie.', products: 'Kolekcje', company: 'Firma', legal: 'Nota prawna', privacy: 'Prywatność', terms: 'Regulamin', about: 'O nas', contact: 'Kontakt', faq: 'FAQ' },
  };
  const t = texts[locale] || texts.es;
  const cats = CATEGORIES[locale] || CATEGORIES.es;

  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="text-lg font-light text-neutral-900">
              Luxe Interieur
            </Link>
            <p className="text-sm text-neutral-500 mt-4 max-w-xs leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">{t.products}</h4>
            <ul className="space-y-3">
              {cats.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/${locale}/${cat.slug}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">{t.company}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/about`} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">{t.about}</Link></li>
              <li><Link href={`/${locale}/contacto`} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">{t.contact}</Link></li>
              <li><Link href={`/${locale}/faq`} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">{t.faq}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Luxe Interieur
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/privacidad`} className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">
              {t.privacy}
            </Link>
            <Link href={`/${locale}/terminos`} className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">
              {t.terms}
            </Link>
            <Link href={`/${locale}/legal`} className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">
              {t.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
