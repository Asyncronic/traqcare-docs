---
slug: fuel-chart-improvements
title: "Fuel Chart Improvements: Smoother Graphs & Accurate Distance Tracking"
authors: [traqcare]
tags: [release, improvement, mobile, web]
---

We have shipped significant improvements to the **fuel consumption chart** across both web and mobile platforms.

<!-- truncate -->

## What Changed

### Mobile App — Smoother Fuel Graph

The mobile fuel chart was previously rendering with visual noise when displaying data over multiple days. This has been completely fixed:

- **Data downsampling** — The chart now intelligently reduces data points to ~500 for smooth rendering while preserving accuracy at refuel/theft event points
- **Distance line fix** — History data rows with zero cumulative distance no longer cause the distance overlay to drop to zero. The chart now carries forward the last known good distance value
- **Per-day chart** — Tapping a day in the Fuel Summary report now opens the chart for that specific day, not the entire date range

### Web App — Already Smooth

The web app uses ECharts with LTTB sampling and Catmull-Rom interpolation, which already provided smooth rendering. No changes needed on web.

## What This Means for You

- **Cleaner fuel analysis** — No more jagged lines or confusing visual artifacts
- **Accurate theft detection** — Refuel and drain events are precisely marked
- **Better mobile experience** — The chart auto-rotates to landscape for detailed viewing

## Fuel Chart Reading Guide

Need help understanding the fuel chart? Check our [Fuel Chart Guide](/docs/fuel-management/fuel-chart) for a complete walkthrough of what each line, marker, and summary stat means.
