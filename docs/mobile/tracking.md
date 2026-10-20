---
id: tracking
title: Mobile Live Tracking
description: "Track vehicles live in the Traqcare app from the Map and List tabs, open one vehicle's live map, share its location and send commands."
sidebar_position: 3
keywords: [mobile tracking, map tracking, 3D follow, vehicle actions]
---

# Mobile Live Tracking

Live tracking in the Traqcare app works from two tabs: **Map** shows every vehicle on Google Maps, and **List** shows every vehicle with its status, speed and address. Tap any vehicle to open its own live map, which follows the vehicle as new positions arrive.

## Map tab

![Mobile Map View](/img/screenshots/mobile/map.jpg)

Vehicles are drawn in their status colour: green Moving, yellow Idle, red Stopped, blue Offline (no data for more than 60 minutes). When zoomed out, nearby vehicles merge into a numbered cluster; tap a cluster to zoom in. Tap a vehicle to open its live map.

The buttons on the map:

- **Refresh timer**: counts down to the next automatic refresh (every 10 seconds). Tap it to refresh now and zoom to all vehicles.
- **Filter** (resellers only): show one client's vehicles.
- **Car icon**: show or hide vehicle names on the markers.
- **Search**: opens a side list of vehicles; tap one to zoom the map to it.
- **Traffic**: turn live traffic on or off.
- **Map type**: switch between the standard map and hybrid (satellite with labels).
- **My location**: centre on your phone's position. Needs location permission.
- **Fit all**: zoom back out to every vehicle.

## List tab

![Mobile List View](/img/screenshots/mobile/list-view.jpg)

The tabs across the top filter by status: **All**, **Moving**, **Idle**, **Stopped**, **Offline**, **Expired** and **No Data**. Each row shows the vehicle name, how long it has been in its status, speed, address, today's distance, last update time and the **Expires On** date. The list refreshes every 10 seconds while it is on screen; pull down to refresh at once.

To act on a vehicle:

1. Open **List** and tap the vehicle.
2. Choose an action from the sheet: **Live Map**, **Playback**, **Alerts**, **Reports**, **Expenses**, **Details**, **Commands**, **Share**, **Parking** or **Documents**.
3. Extra actions appear only when the device has the matching sensor configured: **Live Video**, **Monitor** and **Intercom** (video camera), **Gallery** (camera) and **Immobilize** (relay).

If the vehicle's subscription has expired, tapping it shows **Device Expired** with a **Contact Your Administrator** button instead of the sheet. Map-based actions are blocked with "Device is not Online yet" until the device first reports, and with "Device just Installed" until it sends a real position.

## Single vehicle live map

![Device Dashboard](/img/screenshots/mobile/device-dashboard.jpg)

Open it with **List > tap a vehicle > Live Map**, or tap a vehicle on the Map tab. The header shows speed, vehicle name, status with its duration, and the last update time. The map stays north-up and follows the vehicle; a tail shows its recent path.

Map buttons: **Playback**, **Traffic**, **Map type**, **tail on/off**, **My location**, **Navigate** (opens the vehicle's position in Google Maps or Apple Maps on iPhone, or your maps app on Android), **Street View**, and a target icon that re-centres on the vehicle. The **Add Geofence** button on the left starts a geofence at the vehicle's position or yours.

The bottom panel shows the address, **Odometer** (tap to correct it), **Today Distance**, **Trip Duration** and **Trip Distance** (labelled "Last Trip" when the vehicle is not moving), sensor readings such as fuel or temperature when configured, and the same actions as the list sheet.

**Share** offers **Current Location Only** (a Google Maps link) or a live link valid **For One Hour**, **For Three Hours**, **For One Day** or **For One Week**.

## Common questions

### Why don't I see Live Video or Immobilize for my vehicle?

Those buttons only appear when the device has a video camera or relay sensor set up. Ask your administrator to configure the sensor on the device.

### Is there a 3D follow mode?

No. The live map is always flat and north-up. It follows the vehicle until you drag the map; tap the target icon to follow again.

### How often does the position update?

The Map and List tabs refresh every 10 seconds. The single vehicle live map receives each new position as the device sends it.
