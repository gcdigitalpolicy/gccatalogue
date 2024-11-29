import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import clsx from "clsx";

// Import GCDS Utility Framework
import "@cdssnc/gcds-utility/dist/gcds-utility.min.css";

// Import GCDS Components
import "@cdssnc/gcds-components-react-ssr/gcds.css";
import "@cdssnc/gcds-components-react-ssr/server";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "GC Catalogue",
  description: "Government of Canada's Catalogue",
};

export default async function Layout({ children, params }) {
  const lang = params.lang == "fr-ca" ? "fr" : "en";

  return (
    <html lang={lang}>
      <body className={clsx(inter.className)}>{children}</body>
    </html>
  );
}
