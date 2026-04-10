"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function HeroSlider() {
  return (
    <ReactCompareSlider
      defaultPosition={35}
      style={{ width: "100%", height: "100%" }}
      itemOne={
        <ReactCompareSliderImage
          src="/screenshots/hero-avant.png"
          alt="Fiche RNCP uploadée"
          style={{ objectFit: "cover" }}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/screenshots/hero-apres.png"
          alt="Formation complète générée par Syllabis"
          style={{ objectFit: "cover" }}
        />
      }
    />
  );
}
