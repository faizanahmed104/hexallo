import { HOT_WEEK_DATA } from "./constant";
import { SectionHeader } from "./SectionHeader";
import { HotWeekCard } from "./HotWeekCard";

export function HotWeekSection() {
  return (
    <section className="w-full mt-10">
      {/* Header */}
      <SectionHeader title="Hot This Week" />

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
        {HOT_WEEK_DATA.map((item, idx) => (
          <HotWeekCard key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}
