---
id: device-settings
title: Device Settings
description: "Manage trackers in Traqcare Settings > Devices on the web: search, Modify, sensors, Fuel Calibration, Camera Settings, users and Bulk Upload."
sidebar_position: 2
keywords: [device settings, sensor configuration, camera setup, bulk upload]
---

# Device Settings (Web)

**Settings > Devices** is the web page where reseller accounts manage every tracker they and their clients own: find a device, change its details and sensors, choose who can see it, and add devices one at a time or in bulk. The **Devices** tab is shown only to reseller accounts.

## Devices Tab

![Devices Settings](/img/screenshots/web/settings-devices.png)

The list shows each device's IMEI/Unique Id, Object Name, Assigned Driver, Sim Number, Company, Status, Protocol, Model Name and the date it was added. Use the filters at the top to search by IMEI/Unique ID, Object Name, Sim Number or Status, and click **Show Advanced Search** for Device Type, Object Type, Model Name, Sim Provider, Protocol/Port, Manufacturer and Added Between. Tick **Include Sub Clients** to include devices of your sub-clients. The list can be exported to Excel or PDF.

Buttons above the list:

- **Add Device**: add one device. See [Adding a Device](./adding-device.md).
- **Bulk Upload**: add many devices from a file (below).
- **Migrate Devices**: move vehicles to another client. See [Device Migration](./device-migration.md).
- **Check Unregistered**: look up an IMEI that is sending data but isn't registered yet.

Actions on each row:

- **Modify** opens the device form.
- **Copy ID** copies the device's ID to the clipboard.
- **Delete** removes the device after a confirmation that warns it also removes related data, including alerts, history and subscriptions.
- **More > Assign Driver** assigns a driver to the vehicle; **More > Activate** activates a device that isn't activated yet, using coins.
- **Clear Data** permanently deletes the device's tracking and report history. Its configuration, subscription and registration stay.

## Modify a device

1. Open **Settings > Devices** and search for the device.
2. Click **Modify**.
3. Change what you need on these tabs:
   - **Device Details**: IMEI, Protocol/Port, model, type, timezone, SIM and vehicle name. The client can't be changed here.
   - **Device Sensors**: lists the sensors available for the device's Protocol/Port. Turn a sensor on with **Choose**, then select its **Parameter** (for example acc, power, cutoff, fuel or temp1) and **Reading Type** (**Direct** or **Reverse**). When you add a device on the web, two sensors start switched on, with the parameters acc and power.
   - **Fuel Calibration**: appears only when a fuel sensor is turned on. See [Fuel Calibration](../fuel-management/fuel-calibration.md).
   - **Camera Settings**: appears only when the camera sensor is turned on. See [Camera Settings](./camera-settings.md).
   - **Assign Users**: move users between **Unassigned Users** and **Assigned Users** to control who sees the vehicle.
4. Click **Submit**. You see "Device Modified Successfully!".

If you change the IMEI, Traqcare warns that this permanently erases all data from the previous device and suggests downloading a device report first. Click **Yes, Clear Data** to continue.

## Bulk Upload

![Bulk Upload Form](/img/screenshots/web/bulk-upload-form.png)

1. Click **Bulk Upload**.
2. Choose the **Protocol/Port** and the **Client**. All devices in the file get this protocol and client.
3. Move at least one user to the right-hand list under **Users**.
4. Click **Download Sample File** to get the template.
5. Fill in one row per device. The columns are deviceImei, deviceModelName, deviceType, deviceManufacturer, deviceSimNumber, deviceSimProvider, objectName and objectType.
6. Under **Device List File**, click **Upload** and pick your CSV, XLS or XLSX file, then click **Upload** at the bottom.

Rules checked before upload: deviceImei must contain digits only; deviceType must be wired, wireless, obd or tag; objectName and objectType can't be empty. The result shows how many devices were inserted and skipped. IMEIs that are already registered are skipped. Bulk-uploaded devices are added without activation, so activate them afterwards from [Subscriptions](../reseller/subscriptions.md).
