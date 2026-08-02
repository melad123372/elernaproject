import React from "react";
import { FaCheck } from "react-icons/fa";

import giralImg from "../../assets/1- Home One imgs/WomanImageHolding.webp";
import boyImg from "../../assets/1- Home One imgs/ManImageHoldingGraph.webp";

export default function PersonalizedLearning() {
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div
        className="
          mx-auto
          grid
          max-w-[1200px]
          grid-cols-1
          items-center
          gap-12
          px-4
          sm:px-6
          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* RIGHT CONTENT */}
        {/* Mobile: text first */}
        {/* Desktop: text on right */}
        <div className="order-1 lg:order-2">
          <p
            className="
              text-sm
              font-bold
              tracking-wider
              text-[#102b31]
            "
          >
            WHAT WE OFFER
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              text-[#102b31]
              sm:mt-5
              sm:text-4xl
            "
          >
            Personalized learning for
            <br className="hidden sm:block" /> your ambitions
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-gray-500
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-x-5
              gap-y-5
              sm:mt-8
              sm:grid-cols-2
            "
          >
            <div className="flex items-center gap-3">
              <FaCheck className="shrink-0 text-[#102b31]" />

              <span
                className="
                  text-base
                  font-semibold
                  text-[#102b31]
                  sm:text-lg
                "
              >
                Skill-based instruction
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheck className="shrink-0 text-[#102b31]" />

              <span
                className="
                  text-base
                  font-semibold
                  text-[#102b31]
                  sm:text-lg
                "
              >
                Analytics and insights
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheck className="shrink-0 text-[#102b31]" />

              <span
                className="
                  text-base
                  font-semibold
                  text-[#102b31]
                  sm:text-lg
                "
              >
                Global certification
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheck className="shrink-0 text-[#102b31]" />

              <span
                className="
                  text-base
                  font-semibold
                  text-[#102b31]
                  sm:text-lg
                "
              >
                Customizable courses
              </span>
            </div>
          </div>

          {/* CTA BOX */}
          <div
            className="
              mt-9
              flex
              flex-col
              items-start
              justify-between
              gap-6
              rounded-md
              bg-[#eef7fa]
              p-5
              sm:mt-10
              sm:p-8
              md:flex-row
              md:items-center
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                  text-[#102b31]
                  sm:text-2xl
                "
              >
                Still have questions?
              </h3>

              <p
                className="
                  mt-3
                  text-base
                  leading-7
                  text-gray-500
                  sm:mt-4
                  sm:text-lg
                "
              >
                Lorem ipsum dolor sit amet conse
                <br className="hidden sm:block" />
                ipsum blandit etiam aliquam.
              </p>
            </div>

            <button
              type="button"
              className="
                w-full
                rounded-md
                bg-[#102b31]
                px-8
                py-4
                text-base
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#1c424b]
                sm:text-lg
                md:w-auto
              "
            >
              Get Started
            </button>
          </div>
        </div>

        {/* LEFT IMAGES */}
        {/* Mobile: images below text */}
        {/* Desktop: images on left */}
        <div
          className="
            order-2
            relative
            mx-auto
            h-[350px]
            w-full
            max-w-[600px]
            sm:h-[500px]
            md:h-[580px]
            lg:order-1
            lg:h-[600px]
          "
        >
          {/* Girl Image */}
          <img
            src={giralImg}
            alt="Student girl"
            className="
              absolute
              right-0
              top-0
              z-10
              h-[76%]
              w-[68%]
              rounded-md
              object-cover
              shadow-xl
              sm:h-[82%]
              sm:w-[65%]
              lg:right-0
            "
          />

          {/* Boy Image */}
          <img
            src={boyImg}
            alt="Student boy"
            className="
              absolute
              bottom-0
              left-0
              z-20
              h-[62%]
              w-[60%]
              rounded-md
              object-cover
              shadow-xl
              sm:h-[72%]
            "
          />

          {/* Floating Card */}
          <div
            className="
              absolute
              left-0
              top-5
              z-30
              flex
              items-center
              gap-3
              rounded-md
              bg-[#102b31]
              px-4
              py-3
              text-white
              shadow-lg
              sm:left-8
              sm:top-14
              sm:gap-5
              sm:px-7
              sm:py-5
            "
          >
            <span
              className="
                text-3xl
                font-bold
                text-yellow-400
                sm:text-5xl
              "
            >
              50+
            </span>

            <span
              className="
                text-sm
                font-semibold
                leading-tight
                sm:text-xl
              "
            >
              Free courses
              <br />
              listed online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
