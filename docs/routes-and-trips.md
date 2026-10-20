---
id: routes-and-trips
title: Routes & Trips
description: "Plan a road route with ordered stops in Traqcare, turn it into a dated trip plan for one vehicle, and get alerts for late arrival or route deviation."
sidebar_position: 8
keywords: [routes, trips, waypoints, route planning, trip scheduling]
---

# Routes & Trips (Web)

A **route** is a saved road path with ordered stops that you plan on the map. A **trip plan** assigns that route to one vehicle with a date and a time for every stop, and Traqcare then follows the vehicle against the plan. Routes and trip plans are managed on the web.

Trips that Traqcare detects automatically from vehicle movement are a different thing: see the [Trip Report](./reports/trip-report.md).

## Create a route

1. Go to **GeoJsons > Route** and click **Add New Route**. A full-screen map opens.
2. Add stops in order. You can:
   - click the map and choose **Add waypoint**;
   - search an address with **Search Address**, or use **My location**;
   - pick a geofence in **Search Zone**, then choose **Add waypoint** or **Add zone to route** (the zone's centre becomes a stop linked to that geofence).
3. The first stop is the start (green marker), the last is the destination (red marker), and the stops between are blue. Drag stops in **Zones Organizer** to change the order, or delete one with **Remove this waypoint**.
4. Optional: click **Optimize Route**. It keeps the first and last stop and reorders the stops in between so that each next stop is the nearest one left.
5. Enter a **Name** (required) and an optional **Description**. **Total Distance** and **Total Time** are calculated from the road route drawn on the map.
6. Click **Save Route**.

The route list shows the starting point, number of stops, distance and duration. Routes have no edit action: to change one, delete it and create it again.

## Create a trip plan

1. In the route list, click **Create Trip Plan** on the route.
2. Enter a **Trip Description** (this becomes the trip name), choose the vehicle in **Select Object**, and set the **Trip Date**.
3. Check the stop table. For each stop it shows **Arrival Time**, **Estimated Distance**, **Estimated Duration**, **Stoppage Duration** and **Departure Time**. The departure time of the first stop is the trip start. Arrival times are calculated from the route's travel times, and each stop between start and destination gets a 5-minute stoppage by default. You can change any arrival time, departure time or stoppage (in Minutes, Hours or Days).
4. Check the totals: **Total Estimated Distance**, **Total Estimated Travel Time**, **Trip Start Time**, **Trip End Time** and **Total Stoppage Duration**.
5. Click **Save Route**. The message "Trip Route Plan created!" confirms the plan.

Saved plans are listed under **GeoJsons > Trips** with Trip Name, Object Name, Trip Start Time, Trip End Time, Starting Point and Total Stops.

## How Traqcare follows a trip plan

- The trip starts when the vehicle is within 100 m of the first stop, the planned departure time has passed, and the vehicle is moving.
- Traqcare then records arrival at and departure from each stop, late arrival, late departure, overstaying at a stop, speed above 60 km/h, leaving the planned route by more than 100 m, and driving in the reverse direction.
- The trip is complete when the vehicle reaches within 100 m of the last stop.

These events are saved as **Trip Alert** entries in the vehicle's [Alert Report](./reports/alert-report.md).

## Routes Management
![Routes](/img/screenshots/web/routes.png)

## Trips Management
![Trips](/img/screenshots/web/trips.png)

## Common questions

### Can I plan routes and trips in the mobile app?

No. Routes and trip plans are created and listed on the web only.

### What does Optimize Route change?

Only the order of the stops between the start and the destination. The start and destination stay where they are, and you confirm the change before it is applied.

### Can one route be used for several vehicles?

Yes. Each **Create Trip Plan** assigns the route to one vehicle, so create one trip plan per vehicle.
