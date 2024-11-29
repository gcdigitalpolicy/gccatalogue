"use client";

import React from "react";

export const Container = ({
  id,
  size = "full",
  border = false,
  tag,
  centered = false,
  children,
}) => {
  const containerClasses = [
    "xl:px-0 sm:px-500 p-400",
    `container-${size}`,
    centered ? "mx-auto" : "",
    border ? `b-sm` : "",
  ]
    .join(" ")
    .trim();

  return (
    <main id={id} className={containerClasses}>
      {children}
    </main>
  );
  // TODO: This is documentation for a known issue at the moment.
  // Issues with hydration w/SSR, doesn't work if we use GcdsContainer here
  //      Warning: Expected server HTML to contain a matching <main> in <gcds-container>.
  //<Page>
  //   <main>
  // return (
  //     <GcdsContainer container-id={props.id} size={props.size} {...props.border} tag={props.tag} centered={props.centered} padding={props.padding}>
  //         {props.children}
  //     </GcdsContainer>
  // );
};
