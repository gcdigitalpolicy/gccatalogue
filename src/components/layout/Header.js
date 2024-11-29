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

export function Header({ title, locales, navigation, settings }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/patterns", text: "Policy Patterns" },
    { href: "/tools", text: "Policy Tools" }
  ];

  return (
    <header>
      {locales.map(
        (locale, index) =>
          index === 1 && (
            <GcdsHeader key={index} langHref={locale.url} skipToHref="#">
              <PhaseBanner settings={settings} />
              <GcdsSignature hasLink="false" type="signature" variant="color" />
              <GcdsTopNav slot="menu" label="Site" alignment="right">
                <GcdsNavLink href="/" slot="home">
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
          )
      )}
    </header>
  );
}
