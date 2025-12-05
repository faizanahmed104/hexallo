import { UNMISSABLE_DATA } from "./constant";
import { SectionHeader } from "./SectionHeader";
import { UnmissableCard } from "./UnmissableCard";

export function UnmissableSection() {
  return (
    <section className="w-full mt-10">
      {/* Header */}
      <SectionHeader title="Unmissable" />

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
        {UNMISSABLE_DATA.map((item, idx) => (
          <UnmissableCard key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}
