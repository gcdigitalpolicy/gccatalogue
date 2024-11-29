"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GcdsBreadcrumbs } from "@cdssnc/gcds-components-react-ssr";

export function Breadcrumbs({ title }) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  // Create breadcrumb items based on the current path
  const breadcrumbItems = paths.map((path, index) => {
    const href = "/" + paths.slice(0, index + 1).join("/");
    const label = path.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      text: label,
      href: href,
    };
  });

  // Add home as the first item
  breadcrumbItems.unshift({
    text: "Home",
    href: "/",
  });

  return (
    <nav aria-label="Breadcrumb">
      <GcdsBreadcrumbs links={breadcrumbItems} />
    </nav>
  );
}
