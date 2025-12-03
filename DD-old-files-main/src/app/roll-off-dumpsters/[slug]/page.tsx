"use client";

import dynamic from "next/dynamic";

const RolloffTownPage = dynamic(() => import("@/components/rolloff/RolloffTownPage"));

export default function RollOffTown() {
  return <RolloffTownPage />;
}
