"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const KnowledgeBaseArticlePage = dynamic(() => import("@/page-components/KnowledgeBaseArticle"));

export default function HelpArticle() {
  const params = useParams();
  return <KnowledgeBaseArticlePage slug={params.slug as string} />;
}
