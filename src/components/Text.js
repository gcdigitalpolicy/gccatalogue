"use client";

import React from "react";
import { GcdsText } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";

export const Text = ({ params, children }) => {
  return (
    <GcdsWrapper>
      <GcdsText {...params}>{children}</GcdsText>
    </GcdsWrapper>
  );
};
