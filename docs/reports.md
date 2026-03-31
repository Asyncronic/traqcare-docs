---
id: reports
title: Reports
description: Generate, view, and export detailed fleet reports including trips, fuel, distance, speed, alerts, geofences, and more.
sidebar_position: 4
keywords: [reports, fleet reports, trip report, fuel report, export, PDF, Excel, CSV, analytics]
---

# Reports

The Reports module provides detailed analytical reports for your fleet. Generate reports for any vehicle over any date range, view them directly in the app, and export to PDF, Excel, or CSV for sharing and record-keeping.

![Reports Overview](/img/screenshots/web/reports-overview.png)

## Accessing Reports

- **Web App**: Click **Reports** in the left sidebar navigation.
- **Mobile App**: Tap **More** in the bottom navigation bar, then select **Reports**.

## Generating a Report

1. Select a **vehicle** (or multiple vehicles, where supported).
2. Choose a **report type** from the list.
3. Set the **date range** using the calendar picker or quick-select buttons.
4. Tap **Generate** to run the report.

## Export Options

Every report can be exported in multiple formats:

| Format | Best For |
|--------|----------|
| **PDF** | Sharing with clients, printing, formal records |
| **Excel (.xlsx)** | Further analysis, pivot tables, custom calculations |
| **CSV** | Data import into other systems, bulk processing |

:::tip
Use Excel export when you need to perform additional calculations or create custom charts from the report data.
:::

## Available Report Types

| Report | Description | Details |
|--------|-------------|---------|
| [Trip Report](./reports/trip-report) | Every trip with start/end times, distance, and speed | Per-trip breakdown |
| [Daily Travel](./reports/daily-travel) | Day-by-day summary of travel activity | Daily aggregates |
| [Travel Summary](./reports/travel-summary) | Aggregated metrics over a period for fleet comparison | Period totals and averages |
| [Fuel Summary](./reports/fuel-summary) | Fuel consumption, refueling, and drain events | Daily fuel data with charts |
| [Daily Distance](./reports/daily-distance) | Distance traveled per day | Simple mileage tracking |
| [Stoppage Report](./reports/stoppage-report) | Every stop with duration and address | Stop-level detail |
| [Idle Report](./reports/idle-report) | Engine idle events with time and location | Idle event log |
| [Alert Report](./reports/alert-report) | Historical log of triggered alerts | Alert event history |
| [Speed & Distance](./reports/speed-distance) | Speed statistics and overspeed events | Speed analysis |
| [Geofence Report](./reports/geofence-report) | Geofence entry/exit logs with dwell times | Zone activity |
| [Additional Reports](./reports/additional-reports) | Offline, Alert Count, Time Wise, Health, Voltage, Battery (Web only) | Specialized reports |

:::info
Report availability may vary based on your subscription plan and the sensors installed on your GPS devices. Fuel reports, for example, require a fuel sensor.
:::

:::warning
Large date ranges across many vehicles can take longer to generate. For best performance, limit reports to one vehicle and a 30-day window when possible.
:::
