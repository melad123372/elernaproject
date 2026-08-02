import React, { useState } from "react";

import leimg1 from "../../assets/11- Home Two Imgs/PotentialImage-1.webp";
import leimg2 from "../../assets/11- Home Two Imgs/PotentialImage-2.webp";
import leimg3 from "../../assets/11- Home Two Imgs/PotentialImage-3.webp";
import leimg4 from "../../assets/11- Home Two Imgs/PotentialImage-4.webp";

const data = [
  {
    id: "01",
    title: "Flexibility and convenience",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg1,
  },
  {
    id: "02",
    title: "Course accessibility",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg2,
  },
  {
    id: "03",
    title: "Cost-effectiveness",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg3,
  },
  {
    id: "04",
    title: "Personalized learning",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: leimg4,
  },
];

export default function LearningSection() {
  const [activeImg, setActiveImg] = useState(data[0].img);

  return (
    <section className="w-full overflow-hidden bg-[#eef3f5]">
      {/* HEADER */}
      <div
        className="
          px-4
          py-12
          text-center
          sm:px-6
          sm:py-14
          md:px-8
          md:py-16
          lg:py-20
        "
      >
        <p
          className="
            text-xs
            font-semibold
            tracking-[0.18em]
            text-gray-700
            sm:text-sm
            sm:tracking-widest
          "
        >
          UNLOCKING POTENTIAL
        </p>

        <h1
          className="
            mx-auto
            mt-4
            max-w-5xl
            text-[27px]
            font-bold
            leading-[1.25]
            text-[#112a30]
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            lg:leading-[1.15]
          "
        >
          Discover the boundless advantages and transformative power of
          eLearning for professional growth
        </h1>
      </div>

      {/* ================= MOBILE DESIGN ================= */}
      <div
        className="
          space-y-4
          px-0
          pb-5
          md:hidden
        "
      >
        {data.map((item) => (
          <article
            key={item.id}
            className="
              relative
              min-h-[390px]
              w-full
              overflow-hidden
              bg-[#10252a]
            "
          >
            {/* MOBILE IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* MOBILE DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/25
                via-black/35
                to-black/90
              "
            />

            {/* MOBILE CONTENT */}
            <div
              className="
                relative
                z-10
                flex
                min-h-[390px]
                flex-col
                justify-center
                px-6
                py-10
                text-white
              "
            >
              <span
                className="
                  text-[38px]
                  font-bold
                  leading-none
                "
              >
                {item.id}
              </span>

              <h2
                className="
                  mt-10
                  text-[27px]
                  font-bold
                  leading-tight
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  mt-8
                  max-w-[650px]
                  text-[17px]
                  font-medium
                  leading-8
                  text-white/75
                "
              >
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ================= TABLET / DESKTOP DESIGN ================= */}
      <div
        className="
          relative
          hidden
          min-h-[650px]
          overflow-hidden
          md:block
          lg:min-h-[700px]
        "
      >
        {/* ACTIVE BACKGROUND IMAGE */}
        <img
          key={activeImg}
          src={activeImg}
          alt="Online learning"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            transition-all
            duration-700
          "
        />

        {/* DESKTOP OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/10
            via-black/20
            to-black/85
          "
        />

        {/* DESKTOP CARDS */}
        <div
          className="
            relative
            z-10
            grid
            min-h-[650px]
            grid-cols-4
            lg:min-h-[700px]
          "
        >
          {data.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveImg(item.img)}
              onClick={() => setActiveImg(item.img)}
              className="
                group
                relative
                flex
                cursor-pointer
                flex-col
                justify-end
                overflow-hidden
                border-r
                border-white/25
                p-6
                transition-colors
                duration-500
                hover:bg-black/15
                lg:p-8
                xl:p-10
              "
            >
              <span
                className="
                  text-4xl
                  font-bold
                  leading-none
                  text-white
                  lg:text-5xl
                "
              >
                {item.id}
              </span>

              <h2
                className="
                  mt-5
                  max-w-xs
                  text-xl
                  font-semibold
                  leading-snug
                  text-white
                  lg:text-2xl
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  mt-5
                  max-w-sm
                  translate-y-full
                  text-base
                  leading-7
                  text-white/80
                  opacity-0
                  transition-all
                  duration-700
                  ease-out
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  lg:leading-8
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
