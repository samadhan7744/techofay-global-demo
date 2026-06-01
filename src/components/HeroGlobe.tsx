"use client";

import dynamic from "next/dynamic";

const GlobeScene = dynamic(() => import("@/components/GlobeScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,77,137,.24),transparent_56%)]" />
});

export default function HeroGlobe() {
  return <GlobeScene />;
}
