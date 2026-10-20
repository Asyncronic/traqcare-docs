---
id: adding-device
title: Adding a Device
description: "Add a GPS tracker in Traqcare from Settings > Devices > Add Device or the mobile Reseller menu, with IMEI, Protocol/Port and coin activation."
sidebar_position: 1
keywords: [add device, register device, IMEI, QR scan, new device]
---

# Adding a Device

Adding a device registers a GPS tracker under a client account and creates the vehicle (object) that appears on the map. Reseller accounts add devices on the web from **Settings > Devices > Add Device**, or in the mobile app from **More > Reseller > Add Object**.

:::tip Video Tutorial
<video controls width="100%">
  <source src="/videos/how-to-add-object.mp4" type="video/mp4" />
</video>
:::

## Add a device on the web

1. Open **Settings** and select the **Devices** tab.
2. Click **Add Device**.
3. Fill in the **Device Details** tab (fields below).
4. Optional: use **Device Sensors** to switch sensors on or off, **Assign Users** to choose who can see the vehicle, and **Set Alerts** to adjust the default alerts.
5. Click **Submit**. You see "Device Added Successfully!" and the device appears in the list.

![Add Device Form](/img/screenshots/web/add-device-form.png)

### Device Details fields

| Field | What to enter |
|-------|---------------|
| **Client** (required) | The client account the device belongs to. It can't be changed later in **Modify**; use [Device Migration](./device-migration.md) to move the vehicle. |
| **IMEI/Unique ID** (required) | The device ID printed on the tracker or its box. Enter it without leading zeros. |
| **Protocol/Port** (required) | The tracker's protocol, shown as "name (port)". It decides which sensors and GPRS commands are offered for the device. |
| **Model Name** (required) | The tracker model, typed as text. |
| **Device Type** (required) | Wired, Wireless, OBD, Tag or Dashcam. |
| **Device Timezone** (required) | Defaults to your own timezone. |
| **Manufacturer**, **Sim Number**, **Sim Provider** | Optional. |
| **Object Name / Vehicle Name** (required) | The name shown on the map and in reports. |
| **Object Type** (required) | The vehicle type and map icon, for example Car, Truck, Bus or Bike. |
| **Subscription Term** | A coin type, to activate the device now. |
| **Do you want this Subscription to Auto Renew?** | Yes or No. |

**Subscription Term** lists the coin types the selected client has available, with the coin count and the resulting expiry date. Choosing one activates the device straight away and uses one coin from that client. Leave it empty to add the device as **Not Activated** and activate it later from **More > Activate** or [Subscriptions](../reseller/subscriptions.md). These fields appear only if your account can activate subscriptions.

## Add a device in the mobile app

1. Tap **More**, then **Reseller**. This item appears only for reseller accounts.
2. Tap **Add Object**.
3. Select the **Parent Client**, **Device Type** and **Port/Protocol**. Tap **Configure Sensors** next to Port/Protocol to choose sensors.
4. Enter **Model Name**, **Manufacturer** and **Device Id/IMEI**. Tap the QR icon to scan the code on the device instead of typing the IMEI.
5. Enter **Object Name**, pick an icon under **Select Icon**, and choose at least one user under **Select Users To Give Access**. **Sim Number** (digits only) and **Sim Provider** are optional.
6. To activate now, tick **Do you want to activate now?** and choose a coin type.
7. Tap the save icon at the top right.

## Common questions

### What if the IMEI is already registered?
The device is rejected with "Device already added". If the device was deleted earlier, you can add the same IMEI again.

### How do I find a tracker that is sending data but isn't registered?
Click **Check Unregistered** in **Settings > Devices** and search for the IMEI. If it is found, you see its protocol, port and latest data, and **Add Device** opens a pre-filled form.

### Can I add many devices at once?
Yes. Use **Bulk Upload** on the web. See [Device Settings](./device-settings.md#bulk-upload).

### Which alerts are created for a new device?
The **Set Alerts** tab fills in default alerts based on the Device Type; for example, Wireless devices get External Low Battery. You can change them before you click **Submit**.
