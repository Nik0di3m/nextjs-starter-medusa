"use client";
import React from "react";
import { hetoTitleMap } from "@/lib/utils";
import { usePathname } from "next/navigation";
const HeroTitle = () => {
  const path = usePathname();
  return <span>{hetoTitleMap(path)}</span>;
};

export default HeroTitle;
