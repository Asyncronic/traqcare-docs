---
id: trip-statistics
title: Trip Statistics
description: View distance, speed, driving time, and stop details for any historical trip with a detailed statistics header and parking list.
sidebar_position: 2
keywords: [trip statistics, distance, speed, moving time, stopped time, parking list, trip summary]
---

# Trip Statistics

Trip Statistics provides a numerical summary of a vehicle's activity for a selected date range. A header bar displays key metrics at a glance, while a detailed parking list shows every stop the vehicle made.

<!-- ![Trip Statistics Header](/img/screenshots/web/trip-statistics-header.png) -->

## Header Bar Stats

The statistics header bar appears above the playback map and displays five key metrics:

### Distance

The total distance traveled during the selected period, displayed in kilometers or miles depending on your account settings. This is the actual road distance based on GPS data points, not straight-line distance.

### Moving Time

The total time the vehicle was in motion (speed above the movement threshold). This excludes any time spent stopped or idling.

### Stopped Time

The total time the vehicle was stationary with the engine off. This includes all stops that met the minimum duration threshold.

### Max Speed

The highest speed recorded during the selected period. Useful for identifying speeding events or unusual driving behavior.

### Avg Speed

The average speed calculated across all moving periods. This excludes stopped time from the calculation, giving you a true average driving speed.

:::tip
Compare Moving Time vs. Stopped Time to understand how efficiently a vehicle is being utilized. A high ratio of stopped time may indicate scheduling issues or unauthorized stops.
:::

## Parking List

Below the header stats, the **Parking List** provides a detailed breakdown of every stop made during the selected period.

Each entry in the parking list includes:

| Field | Description |
|-------|-------------|
| **Stop Number** | Sequential number for easy reference |
| **Start Time** | When the vehicle stopped |
| **End Time** | When the vehicle resumed moving |
| **Duration** | Total time spent at this stop |
| **Location** | Reverse-geocoded address of the stop |

<!-- ![Parking List](/img/screenshots/web/parking-list.png) -->

:::info
Tap or click any parking entry to center the map on that stop location and highlight the corresponding red stop marker.
:::

## How to Access Trip Statistics

1. Open **Playback** for any vehicle.
2. Select a date range.
3. The statistics header bar appears automatically above the map.
4. Scroll down or expand the bottom panel to view the full Parking List.

## Understanding the Data

- **Short stops** (under the configured threshold) are not counted as separate parking events but still contribute to stopped time.
- **Idle time** (engine on, not moving) may be categorized differently depending on your account configuration. Check with your administrator if idle time appears under moving or stopped time.
- **GPS drift** can occasionally add small amounts of false distance. If a parked vehicle shows minor distance, this is likely due to normal GPS signal variation.

:::warning
Statistics accuracy depends on GPS device data quality. Gaps in data (device offline, poor signal) will result in underreported distance and may affect time calculations.
:::
