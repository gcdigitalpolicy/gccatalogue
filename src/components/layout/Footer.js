"use client";

import React from "react";
import { GcdsFooter } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";

export const Footer = ({ locale }) => {
  const contextualLinks = {
    "Contact Us": "#",
    "Report an issue": "#"
  };

  return (
    <GcdsWrapper>
      <GcdsFooter
        display="full"
        contextualHeading={locale === 'fr-ca' ? 'Politique numérique du GC' : 'GC Digital Policy'}
        contextualLinks={contextualLinks}
      />
    </GcdsWrapper>
  );
};
