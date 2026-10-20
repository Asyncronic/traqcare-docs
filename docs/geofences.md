---
id: geofences
title: Geofences
description: "Draw circle or polygon geofences in Traqcare, link vehicles to them, and get entry, exit or both alerts by notification, email, SMS or webhook."
sidebar_position: 6
keywords: [geofence, virtual boundary, zone, entry exit alert, geo-fencing]
---

# Geofences

A geofence is a zone you draw on the map, such as a depot, a customer site or a city area. Traqcare records when a linked vehicle enters or leaves the zone and can alert you on entry, exit or both.

:::tip Video Tutorial
<video controls width="100%">
  <source src="/videos/how-to-add-geofence.mp4" type="video/mp4" />
</video>
:::

## Create a geofence on the web

1. Go to **GeoJsons > Geofence**.
2. In the geofence panel, click the **+** button. Drawing tools appear at the top left of the map.
3. Draw the shape:
   - **Circle**: choose the circle tool, click the centre, then click again to set the size. You can then type an exact **Geofence Radius (meters)**.
   - **Polygon**: choose the polygon tool, click each corner and double-click to finish.
4. To find a place first, type an address in **Search for a location**.
5. Enter a **Name** (required) and pick a **Color**: Red, Green, Yellow, Blue, Pink or Orange.
6. Click **Add**. Use **Reset** to clear the drawing and start again.

## Create a geofence in the mobile app

1. Open **More > Quick Actions > Geofence** and tap **+**.
2. Choose **Custom** and tap the map to place at least three corners (use **Undo** or **Clear Map** to fix mistakes), or choose **Circle**, tap the centre and set the size with the slider (up to 2,000 m).
3. Enter the geofence name and tap **Save**. The map button switches between the standard and satellite (hybrid) view.

See also [Geofences & POI on mobile](./mobile/geofences-and-poi.md).

## Link vehicles and set alerts

Each geofence in the web list has a **⋯** menu:

- **Link Objects to Geofence**: move vehicles to **Selected Objects** and click **Assign Selected Objects to Geofence**. Entry and exit events for the Geofence Dashboard are recorded only for linked vehicles.
- **Set Alert**: choose the **User**, set **Alert Value** to **entry**, **exit** or **both**, pick the channels (Notification, Email, SMS, Webhook) and the vehicles, then click **Add Geofence Alert**. You can also create a Geofence alert from the [Alerts](./alerts/creating-alerts.md) page.
- **Edit Geofence** and **Delete Geofence**.

Alerts read **Enter To** or **Exit From** followed by the geofence name.

## Other ways to add geofences

- **Bulk Upload** (upload icon in the panel): select the client and upload a CSV, XLS, XLSX or KML file. Click **Download Sample File** for the column layout. A circle without a radius gets 500 m.
- **Playback**: click a point, stop or alert on the playback map and choose **Add Geofence**.
- Reseller and admin accounts can tick **Show Clients geofence too** to list their clients' geofences.

To see geofences on the live map, open the map type control in **Monitor > Map View** and turn on **Show Geofence**.

## Geofence Dashboard (web only)

**Dashboard > Geofence Dashboard** loads events from the last 8 days. Pick a zone in **Search Geofence** to see **Total**, **Entered** and **Absent** vehicle counts, the **Weekly Analysis** chart of entries per weekday, and a **Geofence Report** table with Entry Time, Exit Time and Duration. For a chosen date range, use the [Geofence Report](./reports/geofence-report.md).

## Geofence Map View
![Geofences](/img/screenshots/web/geofences.png)

## Geofence Dashboard
![Geofence Dashboard](/img/screenshots/web/geofence-dashboard.png)

## Common questions

### Why didn't I get a geofence alert?

Check that an alert exists for that vehicle and geofence and that its Alert Value matches (entry, exit or both). Traqcare compares each new GPS position with the previous one, so a vehicle that crosses a small zone between two position reports is not detected.

### What is the difference between Link Objects and Set Alert?

Linking records entry and exit events for the dashboard and reports. Set Alert sends you a notification. Use both if you want records and alerts.

### Can I draw a rectangle?

No. The web tools draw circles and polygons, and the mobile app draws circles and custom shapes. Draw a rectangle as a four-corner polygon.
