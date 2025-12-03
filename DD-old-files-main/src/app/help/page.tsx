"use client";

import dynamic from "next/dynamic";

const KnowledgeBasePage = dynamic(() => import("@/page-components/KnowledgeBase"));

export default function Help() {
  return <KnowledgeBasePage />;
}
