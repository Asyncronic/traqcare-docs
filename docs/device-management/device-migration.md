---
id: device-migration
title: Device Migration
description: "Move vehicles and their GPS devices from one client account to another in Traqcare, on the web (Migrate Devices) or the mobile app."
sidebar_position: 4
keywords: [device migration, transfer device, move device, reassign]
---

# Device Migration

Device migration moves one or more vehicles (objects), together with their GPS devices, from one client account to another. Use it when a vehicle changes owner, or when a device was added under the wrong client. It does not move a device from one vehicle to another. Migration is available to reseller accounts on the web and in the mobile app.

:::tip Video Tutorial
<video controls width="100%">
  <source src="/videos/how-to-migrate-object.mp4" type="video/mp4" />
</video>
:::

## Migrate on the web

1. Open **Settings** and select the **Devices** tab.
2. Click **Migrate Devices**. The **Migrate Object** window opens.
3. Under **From**, choose the client the vehicles belong to now.
4. Under **To**, choose the client that should receive them.
5. Under **Select Users For Access (At least one)**, move the users of the new client who should see the vehicles into **Assigned Users**.
6. Under **Select Objects To Migrate (At least one)**, move the vehicles into **Assigned Objects**. You can search the list by vehicle name or IMEI.
7. Click **Submit**. You see "Objects Successfully Migrated!".

![Device Migration Form](/img/screenshots/web/device-migration-form.png)

The **From** list shows only vehicles that belong directly to that client, not to its sub-clients. **From** and **To** must be different clients.

## Migrate in the mobile app

1. Tap **More**, then **Reseller**.
2. Tap **Migrate Objects**.
3. Choose **Select From Client** and **Select To Client**.
4. Under **Select Objects To Transfer**, pick the vehicles.
5. Under **Select Users To Give Access**, pick at least one user.
6. Tap the save icon at the top right.

## What changes after a migration

- The device and the vehicle belong to the new client.
- The users you selected replace the vehicle's previous list of assigned users.
- The vehicle is removed from its geofence links and object groups.
- Any driver assigned to the vehicle is unassigned.
- Schedules, expenses and command history for the vehicle move to the new client. Expenses lose their driver.
- Trips planned for the vehicle in [Routes & Trips](../routes-and-trips.md) are deleted.
- The vehicle is removed from the old users' alerts. The selected users get the same alert types for it, sent as in-app notifications.
- The subscription status and expiry date don't change, and no coins are used.

## Common questions

### Can I move a tracker to a different vehicle with this?
No. Migration moves whole vehicles between client accounts. To put a different tracker in a vehicle, change the IMEI in **Settings > Devices > Modify**. Traqcare warns that this erases the previous device's data. See [Device Settings](./device-settings.md#modify-a-device).

### Why can't I find a vehicle in the From list?
The list shows only vehicles that belong directly to the selected client. If the vehicle belongs to one of its sub-clients, choose that sub-client under **From**.

### Can I migrate several vehicles at once?
Yes. Select as many vehicles as you need; they all move to the same client with the same users.

### Do I need coins to migrate?
No. Migration doesn't use coins, and the vehicle keeps its current subscription.
