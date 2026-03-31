---
id: geofence-report
title: Geofence Report
description: Entry and exit logs for geofenced zones with dwell times for job site attendance and zone monitoring.
sidebar_position: 10
keywords: [geofence report, geofence entry, geofence exit, dwell time, zone monitoring, job site, restricted zone]
---

# Geofence Report

The Geofence Report logs every entry and exit event for your defined geofence zones. It records when a vehicle entered a zone, when it left, and how long it stayed, providing a complete picture of zone activity.

<!-- ![Geofence Report](/img/screenshots/web/geofence-report.png) -->

## What the Report Shows

Each geofence event entry includes:

| Field | Description |
|-------|-------------|
| **Geofence Name** | Name of the geofenced zone |
| **Vehicle** | Name or plate number of the vehicle |
| **Entry Time** | When the vehicle entered the geofence |
| **Exit Time** | When the vehicle left the geofence |
| **Dwell Time** | Total time spent inside the geofence |
| **Entry Location** | GPS coordinates at the point of entry |
| **Exit Location** | GPS coordinates at the point of exit |

A summary section shows:

- **Total Visits** -- Number of entry/exit pairs for each geofence
- **Total Dwell Time** -- Cumulative time spent inside each geofence
- **Average Dwell Time** -- Mean visit duration per geofence

## Best For

- **Job site attendance** -- Verify that field workers and vehicles arrive at job sites on time and stay for the expected duration.
- **Customer visit verification** -- Confirm that sales or service vehicles actually visited customer locations as reported.
- **Restricted zone monitoring** -- Detect unauthorized entries into off-limits areas such as restricted facilities, competitor locations, or out-of-territory zones.

:::tip
Create geofences around all your key locations -- warehouses, client sites, job sites, and restricted areas. The more zones you define, the richer your geofence reporting becomes.
:::

## How to Generate

1. Go to **Reports** and select **Geofence Report**.
2. Choose a vehicle or select all vehicles.
3. Optionally filter by specific geofence zones.
4. Select a date range.
5. Tap **Generate**.

<!-- ![Geofence Report Table](/img/screenshots/web/geofence-report-table.png) -->

## Reading the Report

- **Multiple visits in one day** to the same geofence appear as separate rows, each with their own entry/exit times and dwell duration.
- **Currently inside a geofence** events show an entry time but no exit time yet, with dwell time counting up.
- **Pass-through events** (entering and exiting very quickly) may indicate the vehicle drove past the zone without stopping.

:::info
Geofence accuracy depends on the size of the zone and the GPS device's reporting frequency. Very small geofences (under 100 meters radius) may miss brief entries or show slightly inaccurate entry/exit times.
:::

:::warning
If you notice missing geofence events, check that the geofence was active during the report period and that the vehicle's GPS device was reporting data at the time. Devices with low reporting frequency may not capture brief zone visits.
:::
