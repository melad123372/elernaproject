import React from "react";
import {
  FiEdit3,
  FiLayers,
  FiCode,
  FiFileText,
  FiTrendingUp,
  FiMonitor,
} from "react-icons/fi";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Creative web design",
    courses: "8 Courses",
    icon: <FiEdit3 />,
  },
  {
    title: "Finance accounting",
    courses: "10 Courses",
    icon: <FiTrendingUp />,
  },
  {
    title: "IT and software",
    courses: "5 Courses",
    icon: <FiLayers />,
  },
  {
    title: "Digital marketing",
    courses: "4 Courses",
    icon: <FiMonitor />,
  },
  {
    title: "Web development",
    courses: "8 Courses",
    icon: <FiCode />,
  },
  {
    title: "Content writing",
    courses: "3 Courses",
    icon: <FiFileText />,
  },
];

export default function Categories() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
      className="overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-20"
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-3
          lg:gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex
            flex-col
            items-center
            py-2
            text-center
            lg:items-start
            lg:py-10
            lg:pr-10
            lg:text-left
          "
        >
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-slate-800
              sm:mb-6
            "
          >
            Top Categories
          </p>

          <h1
            className="
              text-center
              text-[32px]
              font-bold
              leading-tight
              text-slate-900
              sm:text-4xl
              md:text-[44px]
              lg:text-left
              lg:text-5xl
            "
          >
            Discover leading
            <br className="hidden sm:block" />
            <span className="sm:ml-2 lg:ml-0 lg:block">categories</span>
          </h1>

          <button
            type="button"
            className="
              mt-7
              rounded-md
              bg-slate-900
              px-9
              py-3
              text-base
              font-medium
              text-white
              transition
              duration-300
              hover:bg-slate-800
              sm:mt-10
              sm:px-12
              sm:text-lg
            "
          >
            Get Started
          </button>
        </div>

        {/* CATEGORY CARDS */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:gap-5
            lg:col-span-2
            lg:grid-cols-2
            lg:gap-8
            xl:grid-cols-3
          "
        >
          {categories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="
                flex
                min-h-[190px]
                min-w-0
                flex-col
                items-center
                justify-center
                rounded-md
                border
                border-slate-200
                px-2
                py-5
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:shadow-lg
                sm:min-h-[220px]
                sm:px-4
                lg:h-60
              "
            >
              {/* ICON */}
              <div
                className="
                  mb-4
                  flex
                  h-[52px]
                  w-[52px]
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  text-2xl
                  text-slate-800
                  sm:mb-6
                  sm:h-[60px]
                  sm:w-[60px]
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  max-w-[150px]
                  break-words
                  text-sm
                  font-bold
                  leading-snug
                  text-slate-900
                  sm:max-w-[180px]
                  sm:text-lg
                  lg:text-xl
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-xs
                  text-gray-500
                  sm:mt-4
                  sm:text-base
                  lg:text-lg
                "
              >
                {item.courses}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
