---
id: route-playback
title: Route Playback
description: Replay historical vehicle routes on the map with animation controls, speed adjustment, stop markers, and a timeline scrubber.
sidebar_position: 1
keywords: [route playback, replay, route history, trip replay, animation, stop markers, timeline]
---

# Route Playback

Route Playback lets you replay a vehicle's historical journey on the map as an animation. The route is drawn as a purple polyline, and a vehicle icon moves along it in real time while stop locations are highlighted with red markers.

<!-- ![Route Playback](/img/screenshots/web/route-playback.png) -->

## Step-by-Step Instructions

### 1. Select a Vehicle

Choose the vehicle you want to review. You can start playback from:

- **Map View** -- Click/tap a vehicle marker, then select **Playback**
- **Object List** -- Use the playback quick action on any vehicle card
- **Single Object View** -- Tap the **Playback** button in the quick actions

### 2. Choose a Date Range

After selecting a vehicle, a date picker appears. You have two options:

- **Quick Buttons** -- Tap **Today** or **Yesterday** for instant access to the most common time ranges.
- **Custom Calendar** -- Tap the date field to open a calendar picker and select any start and end date.

:::tip
Start with "Today" to see the current day's route so far. The playback updates with new data as the vehicle continues to move.
:::

### 3. View the Route

Once the date range is confirmed, the system loads the route data and displays it on the map:

- A **purple polyline** traces the entire path the vehicle traveled.
- **Red stop markers** appear at every location where the vehicle stopped, showing the stop duration.
- The **start point** and **end point** are marked distinctly.

<!-- ![Route with Stop Markers](/img/screenshots/web/route-stop-markers.png) -->

### 4. Use Playback Controls

The playback control bar sits at the bottom of the screen:

| Control | Function |
|---------|----------|
| **Play / Pause** | Start or pause the route animation |
| **Speed Slider** | Adjust playback speed: 1X, 2X, 4X, or 8X |
| **Timeline Scrubber** | Drag to jump to any point along the route |
| **Timestamp Display** | Shows the current time position in the playback |

### 5. Interact with Stop Markers

Tap or click any **red stop marker** along the route to see:

- Stop start time and end time
- Total duration of the stop
- Reverse-geocoded address of the stop location

:::info
Stop markers only appear for stops that exceed the minimum stop duration threshold configured on your account (typically 2-5 minutes).
:::

## Web vs. Mobile

| Feature | Web | Mobile |
|---------|-----|--------|
| Playback controls | Bottom toolbar | Bottom sheet with swipe-up for details |
| Speed options | 1X, 2X, 4X, 8X | 1X, 2X, 4X, 8X |
| Route interaction | Click stop markers, hover for info | Tap stop markers for info sheet |
| Date picker | Calendar dropdown | Full-screen calendar with date chips |

:::warning
Very long date ranges (e.g., an entire month) may take longer to load and may contain a large volume of data points. For best performance, keep playback ranges to one or two days at a time.
:::
