import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import userImg from "../../assets/1- Home One imgs/TestimonialAuthorImage.avif";
import userImg2 from "../../assets/1- Home One imgs/TestimonialAuthorImage-2.avif";

export const testimonials = [
  {
    image: userImg,
    name: "Linda Grady",
    role: "CO-ASSISTANT MANAGER",
    text: `Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
    tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus
    venenatis donec mattis. Morbi placerat eleifend malesuada sed semper
    quis.`,
  },
  {
    image: userImg2,
    name: "John Smith",
    role: "WEB DEVELOPER",
    text: `Amazing learning experience with professional teachers.
    Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis
    tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut
    nibh montes ante gravida velit.`,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="overflow-hidden bg-[#183339] py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p
              className="
                mb-3
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-gray-400
                sm:mb-4
                sm:text-sm
              "
            >
              OUR TESTIMONIALS
            </p>

            <h1
              className="
                text-[30px]
                font-semibold
                leading-[1.2]
                sm:text-4xl
                md:text-5xl
              "
            >
              Trusted by our
              <br className="hidden sm:block" />
              <span className="sm:ml-2 lg:ml-0 lg:block">
                successful students
              </span>
            </h1>
          </motion.div>

          {/* NUMBERS */}
          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:gap-5
              lg:flex
              lg:items-center
              lg:justify-end
              lg:gap-10
            "
          >
            {/* 70M */}
            <div
              className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-3
                py-5
                text-center
                sm:px-5
                sm:py-6
                lg:flex-row
                lg:gap-6
                lg:border-0
                lg:bg-transparent
                lg:px-0
                lg:py-0
                lg:text-left
              "
            >
              <h2
                className="
                  text-3xl
                  font-bold
                  sm:text-4xl
                  lg:border-r
                  lg:border-gray-600
                  lg:pr-6
                  lg:text-5xl
                "
              >
                70M
              </h2>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  leading-relaxed
                  tracking-wide
                  text-gray-400
                  sm:text-xs
                  lg:mt-0
                  lg:text-sm
                  lg:leading-snug
                "
              >
                Successful
                <br />
                Students
              </p>
            </div>

            {/* 25K */}
            <div
              className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-3
                py-5
                text-center
                sm:px-5
                sm:py-6
                lg:flex-row
                lg:gap-6
                lg:border-0
                lg:bg-transparent
                lg:px-0
                lg:py-0
                lg:text-left
              "
            >
              <h2
                className="
                  text-3xl
                  font-bold
                  sm:text-4xl
                  lg:border-r
                  lg:border-gray-600
                  lg:pr-6
                  lg:text-5xl
                "
              >
                25K
              </h2>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  leading-relaxed
                  tracking-wide
                  text-gray-400
                  sm:text-xs
                  lg:mt-0
                  lg:text-sm
                  lg:leading-snug
                "
              >
                Global Job
                <br />
                Placements
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            items-center
            gap-8
            sm:mt-12
            lg:mt-14
            lg:grid-cols-2
            lg:gap-10
          "
        >
          {/* IMAGE */}
          <div className="min-w-0 overflow-hidden rounded-xl">
            <motion.img
              key={testimonials[index].image}
              src={testimonials[index].image}
              alt={testimonials[index].name}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="
                h-[280px]
                w-full
                rounded-xl
                object-cover
                object-center
                sm:h-[360px]
                lg:h-[400px]
              "
            />
          </div>

          {/* TESTIMONIAL CONTENT */}
          <motion.div
            key={testimonials[index].name}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0 text-center lg:text-left"
          >
            <span
              className="
                block
                text-5xl
                font-bold
                leading-none
                text-[#ffb800]
                sm:text-6xl
              "
            >
              “
            </span>

            <p
              className="
                -mt-3
                break-words
                text-base
                leading-7
                text-gray-300
                sm:text-lg
                sm:leading-8
                lg:mb-10
                lg:text-xl
                lg:leading-relaxed
              "
            >
              {testimonials[index].text}
            </p>

            <div className="mt-7 sm:mt-8 lg:mt-0">
              <h2
                className="
                  text-xl
                  font-medium
                  sm:text-2xl
                "
              >
                {testimonials[index].name}
              </h2>

              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  tracking-wider
                  text-gray-400
                  sm:text-sm
                "
              >
                {testimonials[index].role}
              </p>
            </div>

            {/* NAVIGATION BUTTONS */}
            <div
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-4
                sm:mt-10
                sm:gap-5
                lg:mt-12
                lg:justify-start
              "
            >
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-500
                  text-sm
                  transition
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  sm:h-12
                  sm:w-12
                "
              >
                <FaArrowLeft />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-500
                  text-sm
                  transition
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  sm:h-12
                  sm:w-12
                "
              >
                <FaArrowRight />
              </button>
            </div>

            {/* MOBILE SLIDE INDICATORS */}
            <div className="mt-6 flex justify-center gap-2 lg:hidden">
              {testimonials.map((testimonial, itemIndex) => (
                <button
                  type="button"
                  key={testimonial.name}
                  onClick={() => setIndex(itemIndex)}
                  aria-label={`Show testimonial ${itemIndex + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === itemIndex
                        ? "w-7 bg-[#ffb800]"
                        : "w-2 bg-gray-500"
                    }
                  `}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
