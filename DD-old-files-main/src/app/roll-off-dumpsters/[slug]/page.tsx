"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const RolloffTownPage = dynamic(() => import("@/components/rolloff/RolloffTownPage"));

export default function RollOffTown() {
  const params = useParams();
  return <RolloffTownPage slug={params.slug as string} />;
}
