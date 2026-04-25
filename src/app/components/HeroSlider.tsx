"use client";

import dynamic from "next/dynamic";

const ReactCompareSlider = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
  { ssr: false }
);
const ReactCompareSliderImage = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSliderImage),
  { ssr: false }
);

export default function HeroSlider() {
  return (
    <ReactCompareSlider
      defaultPosition={35}
      style={{ width: "100%", height: "100%" }}
      itemOne={
        <ReactCompareSliderImage
          src="/screenshots/hero-avant2.png"
          alt="Fiche RNCP chargée"
          style={{ objectFit: "cover" }}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/screenshots/hero-apres2.png"
          alt="Formation complète générée par Syllabis"
          style={{ objectFit: "cover" }}
        />
      }
    />
  );
}
