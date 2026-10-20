---
id: device-management
title: Device Management
description: "How to add GPS trackers in Traqcare, set up sensors and cameras, send GPRS commands and migrate vehicles between client accounts."
sidebar_position: 10
keywords: [device management, GPS device, IMEI, add device]
---

# Device Management

Device management covers everything you do with the GPS trackers themselves: registering them under a client, setting up their sensors and cameras, sending commands to them, and moving vehicles between client accounts. Most of it happens on the web in **Settings > Devices**, and resellers can also add and migrate devices from **More > Reseller** in the mobile app.

## Who can do what

| Task | Where | Who |
|------|-------|-----|
| Add, modify, delete and bulk-upload devices | Web: **Settings > Devices** | Reseller accounts. The **Devices** tab is not shown to other roles. |
| Add a device, migrate vehicles | Mobile: **More > Reseller** | Reseller accounts. The **Reseller** item is shown only to them. |
| Send GPRS commands | Web: **Live Tracking > ⋯ > Send Command**; mobile: **List > vehicle > Commands** | Every user role, for the vehicles it can see. |

If you log in with a sub-user account, or your devices are managed by a provider, ask them to add devices or change sensors for you.

## Pages in this section

- [**Adding a Device**](./device-management/adding-device.md): register a tracker with its IMEI/Unique ID, Protocol/Port, model, vehicle name and type, and optionally activate it straight away with a coin. On mobile you can scan the IMEI with the QR icon.
- [**Device Settings**](./device-management/device-settings.md): the **Settings > Devices** list on the web: search and filter devices, **Modify** a device, switch sensors on with a Parameter and Reading Type, assign users, clear tracking data, and add many devices at once with **Bulk Upload** (CSV, XLS or XLSX).
- [**Camera Settings**](./device-management/camera-settings.md): set the number of channels, the camera's device ID and the video platform for dashcams and DVRs. The tab appears only after you turn on the camera sensor.
- [**GPRS Commands**](./device-management/gprs-commands.md): send a command from the list for the device's protocol, or a custom command, read the reply, and resend from **Command History**. The tracker must be online.
- [**Device Migration**](./device-management/device-migration.md): move vehicles with their devices from one client account to another, on the web (**Migrate Devices**) or in the mobile app (**Migrate Objects**).

Fuel sensors are set up from the same device form. See [Fuel Management](./fuel-management.md).

## Before you start

- Have the device's IMEI or unique ID ready. It is printed on the tracker or its box. Enter it without leading zeros.
- Know the tracker's protocol. The **Protocol/Port** you choose decides which sensors and commands Traqcare offers for the device.
- To activate a device when you add it, the client needs an available coin of the subscription term you want. See [Coins & Wallet](./reseller/coins-and-wallet.md) and [Subscriptions](./reseller/subscriptions.md).

## Common questions

### Why don't I see Settings > Devices?
The **Devices** tab is shown only to reseller accounts. Sub-users and client admins don't see it.

### Where do I set up the Immobilize option?
In **Settings > Devices > Modify > Device Sensors**, turn on the Immobilize sensor. The steps are in [Where can I find the option to immobilize a vehicle?](./faq.md#where-can-i-find-the-option-to-immobilize-a-vehicle).

### What happens when a vehicle's subscription expires?
In the mobile app, tapping an expired vehicle shows "Device Expired" instead of the vehicle menu, so commands and other actions aren't available until it is renewed.
