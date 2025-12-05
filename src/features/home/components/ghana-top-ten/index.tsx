import { GHANA_TOP_TEN_DATA } from "./constant";
import { SectionHeader } from "./SectionHeader";
import { GhanaTopTenCard } from "./GhanaTopTenCard";

export function GhanaTopTenSection() {
  return (
    <section className="w-full mt-10">
      {/* Header */}
      <SectionHeader title="Ghana's Top Ten" />
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
        {GHANA_TOP_TEN_DATA.map((item, idx) => (
          <GhanaTopTenCard key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}
