"use client";

import React from "react";
import { GcdsCard } from "@cdssnc/gcds-components-react-ssr";
import { validateFields } from "@/lib/validation";

export const Card = ({ title, link, badge, description }) => {
  // Define fields and their max lengths
  const fields = {
    title: { value: title, maxLength: 50 },
    link: { value: link, maxLength: 100 },
    badge: { value: badge, maxLength: 20 },
    description: { value: description, maxLength: 150 },
  };

  return (
    <GcdsCard
      cardTitle={title}
      href={link}
      badge={badge}
      description={description}
    ></GcdsCard>
  );
};
