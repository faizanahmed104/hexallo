import Image from "next/image";
import { SectionHeader } from "../exclusive/SectionHeader";

type GlobalHighlight = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const GLOBAL_HIGHLIGHTS: GlobalHighlight[] = [
  {
    id: 1,
    image: "/images/home/cards/highlight-1.jpg",
    title: "The Secret Garden Café",
    description:
      "Acacia-hidden courtyard serving organic brunch & live music evenings.",
  },
  {
    id: 2,
    image: "/images/home/cards/highlight-2.jpg",
    title: "Napa’s Underground Jazz",
    description: "Vintage cellar turned into an intimate live stage.",
  },
  {
    id: 3,
    image: "/images/home/cards/highlight-3.jpg",
    title: "Sky Hammock Trail",
    description:
      "Bali swing over the valley — a serene thrill far from crowds.",
  },
  {
    id: 4,
    image: "/images/home/cards/highlight-4.jpg",
    title: "Sky Hammock Trail",
    description:
      "Bali swing over the valley — a serene thrill far from crowds.",
  },
];

function GlobalHighlightCard({ highlight }: { highlight: GlobalHighlight }) {
  return (
    <article
      className="
        relative
        w-full
        h-[260px] sm:h-[300px] lg:h-[361px]
        overflow-hidden
        rounded-[18px]
        shadow-[0_18px_60px_rgba(0,0,0,0.18)]
      "
    >
      {/* background image */}
      <Image
        src={highlight.image}
        alt={highlight.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1280px) 50vw,
               25vw"
      />

      {/* subtle global gradient from bottom to top (to help text contrast) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

      {/* bottom overlay panel behind text */}
      <div
        className="
          absolute inset-x-0 bottom-0
          rounded-b-[16px]
          bg-black/40
          px-[14px] sm:px-[16px] lg:px-[18px]
          pb-[14px] sm:pb-[16px] lg:pb-[18px]
          pt-[16px] sm:pt-[18px] lg:pt-[20px]
        "
      >
        <h3
          className="
            font-sans
            text-[12px] sm:text-[13px]
            font-semibold
            leading-[1.3]
            text-white
          "
        >
          {highlight.title}
        </h3>
        <p
          className="
            mt-[6px]
            max-w-[260px]
            font-sans
            text-[11px]
            leading-[1.4]
            text-white/85
          "
        >
          {highlight.description}
        </p>
      </div>
    </article>
  );
}

export function GlobalHighlightsSection() {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-[105px] w-full">
      <SectionHeader title="Global Highlights" />

      <div
        className="
          mt-6 lg:mt-[24px]
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4 sm:gap-5 lg:gap-[24px]
        "
      >
        {GLOBAL_HIGHLIGHTS.map((highlight) => (
          <GlobalHighlightCard key={highlight.id} highlight={highlight} />
        ))}
      </div>
    </section>
  );
}
