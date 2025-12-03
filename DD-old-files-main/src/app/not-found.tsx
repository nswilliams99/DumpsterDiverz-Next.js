"use client";

import dynamic from "next/dynamic";

const NotFoundPage = dynamic(() => import("@/page-components/NotFound"), {
  ssr: false,
});

export default function NotFound() {
  return <NotFoundPage />;
}
