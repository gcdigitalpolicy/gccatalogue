"use client";

import { GcdsHeading } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";

export const Heading = ({ params, children }) => {
  return (
    <GcdsWrapper>
      <GcdsHeading {...params}>{children}</GcdsHeading>
    </GcdsWrapper>
  );
};
