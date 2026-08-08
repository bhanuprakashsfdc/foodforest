import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Stat } from "@/components/Stat";
import { Card } from "@/components/Card";
import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/Badge";
import { Cta } from "@/components/Cta";
import {
  analysisCards,
  balanceRows,
  closingNote,
  headlineStats,
  steps,
} from "@/lib/data/selfSufficiency";

export const metadata: Metadata = {
  title: "Self-Sufficiency",
  description:
    "Estimated annual production against what a family of five actually eats in a year — category by category, surplus and deficit named plainly.",
};

export default function SelfSufficiencyPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Section 06"
        title="Self-Sufficiency Analysis"
        dek="Estimated annual production against what a family of five actually eats in a year — category by category, surplus and deficit named plainly."
      />

      <Section eyebrow="Headline">
        <div className="grid cols-3">
          {headlineStats.map((stat) => (
            <Stat key={stat.label} figure={stat.figure} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section alt eyebrow="Production vs. consumption">
        <DataTable
          caption="Estimated annual production versus family-of-five consumption"
          headers={["Category", "Est. annual production", "Family-of-5 consumption", "Result"]}
          rows={balanceRows.map((row) => [
            row.category,
            row.production,
            row.consumption,
            <Badge key="result" level={row.resultLevel}>
              {row.result}
            </Badge>,
          ])}
          wrapCells={[1, 3]}
        />
      </Section>

      <Section eyebrow="Reading the numbers">
        <div className="grid cols-2">
          {analysisCards.map((card) => (
            <Card key={card.title} title={card.title}>
              <p>{card.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        alt
        eyebrow="Getting started"
        title="Sequencing that matches the trade-offs above"
      >
        <ul style={{ color: "var(--paper-dim)", maxWidth: 680 }}>
          {steps.map((step) => (
            <li key={step.lead}>
              <strong style={{ color: "var(--paper)" }}>{step.lead}</strong>
              {step.rest}
            </li>
          ))}
        </ul>
        <p style={{ maxWidth: 680, color: "var(--paper-dim)" }}>{closingNote}</p>
        <Cta href="/">Back to overview →</Cta>
      </Section>
    </>
  );
}
