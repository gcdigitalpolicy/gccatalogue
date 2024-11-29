"use client";

import React from "react";
import { GcdsSearch } from "@cdssnc/gcds-components-react-ssr";

export const Search = () => {
  return (
    <GcdsSearch
      action="/searchresults"
      method="post"
      name="searchbox"
      searchId="searchbox"
      placeholder="this site"
      slot="search"
    ></GcdsSearch>
  );
};
