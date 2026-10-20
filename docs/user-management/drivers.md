---
id: drivers
title: Drivers
description: "Add drivers in Traqcare under Settings > Drivers with mobile, licence dates and an RFID Tracking ID, then assign one driver to each vehicle."
sidebar_position: 2
keywords: [drivers, driver profiles, assign driver, driver management]
---

# Drivers

Driver profiles record who drives your vehicles. Assign a driver to a vehicle and their name and mobile number appear in the vehicle's info panel; enter the driver's card number as the **Tracking ID** and a tracker with an RFID or iButton reader shows who swiped in.

The **Drivers** tab is available to reseller accounts and non-reseller admin accounts in the web app. The mobile app shows a vehicle's driver in its details but has no screen for adding drivers.

## Add a driver

1. Click **Settings** in the left sidebar and open the **Drivers** tab.
2. Click **Add Driver**.
3. Fill in the fields:

| Field | What to enter |
|-------|---------------|
| **Client** | Shown to reseller accounts only. The client the driver belongs to; it starts on your own client. A driver can only be assigned to that client's vehicles. |
| **Name** | Required. |
| **Mobile** | Required, 7 to 15 digits, numbers only. |
| **License Number** | Optional. |
| **License Issue Date**, **License Expire Date** | Optional, in YYYY-MM-DD format. |
| **Personal ID** | Optional, for example an employee or ID card number. |
| **Tracking ID** | Optional. The RFID card or iButton ID as your tracker reports it. |

4. Click **Submit**. A new driver starts with the status **Unassigned**.

## Assign a driver to a vehicle

1. Go to **Monitor > Map View** and hover over the **⋯** button next to the vehicle in the object list. On **Monitor > List View**, use the vehicle's **Actions** menu instead.
2. Under **Sharing & Driver**, choose **Assign Driver**.
3. Pick a name in **Select Driver** and confirm.

The list shows only **Unassigned** drivers of the vehicle's client. A vehicle has one assigned driver, and a driver can be assigned to one vehicle. If the vehicle already had a driver, that driver goes back to **Unassigned**.

In **Map View**, the vehicle's info panel shows the assigned driver in the **Driver** row with their mobile number, or **No driver assigned**.

## Driver identification by RFID or iButton

When a tracker reports a driver card ID, Traqcare looks for a driver whose **Tracking ID** matches it (upper or lower case doesn't matter) among the drivers of the vehicle's client and the clients below it.

- **Match found:** the **Driver** row shows that driver's name with a **Current** tag. The name stays until a different card is swiped.
- **No match:** the row shows the card ID with an **Unregistered ID** tag.

Card lookups are cached for up to 10 minutes, so a driver you register just after a swipe can take that long to appear. The mobile app's vehicle details use the same **Current** and **Unregistered ID** labels.

## Manage drivers

Each row has three actions:

- **Modify**: edit the driver's details.
- **Delete**: removes the driver. Any vehicle assigned to them is left without a driver.
- **Detach**: available only for **Assigned** drivers. Removes the driver from the vehicle and sets them back to **Unassigned**.

Search by name or company name, or use the column filters for **Name**, **Status** (Unassigned, Assigned, Inactive), **Company**, **Personal ID**, **Tracking ID / RFID** and **License**. You can sort by the licence dates to find licences that are about to expire.

## Drivers List
![Drivers](/img/screenshots/web/settings-drivers.png)

## Add Driver Form
![Add Driver Form](/img/screenshots/web/add-driver-form.png)

## Common questions

### Why is a driver missing from the Assign Driver list?
The list shows only **Unassigned** drivers that belong to the vehicle's client. Detach the driver from their current vehicle first, or check the driver's **Company** column.

### Can one driver be assigned to two vehicles?
No. A driver who is already assigned to another vehicle can't be assigned again until they are detached.

### Why does the info panel show "Unregistered ID"?
The tracker sent a card ID that doesn't match the **Tracking ID** of any driver in that client. Add the ID to the right driver's profile.

### Can sub-users manage drivers?
No. The **Drivers** tab isn't shown to [sub-users](./sub-users.md); they see a vehicle's driver in the info panel only.
