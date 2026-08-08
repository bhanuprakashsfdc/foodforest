"use client";

import { useState } from "react";
import type { MonthHarvest } from "@/lib/data/harvest";
import { Card } from "./Card";

export function HarvestCalendar({ months }: { months: MonthHarvest[] }) {
  const [active, setActive] = useState(0);
  const month = months[active];

  return (
    <>
      <div className="cal-tabs" role="tablist" aria-label="Select month">
        {months.map((m, i) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            id={`tab-${m.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${m.id}`}
            className={i === active ? "active" : undefined}
            onClick={() => setActive(i)}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div
        id={`panel-${month.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${month.id}`}
        className="cal-panel active"
      >
        <h2>{month.month}</h2>
        <div className="grid cols-5">
          {month.categories.map((cat) => (
            <Card key={cat.category} num={cat.category}>
              <p>{cat.items}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
