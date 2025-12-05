import Image from "next/image";
import type { ExclusiveCardData } from "./constant";

export function ExclusiveCard({ card }: { card: ExclusiveCardData }) {
  return (
    <article
      className="
        relative
        h-[316px] w-[665px]
        overflow-hidden
        rounded-[16px]
      "
    >
      {/* background image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover"
        sizes="(max-width: 1440px) 665px, 665px"
      />

      {/* bottom overlay block from Figma */}
      <div
        className="
          absolute inset-x-0 bottom-0
          h-[111px]
          rounded-b-[15px]
          bg-[#2D3134]/50
          px-[27px] pt-[13px] pb-[17px]
          flex flex-col justify-between
        "
      >
        <div className="space-y-2.5">
          {/* title */}
          <h3
            className="
              font-sans
              text-[16px]
              font-bold
              leading-[1.2]
              text-white
            "
          >
            {card.title}
          </h3>

          {/* description */}
          <p
            className="
              font-sans
              text-[12px]
              font-medium
              leading-[1.2]
              text-white
            "
          >
            {card.description}
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="
            inline-flex items-center gap-1.5
            font-sans
            text-[12px]
            font-semibold
            leading-[1.4]
            text-white
            cursor-pointer
          "
        >
          <span>Explore Now</span>
          <span className="text-[12px]">↗</span>
        </button>
      </div>
    </article>
  );
}

