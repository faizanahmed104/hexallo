import Image from "next/image";
import type { BuzzingDestinationItem } from "./constant";

interface BuzzingDestinationCardProps {
  data: BuzzingDestinationItem;
}

export function BuzzingDestinationCard({ data }: BuzzingDestinationCardProps) {
  return (
    <article
      className="
        flex flex-col
        w-full max-w-[330px]
        rounded-3xl
        bg-white
        overflow-hidden
        shadow-[4.7px_4.7px_29.4px_rgba(0,0,0,0.1)]
      "
    >
      {/* Image */}
      <div className="relative w-full aspect-4/3 overflow-hidden rounded-t-[18px] rounded-b-md">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
        />
      </div>

      {/* Content */}
      <div className="px-6 pt-[18px] pb-5">
        {/* Title (Inter 600, ~13px) */}
        <h3
          className="
            font-inter
            text-[13px]
            font-semibold
            leading-[1.2]
            text-black
          "
        >
          {data.title}
        </h3>

        {/* Check-ins (Montserrat, 13px, 50% black) */}
        <p
          className="
            mt-1.5
            font-montserrat
            text-[13px]
            font-medium
            leading-[1.2]
            text-[rgba(0,0,0,0.5)]
          "
        >
          {data.checkins}
        </p>

        {/* Description (Montserrat, 13px, 50% black) */}
        <p
          className="
            mt-2
            font-montserrat
            text-[13px]
            font-medium
            leading-[1.2]
            text-[rgba(0,0,0,0.5)]
          "
        >
          {data.description}
        </p>
      </div>
    </article>
  );
}
