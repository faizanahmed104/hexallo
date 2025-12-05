"use client";

import { useState } from "react";
import { SectionHeader } from "../exclusive/SectionHeader";

type DealCard = {
  id: number;
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  discount: string;
  note: string;
  bgClass: string;
};

const DEAL_CARDS: DealCard[] = [
  {
    id: 1,
    titleTop: "New User",
    titleBottom: "Offer",
    subtitle: "UP TO",
    discount: "20%",
    note: "OFF",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_#FFC6A6,_#F49FD6)] border border-[#F6C86A]",
  },
  {
    id: 2,
    titleTop: "Black Friday",
    titleBottom: "Offers",
    subtitle: "UP TO",
    discount: "20%",
    note: "OFF",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_#E2E2E2,_#C5C5C5)] border border-transparent",
  },
  {
    id: 3,
    titleTop: "New User",
    titleBottom: "Offer",
    subtitle: "UP TO",
    discount: "20%",
    note: "OFF",
    bgClass:
      "bg-[radial-gradient(circle_at_top,_#FFC7BE,_#F7ABC7)] border border-transparent",
  },
];

const CARD_WIDTH = 360; // px
const CARD_GAP = 24; // px – must match Tailwind gap-[24px]

export function BlazingDealsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? DEAL_CARDS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === DEAL_CARDS.length - 1 ? 0 : prev + 1
    );
  };

  const offset = activeIndex * (CARD_WIDTH + CARD_GAP);

  return (
    <section className="mt-[105px] w-full px-4 md:px-6 xl:px-0 hidden">
      <SectionHeader title="Blazing Deals" />

      <div className="mt-[20px] flex flex-col gap-[32px] lg:flex-row">
        {/* LEFT SIDE: text + countdown (stacked like Figma) */}
        <div className="flex w-full max-w-[360px] flex-col gap-8">
          <div className="space-y-4">
            <p className="font-sans text-[13px] leading-[1.4] text-[#5B5F62]">
              Don’t miss our most exciting limited-time offers and new-user
              specials.
            </p>

            <button
              type="button"
              className="
                inline-flex items-center justify-center
                rounded-full bg-[#2D3134]
                px-6 py-2
                font-sans text-[12px] font-medium text-white
                shadow-[0_10px_24px_rgba(0,0,0,0.25)]
                w-full sm:w-auto
              "
            >
              Explore Offers Now
            </button>
          </div>

          <div className="space-y-3">
            <p className="font-sans text-[11px] font-semibold text-[#F05A5A]">
              Offer ends in…
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "Days", value: "02" },
                { label: "Hr", value: "06" },
                { label: "Mins", value: "05" },
                { label: "Sec", value: "30" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    flex h-[82px] w-[72px]
                    max-w-[88px] flex-1
                    flex-col items-center justify-center
                    rounded-[16px] bg-white text-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                  "
                >
                  <span className="font-sans text-[22px] font-semibold text-[#2D3134]">
                    {item.value}
                  </span>
                  <span className="mt-[4px] font-sans text-[11px] text-[#5B5F62]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: horizontal slider like Figma */}
        <div className="relative flex-1 overflow-hidden">
          {/* track */}
          <div
            className="
              flex
              gap-[24px]
              transition-transform
              duration-500
              ease-out
            "
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {DEAL_CARDS.map((card, idx) => (
              <article
                key={card.id}
                className={`
                  relative
                  flex h-[381px] w-[${CARD_WIDTH}px]
                  flex-col items-center justify-center
                  rounded-[24px]
                  ${card.bgClass}
                  shadow-[0_18px_60px_rgba(0,0,0,0.16)]
                  shrink-0
                `}
              >
                {/* left arrow on first visible card (Figma) */}
                {idx === activeIndex && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="
                      absolute left-[18px] top-1/2 -translate-y-1/2
                      flex h-[32px] w-[32px] items-center justify-center
                      rounded-full bg-white
                      shadow-[0_8px_18px_rgba(0,0,0,0.18)]
                    "
                  >
                    <span className="text-[18px] text-[#2D3134]">‹</span>
                  </button>
                )}

                {/* right arrow on last side of center card */}
                {idx === activeIndex && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="
                      absolute right-[18px] top-1/2 -translate-y-1/2
                      flex h-[32px] w-[32px] items-center justify-center
                      rounded-full bg-white
                      shadow-[0_8px_18px_rgba(0,0,0,0.18)]
                    "
                  >
                    <span className="text-[18px] text-[#2D3134]">›</span>
                  </button>
                )}

                <div className="px-4 text-center">
                  <h3 className="font-sans text-[22px] font-semibold leading-[1.3] text-[#2D3134]">
                    {card.titleTop}
                    <br />
                    {card.titleBottom}
                  </h3>
                  <div className="mt-6 space-y-[4px]">
                    <p className="font-sans text-[11px] tracking-[0.16em] text-[#2D3134]">
                      {card.subtitle}
                    </p>
                    <p className="font-sans text-[32px] font-semibold text-[#2D3134]">
                      {card.discount}
                    </p>
                    <p className="font-sans text-[11px] tracking-[0.16em] text-[#2D3134]">
                      {card.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
