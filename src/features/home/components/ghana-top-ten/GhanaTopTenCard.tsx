import Image from "next/image";
import type { GhanaTopTenItem } from "./constant";

interface GhanaTopTenCardProps {
  data: GhanaTopTenItem;
}

export function GhanaTopTenCard({ data }: GhanaTopTenCardProps) {
  return (
    <article
      className="
        flex flex-col
        w-full
        max-w-[333px]
        sm:w-[260px]
        md:w-[333px]
        h-auto
        md:h-[383px]
        rounded-[16px]
        border-2 border-white
        bg-[#FAF8ED]
        pt-2 pr-[7px] pb-[11px] pl-[7px]
        shadow-[0_24px_90px_0_rgba(192,188,161,0.22)]
      "
    >
      {/* Image */}
      <div className="relative w-full h-[200px] sm:h-[210px] md:h-[222px] overflow-hidden rounded-[14px]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1440px) 333px, 333px"
        />
      </div>

      {/* Content */}
      <div className="mt-3.5 flex flex-1 flex-col">
        {/* Category badge */}
        <div className="inline-flex items-center">
          <span
            className="
              font-sans
              text-[11px]
              sm:text-[10px]
              font-normal
              leading-[1.2]
              text-black
              rounded-lg
              bg-[#F7E4B6]
              px-[9px] py-[5px]
            "
          >
            {data.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            mt-2.5
            font-sans
            text-[12px]
            sm:text-[11px]
            font-semibold
            leading-6
            text-[#2D3134]
          "
        >
          {data.title}
        </h3>

        {/* Time */}
        <p
          className="
            mt-1.5
            font-sans
            text-[11.9px]
            sm:text-[11px]
            font-normal
            leading-[1.2]
            text-[#5B5F62]
          "
        >
          {data.time}
        </p>

        {/* Location */}
        <p
          className="
            mt-0.5
            font-sans
            text-[11.9px]
            sm:text-[11px]
            font-normal
            leading-[1.2]
            text-[#5B5F62]
          "
        >
          {data.location}
        </p>

        {/* Price */}
        <p
          className="
            mt-1.5
            font-sans
            text-[11.9px]
            sm:text-[11px]
            font-normal
            leading-[1.2]
            text-[#5B5F62]
          "
        >
          {data.priceLabel}{" "}
          <span className="font-semibold text-black">{data.priceValue}</span>
        </p>
      </div>
    </article>
  );
}
