---
id: geofences-and-poi
title: Mobile Geofences & POI
description: "Draw circle or custom geofences and add points of interest in the Traqcare app, then get entry and exit alerts through Alerts Configuration."
sidebar_position: 7
keywords: [mobile geofence, mobile POI, create geofence, manage POI]
---

# Geofences & POI (Mobile)

A geofence is an area you draw on the map, such as a depot or a customer site, so you can be alerted when a vehicle enters or leaves it. A point of interest (POI) is a single named place, such as a fuel station or a branch. Both are saved to your account, so they are shared with the web platform.

## Geofences

Open **More > Geofence**. The list shows your geofences; tap a card to expand it, or use its edit and delete icons.

### Create a geofence

1. Tap **+** in the top bar. The **Add Geofence** screen opens.
2. Choose the shape:
   - **Custom**: tap the map to place each corner. **Undo** removes the last point and **Clear Map** starts again. You need at least three points.
   - **Circle**: tap the map to set the centre, then set the size with the radius slider, from 0 to 2,000 m (it starts at 400 m).
3. Type a name in **Enter Geofence Name**.
4. Tap **Save**.

Use the map-type button to switch to satellite view, and the location button to jump to your own position (needs location permission).

### Create a geofence at a vehicle

1. Open the vehicle's live map: **List > tap a vehicle > Live Map**.
2. Tap **Add Geofence** on the left of the map.
3. Choose **Device Location** (the vehicle's position) or **My Current Location** (your phone's position).
4. A circle geofence is drawn there. Adjust the radius, enter a name and an address in **Enter Address** (required here), then tap **Save**.

### Edit or delete a geofence

Tap the edit icon on a geofence to open **Edit Geofence**, change the shape, size or name, and tap **Save**. To delete, use the delete icon on the card, or **Delete Geofence** on the edit screen, and confirm.

### Get alerts for a geofence

Geofence alerts are set up separately:

1. Open **More > Preferences > Alerts Configuration** and tap **Add Alert**.
2. Choose the vehicles and a location-based alert type.
3. Pick **Entry**, **Exit** or **Both**, select the geofence, and save.

See [Mobile Alerts](./alerts.md) for the full steps.

## Points of interest

Open **More > Point of Interest** to see your POIs.

1. Tap **+** to open **Add POI**.
2. Tap the map where the place is. You can also type coordinates as `latitude, longitude` in the **Search Location** box.
3. Type a name in **Enter POI Name**.
4. Choose a category in **Select POI Type**, for example **Airport**, **ATM**, **Fuel filling station** or **Hospital**. There are 91 categories.
5. Tap **Save**.

To change a POI, tap its edit icon to open **Edit POI**. To remove it, use the delete icon on its card or **Delete POI** on the edit screen.

For more on how geofences and POIs work across the platform, see [Geofences](../geofences.md) and [Points of Interest](../points-of-interest.md).

## Common questions

### Why won't my custom geofence save?

A custom shape needs at least three points on the map, and the geofence needs a name. Add the missing points or name and tap **Save** again.

### What is the largest circle I can draw in the app?

The radius slider goes up to 2,000 m. Use a **Custom** shape for larger areas.

### Does the Search Location box find addresses?

No. It only accepts coordinates in the form `latitude, longitude`. To place a POI by eye, tap the map instead.
