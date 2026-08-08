import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/Badge";
import { Cta } from "@/components/Cta";
import {
  badgeLevel,
  bedAreas,
  fruitTrees,
  herbsSpices,
  plantCounts,
  rootsGreensPulses,
  trialCards,
  vegetables,
  type CropEntry,
} from "@/lib/data/crops";

export const metadata: Metadata = {
  title: "Crop Directory",
  description:
    "Every one of the 75 requested crops scored 1–10 for how well it performs in Tirupati's hot semi-arid climate — nothing removed, six flagged honestly as trial-only.",
};

function toRows(entries: CropEntry[]): ReactNode[][] {
  return entries.map((entry) => [
    entry.crop,
    <Badge key="suit" level={badgeLevel(entry.suitability)}>
      {entry.suitability}
    </Badge>,
    entry.water,
    entry.heat,
    entry.shade,
    entry.performance,
    ...(entry.note ? [entry.note] : []),
  ]);
}

const cropHeaders = ["Crop", "Suitability", "Water", "Heat tol.", "Shade tol.", "Performance"];
const fruitHeaders = [...cropHeaders, "Expected yield / plant / yr"];

const countHeaders = ["Crop", "Count", "Crop", "Count", "Crop", "Count"];
const countRows: ReactNode[][] = [];
for (let i = 0; i < plantCounts.length; i += 3) {
  const group = plantCounts.slice(i, i + 3);
  const cells: ReactNode[] = [];
  for (let g = 0; g < 3; g += 1) {
    const pair = group[g];
    cells.push(pair ? pair.crop : "", pair ? pair.count : "");
  }
  countRows.push(cells);
}

export default function CropDirectoryPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Section 03"
        title="Crop Directory & Climate Suitability"
        dek="Every one of the 75 requested crops, scored 1–10 for how well it actually performs in Tirupati's hot semi-arid climate — nothing removed, six flagged honestly as trial-only."
      />

      <Section eyebrow="Fruit trees" title="34 crops">
        <DataTable
          caption="Fruit trees, suitability scores, and expected yield"
          headers={fruitHeaders}
          rows={toRows(fruitTrees)}
          wrapCells={[6]}
        />
      </Section>

      <Section alt eyebrow="Herbs, spices & utility" title="6 crops">
        <DataTable
          caption="Herbs, spices and utility crops with suitability scores"
          headers={[...cropHeaders, "Note"]}
          rows={toRows(herbsSpices)}
          wrapCells={[6]}
        />
      </Section>

      <Section eyebrow="Vegetables" title="12 crops">
        <DataTable
          caption="Vegetables with suitability scores"
          headers={cropHeaders}
          rows={toRows(vegetables)}
        />
      </Section>

      <Section alt eyebrow="Roots, greens, pulses, millets & oilseed" title="23 crops">
        <DataTable
          caption="Roots, greens, pulses, millets and oilseed with suitability scores"
          headers={cropHeaders}
          rows={toRows(rootsGreensPulses)}
        />
      </Section>

      <Section eyebrow="Reading the trial-zone crops honestly" title="Six crops kept, none hidden">
        <div className="grid cols-2">
          {trialCards.map((card) => (
            <Card key={card.title} title={card.title}>
              <p>
                {card.body}
                {card.substitute && (
                  <>
                    {" "}
                    <strong>Substitute:</strong> {card.substitute}
                  </>
                )}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section alt eyebrow="Plant counts" title="Sized for a family of five">
        <DataTable
          caption="Plant counts for perennial trees, shrubs and vines"
          headers={countHeaders}
          rows={countRows}
        />
        <p style={{ marginTop: 16, color: "var(--paper-dim)" }}>
          Total: <strong style={{ color: "var(--paper)" }}>~410 trees, shrubs and perennial vines</strong>.
          Annual crops (vegetables, grains, pulses, roots, greens) are sized by bed area rather
          than plant count, since they&apos;re broadcast or row-planted — see the table below.
        </p>
        <DataTable
          caption="Annual crop bed areas by category"
          headers={["Category", "Bed area", "Notes"]}
          rows={bedAreas.map((row) => [row.category, row.area, row.note])}
          wrapCells={[2]}
        />
        <Cta href="/harvest-calendar">See when it all ripens →</Cta>
      </Section>
    </>
  );
}
