import { EXCLUSIVE_CARDS } from "./constant";
import { SectionHeader } from "./SectionHeader";
import { ExclusiveCard } from "./ExclusiveCard";

export function ExclusiveSection() {
  return (
    <section className="w-full mt-10">
      {/* Header */}
      <SectionHeader title="Exclusive" />

      {/* Cards row */}
      {/* two cards side by side, 24px gap as in Figma */}
      <div className="mt-4 flex gap-6">
        {EXCLUSIVE_CARDS.map((card) => (
          <ExclusiveCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
