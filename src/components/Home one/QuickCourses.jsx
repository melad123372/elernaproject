import React from "react";
import { FaPlus, FaMicrophone, FaVideo, FaPhone } from "react-icons/fa";

import quimg from "../../assets/1- Home One imgs/WomanUsingLaptop.webp";
import devimg from "../../assets/1- Home One imgs/HomeOneVideo-poster.jpg";

export default function QuickCourses() {
  return (
    <section className="overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-10">
          {/* ================= LEFT CARD ================= */}
          <div
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-xl
              bg-[#edf5f7]
              px-5
              pt-9
              sm:px-8
              sm:pt-10
              lg:h-[300px]
              lg:px-10
              lg:py-0
            "
          >
            {/* Left content */}
            <div
              className="
                relative
                z-20
                flex
                flex-col
                items-center
                text-center
                lg:h-full
                lg:max-w-[285px]
                lg:items-start
                lg:justify-center
                lg:text-left
              "
            >
              <h2
                className="
                  text-[26px]
                  font-semibold
                  leading-[1.3]
                  text-[#102c31]
                  sm:text-3xl
                "
              >
                Quick access to the popular courses
              </h2>

              <button
                type="button"
                className="
                  mt-6
                  rounded-md
                  bg-[#ffb800]
                  px-9
                  py-3.5
                  text-base
                  font-medium
                  text-[#102c31]
                  transition
                  duration-300
                  hover:bg-[#e9a700]
                  sm:mt-8
                  sm:px-11
                  sm:py-4
                  sm:text-lg
                  lg:mt-9
                "
              >
                View Courses
              </button>
            </div>

            {/* Left image */}
            <div
              className="
                relative
                mx-auto
                mt-8
                h-[280px]
                w-full
                max-w-[390px]
                sm:h-[330px]
                lg:absolute
                lg:bottom-0
                lg:right-0
                lg:mt-0
                lg:h-full
                lg:w-[58%]
              "
            >
              <img
                src={quimg}
                alt="Student using laptop"
                className="
                  h-full
                  w-full
                  object-contain
                  object-bottom
                  lg:object-cover
                "
              />
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-xl
              bg-[#f3f1e8]
              px-5
              pb-10
              pt-10
              sm:px-8
              sm:pb-12
              sm:pt-12
              lg:h-[300px]
              lg:px-10
              lg:py-0
            "
          >
            {/* Right content */}
            <div
              className="
                relative
                z-20
                flex
                flex-col
                items-center
                text-center
                lg:h-full
                lg:max-w-[240px]
                lg:items-start
                lg:justify-center
                lg:text-left
              "
            >
              <h2
                className="
                  max-w-[360px]
                  text-[27px]
                  font-semibold
                  leading-[1.3]
                  text-[#102c31]
                  sm:text-3xl
                "
              >
                Develop your skills online!
              </h2>

              <button
                type="button"
                className="
                  mt-7
                  rounded-md
                  bg-[#102c31]
                  px-9
                  py-4
                  text-base
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:bg-[#193d42]
                  sm:mt-8
                  sm:px-10
                  sm:text-lg
                  lg:mt-9
                  lg:px-11
                "
              >
                Apply Now
              </button>
            </div>

            {/* Video section */}
            <div
              className="
                relative
                mx-auto
                mt-11
                w-full
                max-w-[380px]
                sm:mt-12
                sm:max-w-[430px]
                lg:absolute
                lg:right-5
                lg:top-5
                lg:mt-0
                lg:h-[250px]
                lg:w-[300px]
              "
            >
              {/* Video image */}
              <div
                className="
                  relative
                  aspect-[1.3/1]
                  w-full
                  overflow-hidden
                  rounded-[22px]
                  lg:h-full
                  lg:aspect-auto
                  lg:rounded-3xl
                "
              >
                <img
                  src={devimg}
                  alt="Teacher in an online class"
                  className="h-full w-full object-cover"
                />

                {/* Controls */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-1/2
                    flex
                    w-full
                    -translate-x-1/2
                    items-center
                    justify-center
                    gap-2
                    px-3
                    sm:bottom-5
                    sm:gap-3
                    lg:bottom-3
                  "
                >
                  <button
                    type="button"
                    aria-label="Add participant"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#00d875]
                      text-base
                      text-white
                      shadow-lg
                      transition
                      duration-300
                      hover:scale-105
                      sm:h-12
                      sm:w-12
                      sm:text-lg
                    "
                  >
                    <FaPlus />
                  </button>

                  <button
                    type="button"
                    aria-label="Microphone"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-base
                      text-gray-500
                      shadow-lg
                      transition
                      duration-300
                      hover:scale-105
                      sm:h-12
                      sm:w-12
                      sm:text-lg
                    "
                  >
                    <FaMicrophone />
                  </button>

                  <button
                    type="button"
                    aria-label="Video"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-base
                      text-gray-500
                      shadow-lg
                      transition
                      duration-300
                      hover:scale-105
                      sm:h-12
                      sm:w-12
                      sm:text-lg
                    "
                  >
                    <FaVideo />
                  </button>

                  <button
                    type="button"
                    aria-label="End call"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e6003d]
                      text-base
                      text-white
                      shadow-lg
                      transition
                      duration-300
                      hover:scale-105
                      sm:h-12
                      sm:w-12
                      sm:text-lg
                    "
                  >
                    <FaPhone className="rotate-[135deg]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
