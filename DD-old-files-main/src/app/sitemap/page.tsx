"use client";

import dynamic from "next/dynamic";

const SitemapPage = dynamic(() => import("@/page-components/SitemapXML"));

export default function Sitemap() {
  return <SitemapPage />;
}
