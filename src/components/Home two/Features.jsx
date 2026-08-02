import React from "react";
import { motion } from "framer-motion";

import leimg from "../../assets/11- Home Two Imgs/WomanImage.webp";
import Timg7 from "../../assets/11- Home Two Imgs/Videoposter.jpg";

const stats = [
  {
    value: "1.5K",
    label: "FINISH SESSIONS",
  },
  {
    value: "7.8K",
    label: "ENROLLED",
  },
  {
    value: "100%",
    label: "JOB PLACEMENT",
  },
];

const WhyWeAreSection = () => {
  return (
    <section className="overflow-hidden bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-14"
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[4px]
              text-gray-500
              sm:text-sm
            "
          >
            Why we are
          </p>

          <h2
            className="
              mx-auto
              mt-3
              max-w-4xl
              text-[30px]
              font-bold
              leading-tight
              text-gray-900
              sm:text-4xl
              md:text-5xl
            "
          >
            World-class learning from anywhere
          </h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="
              flex
              w-full
              flex-col
              gap-7
              sm:gap-8

              lg:flex-row
              lg:items-end
              lg:justify-center
              lg:gap-5
            "
          >
            {/* FIRST IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="
                aspect-[16/10]
                w-full
                overflow-hidden
                rounded-xl
                sm:rounded-2xl

                lg:mb-20
                lg:aspect-auto
                lg:h-64
                lg:w-48
              "
            >
              <img
                src={Timg7}
                alt="Online learning session"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </motion.div>

            {/* SECOND IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                aspect-[4/5]
                w-full
                overflow-hidden
                rounded-xl
                sm:rounded-2xl

                lg:aspect-auto
                lg:h-[450px]
                lg:w-80
              "
            >
              <img
                src={leimg}
                alt="Woman learning online"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-7">
            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="
                text-center
                text-base
                leading-7
                text-gray-500
                sm:text-lg
                sm:leading-8
                lg:text-left
              "
            >
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </motion.p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-2 sm:gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="
                    min-w-0
                    rounded-lg
                    bg-gray-50
                    px-1
                    py-5
                    text-center
                    sm:px-3
                    sm:py-6
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-gray-900
                      sm:text-3xl
                      md:text-4xl
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      font-medium
                      leading-4
                      text-gray-500
                      sm:text-xs
                      md:text-sm
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA BOX */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="
                flex
                flex-col
                items-start
                justify-between
                gap-5
                rounded-xl
                bg-blue-50
                p-5
                sm:p-6
                md:flex-row
                md:items-center
                md:p-8
              "
            >
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Still have questions?
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <button
                type="button"
                className="
                  w-full
                  rounded-lg
                  bg-gray-900
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:bg-gray-800
                  md:w-auto
                "
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreSection;
