import { SpotlightCard } from "./SpotlightCard";
import { SPOTLIGHT_DATA } from "./constant";
import { SectionHeader } from "../exclusive/SectionHeader";

export function SpotlightSection() {
  return (
    <section className="mt-[72px] w-full">
      <SectionHeader title="Tonight’s Spotlight" />

      <div
        className="
          mt-6
          grid gap-6
          sm:grid-cols-2
          xl:grid-cols-4
          justify-items-center
        "
      >
        {SPOTLIGHT_DATA.map((item) => (
          <SpotlightCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
