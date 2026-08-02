import React from "react";

import perimg2 from "../../assets/2- About One imgs/HomeOneVideoposter.jpg";
import perimg1 from "../../assets/2- About One imgs/GirlImageUsingLaptop.webp";

export default function App() {
  return (
    <section
      className="
        mx-auto
        flex
        max-w-[1250px]
        flex-col
        items-center
        gap-12
        overflow-hidden
        px-4
        py-14
        sm:px-6
        md:px-8
        lg:flex-row
        lg:gap-20
        lg:px-10
        lg:py-20
      "
    >
      {/* RIGHT CONTENT */}
      {/* Mobile: first */}
      {/* Desktop: right side */}
      <div className="order-1 w-full lg:order-2 lg:w-1/2">
        <p
          className="
            text-sm
            font-bold
            tracking-wider
            text-[#102c33]
            sm:text-base
            lg:text-lg
          "
        >
          WHAT WE OFFER
        </p>

        <h1
          className="
            mt-4
            text-3xl
            font-bold
            leading-tight
            text-[#102c33]
            sm:text-4xl
            lg:mt-5
            lg:text-4xl
          "
        >
          Personalized learning for
          <br className="hidden sm:block" />
          your ambitions
        </h1>

        <p
          className="
            mt-5
            text-base
            leading-7
            text-gray-500
            sm:text-lg
            sm:leading-relaxed
            lg:mt-6
            lg:text-xl
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
            gap-4
            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-5
            lg:mt-8
          "
        >
          <ul
            className="
              list-disc
              space-y-4
              pl-5
              text-base
              font-semibold
              text-[#102c33]
              sm:text-lg
            "
          >
            <li>Skill-based instruction</li>
            <li>Global certification</li>
          </ul>

          <ul
            className="
              list-disc
              space-y-4
              pl-5
              text-base
              font-semibold
              text-[#102c33]
              sm:text-lg
            "
          >
            <li>Analytics and insights</li>
            <li>Customizable courses</li>
          </ul>
        </div>

        {/* CTA */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-start
            justify-between
            gap-6
            rounded-md
            bg-[#eef6f8]
            p-5
            sm:mt-10
            sm:p-7
            md:flex-row
            md:items-center
            lg:p-6
          "
        >
          <div>
            <h3
              className="
                text-xl
                font-bold
                text-[#102c33]
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
              Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
            </p>
          </div>

          <button
            type="button"
            className="
              w-full
              shrink-0
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
              sm:text-lg
              md:w-auto
              lg:px-10
              lg:py-4
            "
          >
            Get Started
          </button>
        </div>
      </div>

      {/* LEFT IMAGES */}
      {/* Mobile: below content */}
      {/* Desktop: left side */}
      <div
        className="
          order-2
          relative
          h-[390px]
          w-full
          max-w-[560px]
          sm:h-[500px]
          lg:order-1
          lg:h-[570px]
          lg:w-1/2
        "
      >
        {/* YELLOW CIRCLE */}
        <div
          className="
            absolute
            left-[15%]
            top-0
            h-36
            w-36
            rounded-full
            bg-yellow-400
            sm:left-20
            sm:h-52
            sm:w-52
            lg:h-56
            lg:w-56
          "
        />

        {/* OUTLINE CIRCLE */}
        <div
          className="
            absolute
            -bottom-20
            -left-28
            h-[330px]
            w-[330px]
            rounded-full
            border-4
            border-gray-100
            sm:-bottom-24
            sm:-left-20
            sm:h-[430px]
            sm:w-[430px]
            lg:h-[460px]
            lg:w-[460px]
          "
        />

        {/* SMALL IMAGE */}
        <div
          className="
            absolute
            left-0
            top-24
            z-20
            h-[230px]
            w-[44%]
            overflow-hidden
            sm:top-32
            sm:h-[320px]
            sm:w-[260px]
          "
        >
          <img
            src={perimg1}
            className="h-full w-full object-cover"
            alt="Teacher using laptop"
          />
        </div>

        {/* MAIN IMAGE */}
        <div
          className="
            absolute
            right-0
            top-8
            z-10
            h-[350px]
            w-[68%]
            overflow-hidden
            rounded-md
            sm:h-[460px]
            sm:w-[68%]
            lg:h-[550px]
            lg:w-[400px]
          "
        >
          <img
            src={perimg2}
            className="h-full w-full object-cover"
            alt="Online learning student"
          />
        </div>
      </div>
    </section>
  );
}
