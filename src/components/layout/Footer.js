"use client";

import React from "react";
import { GcdsFooter } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";

export const Footer = () => {
  const contextualLinks = JSON.stringify({
    Plants: "/plants",
    Pests: "#",
    Seeds: "#",
  });

  return (
    <GcdsWrapper>
      <GcdsFooter
        display="full"
        contextualHeading="Additional content"
        contextualLinks={contextualLinks}
      />
    </GcdsWrapper>
  );
};
