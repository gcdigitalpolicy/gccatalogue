"use client";

import { GcdsPhaseBanner } from "@cdssnc/gcds-components-react-ssr";

export function PhaseBanner({ settings }) {
  return (
    <GcdsPhaseBanner phase="alpha">
      <p slot="banner-text">
        {settings?.data?.banner || "This site is under development."}
      </p>
    </GcdsPhaseBanner>
  );
}
