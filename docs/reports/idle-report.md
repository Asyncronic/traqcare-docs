---
id: idle-report
title: Idle Report
description: Log of engine idle events with start/end times, durations, and locations to reduce fuel waste and engine wear.
sidebar_position: 7
keywords: [idle report, engine idle, idling, fuel waste, driver behavior, engine wear, idle time]
---

# Idle Report

The Idle Report captures every instance where a vehicle's engine was running while the vehicle remained stationary. Excessive idling wastes fuel, increases engine wear, and contributes to unnecessary emissions.

<!-- ![Idle Report](/img/screenshots/web/idle-report.png) -->

## What the Report Shows

Each idle event entry includes:

| Field | Description |
|-------|-------------|
| **Event Number** | Sequential idle event number |
| **Start Time** | When the idle event began (engine on, no movement) |
| **End Time** | When the vehicle began moving or the engine was turned off |
| **Duration** | Total idle time for this event |
| **Location** | Reverse-geocoded address where idling occurred |

A summary section shows:

- **Total Idle Events** -- Count of all idle events in the period
- **Total Idle Time** -- Cumulative idle duration
- **Average Idle Duration** -- Mean duration per idle event

## Best For

- **Reducing fuel waste** -- Every minute of idling burns fuel without productive output. Identify vehicles and drivers with the most idle time and address the behavior.
- **Driver behavior coaching** -- Habitual idling often indicates drivers leaving the engine running during breaks, loading/unloading, or while waiting. Use the report data for targeted coaching.
- **Engine wear prevention** -- Extended idling can cause carbon buildup and accelerate engine component degradation. Reducing idle time extends vehicle life.

:::tip
Set a target for maximum daily idle time (e.g., 30 minutes) and use this report to track progress. Share results with drivers to encourage improvement.
:::

## How to Generate

1. Go to **Reports** and select **Idle Report**.
2. Choose a vehicle.
3. Select a date range.
4. Tap **Generate**.

<!-- ![Idle Events List](/img/screenshots/web/idle-events-list.png) -->

## Understanding Idle Events

An idle event is recorded when:

1. The ignition is **on** (engine running).
2. The vehicle's speed is **zero** or below the movement threshold.
3. The condition persists for longer than the configured idle threshold (typically 3-5 minutes).

:::info
Short idle periods (under the threshold) such as waiting at traffic lights are not counted as idle events. The threshold is configurable by your account administrator.
:::

:::warning
Some idle time is unavoidable, such as warming up the engine in cold weather or running auxiliary equipment. Consider the context before flagging all idle events as wasteful.
:::
