"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  GcdsHeader,
  GcdsTopNav,
  GcdsSignature,
  GcdsNavLink
} from "@cdssnc/gcds-components-react-ssr";
import { PhaseBanner } from "@/components/layout/PhaseBanner";
import { Search } from "@/components/layout/Search";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";

export function Header({ title, locale, navigation, settings }) {
  const pathname = usePathname();
  const alternateLocale = locale === 'en-ca' ? 'fr-ca' : 'en-ca';

  const navLinks = [
    { href: `/${locale}/patterns`, text: locale === 'fr-ca' ? "Modèles de politique" : "Policy Patterns" },
    { href: `/${locale}/tools`, text: locale === 'fr-ca' ? "Outils de politique" : "Policy Tools" }
  ];

  return (
    <header>
      <GcdsHeader langHref={`/${alternateLocale}${pathname.substring(6)}`} skipToHref="#">
        <PhaseBanner settings={settings} />
        <GcdsSignature hasLink="false" type="signature" variant="color" />
        <GcdsTopNav slot="menu" label="Site" alignment="right">
          <GcdsNavLink href={`/${locale}`} slot="home">
            {settings?.data?.site_title || "GC Catalogue"}
          </GcdsNavLink>
          {navLinks.map((link) => (
            <GcdsNavLink key={link.text} href={link.href}>
              {link.text}
            </GcdsNavLink>
          ))}
        </GcdsTopNav>
        <Breadcrumbs title={title} />
        <Search />
      </GcdsHeader>
    </header>
  );
}
