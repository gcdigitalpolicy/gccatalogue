"use client";

import React from "react";
import { GcdsFooter } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";

export const Footer = () => {

  const contextualLinks = JSON.stringify({
    "Contact Us": "#",
    "Report an issue": "#"
  });

  return (
    <GcdsWrapper>
      <GcdsFooter
        display="full"
        contextualHeading="GC Digital Policy"
        contextualLinks={contextualLinks}
      />
    </GcdsWrapper>
  );
};
