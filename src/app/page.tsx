import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Stat } from "@/components/Stat";
import { Card } from "@/components/Card";
import { Cta } from "@/components/Cta";

const glanceStats = [
  { figure: "75", label: "Crops retained" },
  { figure: "~410", label: "Trees & perennials" },
  { figure: "5", label: "Planting layers" },
  { figure: "80–85%", label: "Food self-sufficiency" },
  { figure: "12/12", label: "Months with a harvest" },
];

const planCards = [
  {
    num: "01",
    title: "Master Plan",
    body: "Top-view farm layout, zones, pond, windbreak, and cross-section diagrams.",
    href: "/master-plan",
    cta: "View diagram →",
  },
  {
    num: "02",
    title: "Five Layers",
    body: "Every crop classified by canopy layer, with mature height and spacing.",
    href: "/five-layers",
    cta: "View layers →",
  },
  {
    num: "03",
    title: "Crop Directory",
    body: "Climate suitability scores, plant counts, and trial-zone reasoning for all 75 crops.",
    href: "/crop-directory",
    cta: "View directory →",
  },
  {
    num: "04",
    title: "Harvest Calendar",
    body: "Month-by-month table of what's ready — fruit, vegetables, greens, pulses, roots.",
    href: "/harvest-calendar",
    cta: "View calendar →",
  },
  {
    num: "05",
    title: "Water & Soil",
    body: "Rainwater harvesting math, drip layout, and the full Jeevamrutham/Beejamrutham schedule.",
    href: "/water-soil",
    cta: "View systems →",
  },
  {
    num: "06",
    title: "Self-Sufficiency",
    body: "Estimated annual production vs. a family of five's real consumption, category by category.",
    href: "/self-sufficiency",
    cta: "View analysis →",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        strata
        eyebrow="Subhash Palekar Natural Farming · 43,560 sq ft"
        title="One acre. Five layers. A family fed twelve months a year."
        dek="A complete SPNF food forest design for Tirupati — 75 crops, zero-budget natural inputs, and a harvest calendar with something ready in every single month."
      >
        <Cta href="/master-plan">Open the master plan →</Cta>
        <Cta href="/crop-directory" ghost>
          Browse the crop directory
        </Cta>
      </Hero>

      <Section eyebrow="At a glance">
        <div className="grid cols-5">
          {glanceStats.map((stat) => (
            <Stat key={stat.label} figure={stat.figure} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section
        alt
        eyebrow="Why five layers"
        title="Every crop gets a place in the canopy — not just a place on the acre."
        lead={
          <p style={{ maxWidth: 640, color: "var(--paper-dim)" }}>
            Palekar&apos;s five-layer model stacks emergent trees, canopy trees, small trees,
            shrubs, and ground cover into the same footprint, so sunlight, water, and root
            space are shared instead of competed for. Nothing on your original list — Apple,
            Kiwi, Blueberry, Cardamom, Clove, Cinnamon included — was dropped; the
            climate-marginal ones are grown as clearly labelled trial plantings with honest
            substitutes named alongside them.
          </p>
        }
      >
        <Cta href="/five-layers" ghost>
          See the layer breakdown →
        </Cta>
      </Section>

      <Section eyebrow="Navigate the plan">
        <div className="grid cols-3">
          {planCards.map((card) => (
            <Card key={card.num} num={card.num} title={card.title}>
              <p>{card.body}</p>
              <Link href={card.href}>{card.cta}</Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
