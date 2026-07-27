import React from "react";

import bgImg1 from "../../assets/1- Home One imgs/FooterOneBackground3.avif";
import bgImg2 from "../../assets/1- Home One imgs/TestimonialBackground.avif";
import img1 from "../../assets/1- Home One imgs/Achievements.webp";
import img2 from "../../assets/1- Home One imgs/TrustedByImage.avif";
import BannerGirl from "../../assets/1- Home One imgs/BannerGirl.webp";

export const heroData = {
  bgImg1,
  bgImg2,
  img1,
  img2,
  BannerGirl,

  titleSmall: "Online learning",
  titleMain: "More than 25000+ courses",
  description:
    "Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.",
  buttonText: "Get Started",
};

export default function Hero() {
  const {
    bgImg1,
    bgImg2,
    img1,
    img2,
    BannerGirl,
    titleSmall,
    titleMain,
    description,
    buttonText,
  } = heroData;

  return (
    <section className="relative min-h-screen overflow-hidden p-8">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg1})` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${bgImg2})` }}
        />

        <div className="absolute inset-0 bg-[#0F252A]/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center px-6 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="relative mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
          <img
            src={BannerGirl}
            alt="Student learning online"
            className="relative z-30 w-[240px] drop-shadow-2xl sm:w-[300px] md:w-[380px] lg:w-[550px]"
          />

          <img
            src={img1}
            alt="Achievement information"
            className="absolute left-4 top-1/2 z-50 w-16 -translate-y-1/2 rounded-xl shadow-xl sm:w-24 md:w-48"
          />

          <img
            src={img2}
            alt="Trusted students information"
            className="absolute bottom-3 right-4 z-50 w-16 rounded-xl shadow-xl sm:w-24 md:w-56"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full text-center text-white lg:w-1/2 lg:text-left">
          <h5 className="mb-3 text-sm uppercase tracking-widest text-cyan-400">
            {titleSmall}
          </h5>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {titleMain}
          </h1>

          <p className="mx-auto mt-5 max-w-md text-gray-200 lg:mx-0">
            {description}
          </p>

          <button
            type="button"
            className="mt-6 rounded-full bg-cyan-500 px-6 py-3 transition hover:scale-105 hover:bg-cyan-600"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
