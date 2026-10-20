---
id: dashboard
title: Mobile Dashboard
description: "The mobile Dashboard counts vehicles by status, lists alerts from the last 24 hours and shows a live fleet map. Tap a status to filter the List tab."
sidebar_position: 2
keywords: [mobile dashboard, status chart, fleet overview, vehicle count]
---

# Mobile Dashboard

The Dashboard is the first tab in the Traqcare app. It tells you how many vehicles are moving, idle, stopped or offline right now, shows the newest alerts from the last 24 hours, and gives you a small live map of the fleet.

![Mobile Dashboard](/img/screenshots/mobile/dashboard.jpg)

## What is on the Dashboard

From top to bottom:

1. **Header.** Shows "Hi" with your first name and, for resellers, the name of the client you are viewing. It has three buttons:
   - **Search objects** (magnifying glass): type part of a vehicle name or IMEI and tap a result to open its live map. Before you type, it lists the vehicles you opened recently.
   - **Recent alerts** (bell): opens the alerts list. A red badge shows how many alerts arrived since you last opened it (up to "99+").
   - **Filter by client** (funnel): resellers only. Pick a client from the client tree to see only that client's vehicles.
2. **Announcements.** Platform announcements appear as a banner when there are any. Tap the badge to see all of them.
3. **Recent Alerts.** A card titled "Recent Alerts (n in last 24h)" with the two most recent alerts, one row per vehicle. Tap a row to see that vehicle's alerts, or **View all** for every alert.
4. **OBJECTS STATUS.** A donut chart with the number of vehicles in each status and the **Total** in the centre.
5. **LIVE MAP VIEW.** A small map with every vehicle. Use **Fit fleet** to zoom to all vehicles. Tap the map to open the full **Map** tab.

## Status colours

| Status | Colour | Meaning |
|--------|--------|---------|
| **Moving** | Green | The vehicle is driving. |
| **Idle** | Yellow | Engine running, vehicle not moving. |
| **Stopped** | Red | Engine off. |
| **Offline** | Blue | No data received for more than 60 minutes. |
| **Expired** | Purple | The device subscription has expired. |
| **No Data** | Grey | The device has not reported yet, or its status is unknown. |

## Filter the vehicle list from the chart

1. On the Dashboard, tap a coloured segment of the donut, for example **Idle**.
2. The app switches to the **List** tab with that status tab already selected, so you see only those vehicles.
3. Tap the **Total** in the centre of the donut to open the List tab with **All** vehicles.

## Notes

- The Dashboard alerts card and the bell badge cover standard event alerts only. AI (ADAS/DSM) alerts appear in a vehicle's alerts screen, not on the Dashboard.
- If you prefer to start on the List or Map tab, change **More > Preferences > Home Screen**.
- The **BLACK-OPS GPS** branded app shows the statuses as coloured cards instead of a donut chart. The cards work the same way.

## Common questions

### Why does the Recent Alerts card disappear?

The card only shows when there is at least one alert from the last 24 hours. If no alert arrived in that time, the card is hidden.

### When does a vehicle show as Offline in the app?

When the app has received no data from the device for more than 60 minutes. The vehicle then counts as Offline whatever its last status was.

### How do I clear the red number on the bell?

Tap the bell or **View all**. Opening a single vehicle's alerts from the card does not clear the badge.

### Can resellers see sub-clients' vehicles on the Dashboard?

Yes. Turn on **More > Preferences > Include Sub Clients**, or use the **Filter by client** button to view one client at a time.
