"use client";

import React from "react";
import { GcdsGrid } from "@cdssnc/gcds-components-react-ssr";

export const Grid = ({
  tag = "div",
  columns,
  columnsTablet,
  columnsDesktop,
  children,
}) => {
  return (
    <GcdsGrid
      tag={tag}
      columns={columns}
      columnsTablet={columnsTablet}
      columnsDesktop={columnsDesktop}
    >
      {children}
    </GcdsGrid>
  );
};
