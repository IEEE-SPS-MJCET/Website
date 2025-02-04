"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full dark:gradient-bg font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-8 lg:pt-14 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          SPS Club through a journey of events
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          You might wanna joint us in our next event !
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 pt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-1 md:pt-9 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-6 absolute left-5 top-1 lg:h-8 lg:w-8 lg:top-2 lg:left-5 md:left-3 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-5xl font-bold gradient-text lg:pb-2">
                {item.title}
              </h3>
            </div>

            <style jsx>{`
              .gradient-text {
                background: linear-gradient(90deg, #00FF00, #3575ff, #00FF00);
                background-size: 200% 200%; /* Makes the gradient move */
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent; /* Makes the gradient visible */
                animation: gradient-flow 3s ease-in-out infinite;
              }

              @keyframes gradient-flow {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}</style>

        <style jsx>{`
        .gradient-bg {
          background: linear-gradient(90deg, #161f16, #00172D, #014122);
          background-size: 200% 200%;
          animation: gradient-flow 15s ease infinite;
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
            `}</style>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold gradient-text dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height:400+"px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-green-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
