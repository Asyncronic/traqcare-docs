---
id: travel-summary
title: Travel Summary Report
description: Aggregated travel metrics over a period including total distance, duration, daily averages, and vehicle comparison.
sidebar_position: 3
keywords: [travel summary, fleet comparison, total distance, monthly report, fleet performance, billing]
---

# Travel Summary Report

The Travel Summary Report aggregates travel metrics across an entire period into a single summary. It is ideal for comparing vehicle performance, generating monthly overviews, or preparing billing based on distance or usage.

![Travel Summary Report](/img/screenshots/web/travel-summary-report.png)

## What the Report Shows

The report presents the following aggregated metrics for each vehicle:

| Field | Description |
|-------|-------------|
| **Vehicle Name** | Name or plate number of the vehicle |
| **Total Distance** | Combined distance traveled over the entire period |
| **Total Moving Time** | Cumulative time spent in motion |
| **Total Stopped Time** | Cumulative time spent stationary |
| **Total Duration** | Full elapsed time from first movement to last stop |
| **Average Daily Distance** | Total distance divided by the number of active days |
| **Average Speed** | Overall average speed across all moving periods |
| **Max Speed** | Highest speed recorded during the period |
| **Number of Trips** | Total trip count for the period |

## Vehicle Comparison

When you run the Travel Summary for multiple vehicles, the report displays them side by side, making it easy to compare:

- Which vehicles traveled the most distance
- Which vehicles had the highest utilization (moving time vs. stopped time)
- Speed compliance across the fleet
- Outliers that may need attention

:::tip
Sort by "Total Distance" to quickly identify your most and least active vehicles. Vehicles with unusually low distance may be underutilized or experiencing issues.
:::

## Best For

- **Fleet performance comparison** -- Rank vehicles by distance, speed, or utilization across your fleet.
- **Monthly reports** -- Generate end-of-month summaries for management or client reporting.
- **Billing** -- Use total distance or duration as the basis for customer invoicing or lease calculations.

## How to Generate

1. Go to **Reports** and select **Travel Summary**.
2. Select one or more vehicles (multi-select supported).
3. Choose a date range (typically a full month).
4. Tap **Generate**.

<!-- ![Travel Summary Comparison](/img/screenshots/web/travel-summary-comparison.png) -->

:::info
Daily averages are calculated using only active days (days where the vehicle had at least one trip). Days with no movement are excluded from the average calculation.
:::

:::warning
When comparing vehicles, ensure they are of similar type and usage pattern. Comparing a delivery van's daily distance against an executive sedan will not yield meaningful insights.
:::
