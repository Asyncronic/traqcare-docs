---
id: gprs-commands
title: GPRS Commands
description: "Send GPRS commands to an online GPS tracker from Traqcare Live Tracking or the mobile app, read the reply and resend from Command History."
sidebar_position: 3
keywords: [GPRS commands, remote commands, immobilize, device control]
---

# GPRS Commands

GPRS commands are text instructions that Traqcare sends to a tracker over its mobile data connection, for example to check its status or location. The tracker's reply is shown on screen and saved in **Command History**. Any user who can see the vehicle can send commands, on the web or in the mobile app.

![Send GPRS Command](/img/screenshots/web/send-gprs-command.png)

## Send a command on the web

1. Open **Live Tracking** and click **⋯** next to the vehicle in the list. The same menu is available on the **Monitor** page.
2. Under **Device Management**, click **Send Command**. The **Send GPRS Command** window opens.
3. On the **Send Command** tab, pick a command from the **Command List**.
4. If the command has fields, fill them in. For a custom command, type the exact command text in **Command**.
5. Click **Send**. The tracker's reply appears under **Response**.

## Send a command in the mobile app

1. Go to the **List** tab and tap the vehicle.
2. Tap **Commands**. You can also open **Live Map** and tap **Commands** there.
3. Choose a command under **Select Command**. For a custom command, type it in **Enter Command**.
4. Tap **Send Command**.

The mobile app opens **Commands** only after the device has sent data and a location. Otherwise it shows "Device is not Online yet" or "Device just Installed".

## Which commands are listed

The **Command List** comes from the device's **Protocol/Port**, so different tracker models show different commands. The screenshot above shows one model's list: Check Location, Stop Engine, Restore Engine, Check Status, Check Parameter, Request Image, Request Video and more. The text of a custom command depends on the tracker manufacturer; the history below shows `status#` as an example. If the protocol has no commands set up, the mobile app offers only **Custom Command**.

## Command History

![Command History](/img/screenshots/web/send-command-history.png)

The **Command History** tab lists the latest 20 commands sent to the vehicle, with the command name, the reply, **Status** (success or failed) and the date. Click **Resend** to send a command again, or **Retry** for one that failed.

## Immobilize and Mobilize

Stopping and restoring the engine has its own **Immobilize** item in the same vehicle menu. It needs the **Immobilize** sensor to be set up for the vehicle; without it, the item is greyed out on the web and hidden in the mobile app. See [Where can I find the option to immobilize a vehicle?](../faq.md#where-can-i-find-the-option-to-immobilize-a-vehicle).

:::warning
**Engine immobilization** is safety-critical. Only immobilize when the vehicle is stopped or moving slowly.
:::

## Common questions

### Can I send a command to an offline tracker?
No. The tracker must be connected. If it isn't, you see "Device not logged in. Please try again later." and the command is saved as failed.

### What if the tracker doesn't reply?
You see "Device didn't respond. Please try again later." and the command is saved as failed. Click **Retry** in **Command History** when the tracker has a good signal.

### Why is the Command List empty?
The device's Protocol/Port has no commands set up. Check that the right **Protocol/Port** is selected in [Device Settings](./device-settings.md), or contact support.

### Do sub-users need special permission to send commands?
No. Every user role can send commands to the vehicles it can see.
