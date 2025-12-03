"use client";

import dynamic from "next/dynamic";

const KnowledgeBaseArticlePage = dynamic(() => import("@/page-components/KnowledgeBaseArticle"));

export default function HelpArticle() {
  return <KnowledgeBaseArticlePage />;
}
