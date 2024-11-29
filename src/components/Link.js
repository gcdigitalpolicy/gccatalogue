"use client";

import React from "react";
import { GcdsLink } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";

export const Link = ({ params, children }) => {
  return (
    <GcdsWrapper>
      <GcdsLink {...params}>{children}</GcdsLink>
    </GcdsWrapper>
  );
};
