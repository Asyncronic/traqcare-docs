---
id: points-of-interest
title: Points of Interest
description: "Save named map points (POIs) such as depots, fuel stations or client sites in Traqcare, show them on the live map and get arrival alerts."
sidebar_position: 7
keywords: [POI, points of interest, markers, locations, landmarks]
---

# Points of Interest (POI)

A point of interest (POI) is a single named location saved as a marker, for example a customer site, a depot or a fuel station. Use POIs to see important places on the live map and to get an alert when a vehicle arrives at or leaves one.

A POI is a point, not an area. To watch a whole zone, draw a [geofence](./geofences.md) instead.

:::tip Video Tutorial
<video controls width="100%">
  <source src="/videos/how-to-add-a-poi.mp4" type="video/mp4" />
</video>
:::

## Create a POI on the web

1. Go to **GeoJsons > POI**.
2. In the POI panel, click the **+** button. A marker tool appears at the top left of the map.
3. Choose the marker tool and click the map where the POI is. To move the map first, type an address in **Search for a location**.
4. Check the position in **Latitude** and **Longitude** and correct it if needed.
5. Enter a **Name** (required).
6. Choose a **Type**, such as Airport, Bank, Depot, Factory, Fuel filling station, Hospital, Warehouse or Other places. The list has about 90 types and you can type to search it.
7. Click **Add**.

The type is saved as a label. It does not change the marker icon on the map.

## Create a POI in the mobile app

1. Open **More > Quick Actions > Point of Interest** and tap **+**.
2. Tap the map to place the marker.
3. Enter the POI name, choose a type under **Select POI Type**, and tap **Save**.

To change or remove a POI, tap it in the list, edit it and tap **Save**, or tap **Delete POI**.

## Manage POIs on the web

Each POI in the list has a **⋯** menu with the same actions as geofences: link vehicles, edit, set an alert, or delete. The menu items keep the geofence names (for example **Edit Geofence**).

Other ways to add POIs:

- **Bulk Upload** (upload icon in the panel): select the client and upload a CSV, XLS, XLSX or KML file. Click **Download Sample File** for the columns. The POI type must match a name from the list exactly. If it is empty, **Other places** is used.
- **Playback**: click a point, stop or alert on the playback map and choose **Add Poi**.
- Reseller and admin accounts can tick **Show Clients poi too** to list their clients' POIs.

## Show POIs on the live map

In **Monitor > Map View**, open the map type control and turn on **Show POI**. The same control has the **Show Geofence** switch.

## POI Map View
![Points of Interest](/img/screenshots/web/pois.png)

## Common questions

### How do I get an alert when a vehicle reaches a POI?

On the web, open the POI's **⋯** menu and choose **Set Alert**. Pick the user, set **Alert Value** to **entry**, **exit** or **both**, choose the channels and vehicles, and click **Add Geofence Alert**. Alerts read **Enter To** or **Exit From** followed by the POI name.

### How close does a vehicle have to be to count as at a POI?

Within 200 m of the POI's point. Traqcare compares each new GPS position with the previous one, so an alert fires when a vehicle moves from more than 200 m away to within 200 m, or the other way.

### Can I give a POI its own radius?

No. The POI forms on the web and mobile have no radius field. If you need a different size, draw a circle [geofence](./geofences.md).

### Why can't I see my POIs on the live map?

Turn on **Show POI** in the map type control in **Monitor > Map View**.
