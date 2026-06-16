---
id: speed-distance
title: Speed & Distance Report
description: Speed statistics with distribution charts, overspeed events, and average/max/min speed analysis for safety scoring.
sidebar_position: 9
keywords: [speed report, distance report, overspeed, speed compliance, driver safety, speed distribution]
---

# Speed & Distance Report

The Speed & Distance Report combines speed analysis with distance data to provide a complete picture of driving behavior. It includes speed statistics, a speed distribution chart, overspeed event logs, and distance metrics.

![Speed Distance Report](/img/screenshots/web/speed-vs-distance-report.png)

## What the Report Shows

### Speed Statistics

| Metric | Description |
|--------|-------------|
| **Average Speed** | Mean speed across all moving periods |
| **Max Speed** | Highest speed recorded during the period |
| **Min Speed** | Lowest non-zero speed recorded |
| **Total Overspeed Events** | Number of times the vehicle exceeded the configured speed limit |
| **Total Overspeed Duration** | Cumulative time spent above the speed limit |

### Speed Distribution Chart

A visual chart breaks down driving time by speed ranges:

- **0-20 km/h** -- City traffic, crawling
- **20-40 km/h** -- Urban driving
- **40-60 km/h** -- Suburban roads
- **60-80 km/h** -- Main roads
- **80-100 km/h** -- Highways
- **100+ km/h** -- High speed / potential overspeed

![Speed Distribution Chart](/img/screenshots/web/speed-distribution-chart.png)

:::tip
A healthy speed distribution should align with the types of roads the vehicle typically uses. A delivery van showing significant time above 100 km/h in urban areas warrants investigation.
:::

### Overspeed Events

Each overspeed event is logged with:

| Field | Description |
|-------|-------------|
| **Start Time** | When the vehicle first exceeded the speed limit |
| **End Time** | When the vehicle dropped back below the limit |
| **Duration** | How long the overspeed lasted |
| **Max Speed** | Peak speed during the event |
| **Location** | Where the overspeed occurred |

### Distance Metrics

- **Total Distance** -- Combined distance for the period
- **Distance at Normal Speed** -- Distance traveled within speed limits
- **Distance at Overspeed** -- Distance traveled while exceeding the speed limit

## Best For

- **Speed compliance** -- Ensure vehicles stay within legal and company-defined speed limits.
- **Driver safety scoring** -- Rank drivers by overspeed frequency and severity.
- **Risk management** -- Identify high-risk driving patterns before they lead to accidents or insurance claims.

## How to Generate

1. Go to **Reports** and select **Speed & Distance**.
2. Choose a vehicle.
3. Select a date range.
4. Tap **Generate**.

:::info
The speed limit used for overspeed detection is configured per vehicle or globally in your account settings. Ensure limits are set correctly for each vehicle type before relying on overspeed data.
:::

:::warning
GPS-derived speed can vary slightly from the vehicle's actual speedometer. Differences of 2-5 km/h are normal. Factor in this margin when reviewing borderline overspeed events.
:::
