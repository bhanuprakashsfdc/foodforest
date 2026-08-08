import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { HarvestCalendar } from "@/components/HarvestCalendar";
import { Note } from "@/components/Note";
import { harvestMonths } from "@/lib/data/harvest";

export const metadata: Metadata = {
  title: "Harvest Calendar",
  description:
    "Month-by-month table of what's ready to pick — fruit, vegetables, greens, pulses and roots, with grains harvested twice a year.",
};

export default function HarvestCalendarPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Section 04"
        title="Harvest Calendar"
        dek="Pick a month to see what's ready to pick. Coconut, Drumstick, Curry Leaf, Lemon/Bathayi, Betel Leaf and mature Black Pepper crop year-round and aren't repeated in every tab."
      />

      <Section>
        <HarvestCalendar months={harvestMonths} />
        <Note>
          <strong>Grains:</strong> Ragi, Jowar and Bajra are harvested twice a year — around{" "}
          <strong>Feb–Mar</strong> (rabi, sown October) and <strong>Sep–Oct</strong> (kharif,
          sown June).
        </Note>
      </Section>
    </>
  );
}
