---
id: playback
title: Mobile Playback
description: "Replay a vehicle's route in the Traqcare app for any day or range, at 1x to 4x speed, with distance, moving and stopped time, max speed and each stop."
sidebar_position: 4
keywords: [mobile playback, route replay, mobile history, trip playback]
---

# Mobile Playback

Playback replays where one vehicle drove over a period you choose. It draws the route on the map, moves the vehicle along it, and lists the trips and stops with their times, so you can check a driver's day without the web platform.

![Mobile Playback](/img/screenshots/mobile/playback.jpg)

## Open playback

1. Open the **List** tab and tap the vehicle.
2. Tap **Playback** in the action sheet.

You can also tap the play button on the vehicle's live map (**List > tap a vehicle > Live Map**). Playback opens with **Today** already loaded.

## Choose the period

- **Date chips** above the player: **Today**, **Yesterday** and the five days before that (shown as day and month, for example "23 Jan"). One tap loads that day.
- **Choose dates** (calendar icon in the header): set **From** and **To** dates and times yourself, or tap one of the **Quick ranges**: **Today**, **Yesterday**, **This Week**, **Last Week**, **This Month**, **Last Month**. The end must be after the start.

Days start and end in the time zone set in **More > Preferences > Time Zone**.

## Read the summary

The header shows five figures for the period: **Distance**, **Moving** time, **Stopped** time, **Max Speed** and **Avg Speed**. Distance and speed use the unit set in **More > Preferences > Distance Unit**. Before data loads they show "--". If the vehicle did not move, the map shows "No movement recorded for" the period, or where it is parked.

## Play the route

1. Tap the play button. The vehicle moves along the route and the map follows it.
2. Drag the slider to jump to any point. The time, date and speed at that point show under the slider.
3. Tap the speed chip to change speed. Each tap moves **1×** to **2×**, **3×**, **4×** and back to **1×**.
4. If you move the map while playing, tap **Re-center** to follow the vehicle again.

## Map buttons

| Button | What it does |
|--------|--------------|
| **Satellite view / Map View** | Switches between the standard map and hybrid (satellite with labels). |
| **Show stops / Hide stops** | Shows or hides a P marker at every stop. |
| **Show whole route** | Zooms out to the full route. |
| **Street View here** | Opens Google Street View at the current slider position. |
| **Video history** | Opens the dashcam's recordings for this vehicle. Shown only when a video camera is configured on the device. |

## Trips and stops

The bar under the player reads, for example, "Trips & stops · 3 trips, 4 stops". Tap it to open the list. Trips are green, stops are orange.

- Tap a **trip** to highlight it with an A (start) and B (end) pin. Its card shows start and end time and address, duration and distance. Tap **Play trip** to replay only that trip.
- Tap a **stop** to see when the vehicle **Arrived** and **Left** (or "Still here"), with **Street View** and **Directions** buttons.

If the server has no trip data for the period, the bar shows stops only ("Stops · 4").

## Common questions

### How far back can I replay?

The date picker goes back to 2000, and the app does not set a maximum range. What you get depends on the history stored for the device.

### Why are Max Speed and Avg Speed in mph?

The figures follow **More > Preferences > Distance Unit**. Choose **Kilometers** to see km/h.

### Can I watch dashcam video from playback?

Yes, if the vehicle has a video camera configured. Tap **Video history** on the map. See [Video, Audio & Camera](./video-and-camera.md).
