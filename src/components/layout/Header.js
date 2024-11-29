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

  return (
    <header>
      <GcdsHeader
        applicationTitle={
          <Link href="/" className="text-decoration-none">
            {settings?.data?.site_title || "GC Catalogue"}
          </Link>
        }
        applicationTitleHref="/"
        language="en"
        signInHref="#"
        signOutHref="#"
        menuPosition="right"
        skipToMainText="Skip to main content"
        skipToMainHref="#main"
        topnavLinks={navigation?.data?.links?.map((item) => ({
          href: item.link || "#",
          text: item.label || "",
        })) || []}
      />
      <PhaseBanner settings={settings} />
      <Container>
        <Breadcrumbs title={title} />
      </Container>
    </header>
  );
}
