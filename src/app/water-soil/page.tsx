import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Stat } from "@/components/Stat";
import { Card } from "@/components/Card";
import { DataTable } from "@/components/DataTable";
import { Note } from "@/components/Note";
import { Cta } from "@/components/Cta";
import { DripFlow } from "@/components/diagrams/DripFlow";
import {
  demandRows,
  dripRows,
  rwhIntro,
  rwhItems,
  soilCards,
  soilNote,
  soilStats,
  supplyGapNote,
  waterStats,
} from "@/lib/data/waterSoil";

export const metadata: Metadata = {
  title: "Water & Soil",
  description:
    "Rainwater harvesting math, the drip layout, and the zero-budget Jeevamrutham / Beejamrutham schedule that carries the entire plot.",
};

export default function WaterSoilPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Section 05"
        title="Water Design & Soil Health"
        dek="Rainwater harvesting math, the drip layout, and the zero-budget Jeevamrutham / Beejamrutham schedule that carries the entire plot."
      />

      <Section eyebrow="Water balance">
        <div className="grid cols-3">
          {waterStats.map((stat) => (
            <Stat key={stat.label} figure={stat.figure} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section
        alt
        eyebrow="Rainwater harvesting"
        title="Catching the NE monsoon"
        lead={<p style={{ maxWidth: 700 }}>{rwhIntro}</p>}
      >
        <ul style={{ color: "var(--paper-dim)" }}>
          {rwhItems.map((item) => (
            <li key={item.lead}>
              <strong style={{ color: "var(--paper)" }}>{item.lead}</strong>
              {item.rest}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Demand" title="What the plot actually drinks">
        <DataTable
          caption="Estimated annual water demand by layer"
          headers={["Layer", "Basis", "Estimated annual demand"]}
          rows={demandRows.map((row) => [
            row.total ? <strong key="layer">{row.layer}</strong> : row.layer,
            row.basis,
            row.total ? <strong key="demand">{row.demand}</strong> : row.demand,
          ])}
          wrapCells={[1, 2]}
        />
        <Note>{supplyGapNote}</Note>
      </Section>

      <Section alt eyebrow="Drip layout" title="Header tank → 3 sub-mains">
        <DripFlow />
        <DataTable
          caption="Drip irrigation system components and specifications"
          headers={["Component", "Specification"]}
          rows={dripRows.map((row) => [row.component, row.spec])}
          wrapCells={[1]}
        />
      </Section>

      <Section eyebrow="Soil health plan" title="The zero-budget input schedule">
        <div className="grid cols-2">
          {soilCards.map((card) => (
            <Card key={card.title} title={card.title}>
              <p>{card.body}</p>
            </Card>
          ))}
        </div>
        <div className="grid cols-2" style={{ marginTop: 20 }}>
          {soilStats.map((stat) => (
            <Stat key={stat.label} figure={stat.figure} label={stat.label} />
          ))}
        </div>
        <p style={{ maxWidth: 700, marginTop: 20, color: "var(--paper-dim)" }}>{soilNote}</p>
        <Cta href="/self-sufficiency">See what the harvest actually covers →</Cta>
      </Section>
    </>
  );
}
