import { BUZZING_DESTINATION_DATA } from "./constant";
import { SectionHeader } from "./SectionHeader";
import { BuzzingDestinationCard } from "./BuzzingDestinationCard";

export function BuzzingDestinationSection() {
  return (
    <section className="w-full mt-10">
      {/* Header */}
      <SectionHeader title="Buzzing Destination" />
      {/* Cards row */}
      <div
        className="
          mt-6
          grid gap-6
          sm:grid-cols-2
          xl:grid-cols-4
          justify-items-center
        "
      >
        {BUZZING_DESTINATION_DATA.map((item, idx) => (
          <BuzzingDestinationCard key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}
