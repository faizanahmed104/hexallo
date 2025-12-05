import Image from "next/image";
import { SectionHeader } from "../exclusive/SectionHeader";

type ExploreCardItem = {
  id: number;
  image: string;
  rating: string;
  title: string; // e.g. "Events"
  label: string; // e.g. "Explore"
  layoutClass: string; // grid spans
};

const EXPLORE_GHANA: ExploreCardItem[] = [
  // Row 1
  {
    id: 1,
    image: "/images/home/cards/ghana-1.jpg",
    rating: "3.5",
    title: "Events",
    label: "Explore",
    layoutClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 2,
    image: "/images/home/cards/ghana-2.png",
    rating: "3.5",
    title: "Activities",
    label: "Explore",
    layoutClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    image: "/images/home/cards/ghana-3.jpg",
    rating: "3.5",
    title: "Restaurants",
    label: "Explore",
    layoutClass: "md:col-span-1 md:row-span-1",
  },

  // Row 2 – wide Tours card + Services
  {
    id: 4,
    image: "/images/home/cards/ghana-4.png",
    rating: "3.5",
    title: "Tours",
    label: "Explore",
    layoutClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    image: "/images/home/cards/ghana-5.png",
    rating: "3.5",
    title: "Services",
    label: "Explore",
    layoutClass: "md:col-span-1 md:row-span-1",
  },

  // Row 3 – three equal cards
  {
    id: 6,
    image: "/images/home/cards/ghana-6.png",
    rating: "3.5",
    title: "Destinations",
    label: "Explore",
    layoutClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    image: "/images/home/cards/ghana-7.jpg",
    rating: "3.5",
    title: "Places",
    label: "Explore",
    layoutClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    image: "/images/home/cards/ghana-8.jpg",
    rating: "3.5",
    title: "Accommodations",
    label: "Explore",
    layoutClass: "md:col-span-1 md:row-span-1",
  },
];

function ExploreCard({ item }: { item: ExploreCardItem }) {
  return (
    <article
      className={`
        relative
        overflow-hidden
        rounded-[18px]
        shadow-[0_18px_60px_rgba(0,0,0,0.16)]
        h-[190px] sm:h-[210px] lg:h-[230px]
        ${item.layoutClass}
      `}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1280px) 50vw,
               33vw"
      />

      {/* rating pill */}
      <div
        className="
          absolute left-[14px] top-[14px]
          rounded-full bg-white/95
          px-[10px] py-[3px]
          text-[10px] font-semibold text-[#2D3134]
          shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        "
      >
        {item.rating}
      </div>

      {/* bottom gradient + text overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent px-[16px] pb-[14px] pt-[32px]">
        <p className="text-[11px] font-medium text-white/80">{item.title}</p>
        <p className="mt-[2px] text-[10px] font-normal text-white/70">
          {item.label}
        </p>
      </div>
    </article>
  );
}

export function ExploreGhanaSection() {
  return (
    <section className="mt-[105px] w-full rounded-[24px] bg-surface px-[28px] pt-[24px] pb-[28px]">
      {/* heading */}
      <SectionHeader title="Explore Ghana" />

      {/* grid */}
      <div
        className="
          mt-[20px]
          grid
          grid-cols-1
          gap-[16px]
          md:grid-cols-3
          md:auto-rows-[230px]
        "
      >
        {EXPLORE_GHANA.map((item) => (
          <ExploreCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
