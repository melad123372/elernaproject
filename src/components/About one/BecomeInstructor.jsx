import React from "react";
import { FaStar } from "react-icons/fa";

import becimg1 from "../../assets/2- About One imgs/GirlWithLogo.webp";

export default function BecomeInstructor() {
  return (
    <section
      className="
        mx-auto
        flex
        max-w-[1250px]
        flex-col
        items-center
        justify-between
        overflow-hidden
        px-4
        py-14
        sm:px-6
        sm:py-16
        lg:flex-row
        lg:px-10
        lg:py-20
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          w-full
          text-center
          lg:w-1/2
          lg:text-left
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-[#102c33]
            sm:text-4xl
            lg:text-5xl
          "
        >
          Became an instructor
        </h1>

        <p
          className="
            mt-5
            text-base
            leading-7
            text-gray-500
            sm:mt-6
            sm:text-lg
            sm:leading-relaxed
            lg:text-xl
          "
        >
          Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
          scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est
          nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
        </p>

        <button
          type="button"
          className="
            mt-8
            rounded-md
            bg-[#102c33]
            px-8
            py-3.5
            text-base
            font-medium
            text-white
            transition
            duration-300
            hover:bg-[#1b4149]
            sm:mt-10
            sm:px-10
            sm:py-4
            sm:text-lg
          "
        >
          Start Teaching Today
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          relative
          mt-12
          h-[420px]
          w-full
          lg:mt-0
          lg:h-[500px]
          lg:w-1/2
        "
      >
        {/* PERSON IMAGE */}
        <img
          src={becimg1}
          alt="Instructor"
          className="
            absolute
            bottom-0
            left-1/2
            z-10
            h-[400px]
            max-w-none
            -translate-x-1/2
            object-contain
            sm:h-[460px]
            lg:left-[120px]
            lg:h-[520px]
            lg:translate-x-0
          "
        />

        {/* REVIEW CARD */}
        <div
          className="
            absolute
            left-1/2
            top-28
            z-20
            flex
            w-[90%]
            max-w-[320px]
            -translate-x-1/2
            items-center
            justify-center
            gap-3
            rounded-full
            bg-white
            px-4
            py-3
            shadow-xl
            sm:max-w-[370px]
            sm:gap-4
            sm:px-7
            sm:py-4
            lg:left-10
            lg:top-36
            lg:w-auto
            lg:max-w-none
            lg:translate-x-0
          "
        >
          {/* AVATARS */}
          <div className="flex shrink-0 -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Student"
              className="
                h-10
                w-10
                rounded-full
                border-2
                border-white
                object-cover
                sm:h-12
                sm:w-12
              "
            />

            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Student"
              className="
                h-10
                w-10
                rounded-full
                border-2
                border-white
                object-cover
                sm:h-12
                sm:w-12
              "
            />

            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Student"
              className="
                h-10
                w-10
                rounded-full
                border-2
                border-white
                object-cover
                sm:h-12
                sm:w-12
              "
            />
          </div>

          {/* RATING */}
          <div className="min-w-0">
            <div
              className="
                flex
                text-sm
                text-yellow-400
                sm:text-lg
              "
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>

            <p
              className="
                mt-1
                whitespace-nowrap
                text-xs
                font-semibold
                text-gray-500
                sm:text-sm
              "
            >
              4.94 (625)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
