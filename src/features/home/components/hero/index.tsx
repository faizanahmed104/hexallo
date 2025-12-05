"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  id: number;
  image: string;
};

const SLIDES: Slide[] = [
  { id: 1, image: "/images/home/hero/hero-1.jpg" },
  { id: 2, image: "/images/home/hero/hero-2.jpg" },
  { id: 3, image: "/images/home/hero/hero-3.jpg" },
  { id: 4, image: "/images/home/hero/hero-3.jpg" },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % SLIDES.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mt-7 flex justify-center max-[640px]:px-4">
      <div className="w-full max-w-[1356px]">
        {/* slider container */}
        <div className="relative h-[570px] max-[640px]:h-[420px] max-[480px]:h-[360px] overflow-hidden rounded-xl shadow-card">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* background image */}
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt="Hero slide"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* gradient overlay + content */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-[rgba(127, 122, 122, 0.3)] px-10 max-[480px]:px-4 text-center text-white">
                {/* H1 */}
                <h1
                  className="
                    pointer-events-auto 
                    font-inter 
                    text-[36px] 
                    font-bold 
                    leading-[1.4] 
                    max-w-[590px]
                    max-[640px]:text-[28px]
                    max-[640px]:leading-[1.3]
                    max-[480px]:text-[24px]
                  "
                >
                  Discover, Book & Enjoy What&apos;s Happening Around You
                </h1>

                {/* Subtitle */}
                <p
                  className="
                    pointer-events-auto 
                    mt-3 
                    font-inter 
                    text-[14px] 
                    font-semibold 
                    leading-[1.4] 
                    max-w-[590px]
                    max-[480px]:text-[12px]
                  "
                >
                  From local events to world-famous experiences — all in one
                  place.
                </p>

                {/* Search bar (pixel tuned) */}
                <div
                  className="
                    pointer-events-auto 
                    mt-6 
                    flex 
                    w-full 
                    max-w-[613px] 
                    items-center 
                    overflow-hidden 
                    pt-[1.5px] 
                    pr-1.5 
                    pl-0.5 
                    pb-[1.5px] 
                    rounded-xl 
                    border-[1.75px] 
                    border-[#E3E3E1] 
                    bg-white
                    max-[640px]:flex-col
                    max-[640px]:items-stretch
                    max-[640px]:gap-2
                    max-[640px]:p-3
                  "
                >
                  {/* left input */}
                  <input
                    placeholder="Search any event"
                    className="
                      h-[37px]
                      flex-1 
                      px-4 
                      font-inter 
                      text-[12px] 
                      leading-[1.4]
                      text-[#6A6A6A]
                      placeholder:text-[#6A6A6A]
                      outline-none
                      max-[640px]:w-full
                    "
                  />

                  {/* Where */}
                  <div
                    className="
                      flex 
                      h-[37px] 
                      min-w-[150px] 
                      items-center 
                      font-inter 
                      text-[14px] 
                      leading-[1.4] 
                      text-[#131314]
                      max-[640px]:min-w-full
                      max-[640px]:justify-between
                      max-[640px]:px-2
                    "
                  >
                    Where
                  </div>

                  {/* When */}
                  <div
                    className="
                      flex 
                      h-[37px] 
                      min-w-[150px] 
                      items-center 
                      font-inter 
                      text-[14px] 
                      leading-[1.4] 
                      text-[#131314]
                      max-[640px]:min-w-full
                      max-[640px]:justify-between
                      max-[640px]:px-2
                    "
                  >
                    When
                  </div>

                  {/* Search button */}
                  <button
                    type="button"
                    className="
                      mr-[3px]
                      flex
                      h-[30px]
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-navDark
                      px-2
                      text-white
                      cursor-pointer
                      max-[640px]:w-full
                      max-[640px]:h-[38px]
                      max-[640px]:mr-0
                    "
                  >
                    <Image
                      src="/images/home/search.svg"
                      alt="Search"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* slider dots */}
        <div className="mt-3 flex justify-center gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${
                index === activeIndex ? "bg-brand-navDark" : "bg-[#D4D4D4]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
