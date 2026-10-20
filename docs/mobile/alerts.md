---
id: alerts
title: Mobile Alerts
description: "Set up vehicle alerts in the Traqcare app, receive them as push notifications or spoken alerts, and review the last 24 hours of alerts per vehicle."
sidebar_position: 6
keywords: [mobile alerts, push notifications, alert history, voice alerts]
---

# Mobile Alerts

Alerts tell you when something happens to a vehicle, such as ignition on or off, overspeed, or entering a geofence. In the Traqcare app you choose which alerts you want in **Alerts Configuration**, receive them as push notifications, and review recent alerts from the Dashboard, the More tab or a single vehicle.

![Mobile Alerts](/img/screenshots/mobile/alerts.jpg)

## Create an alert

1. Open **More > Preferences > Alerts Configuration**. The **User Alerts** screen lists the alerts you already have ("n alerts configured").
2. Tap **Add Alert** (the + button), or **Create Alert** if the list is empty. The **Add Alerts** screen opens.
3. Under **Select Objects**, pick the vehicles the alert applies to.
4. Under **Select Alerts**, choose an alert type. Some types ask for a value:
   - **On/Off state alerts**: **On**, **Off** or **Both**.
   - **Location-based alerts**: **Entry**, **Exit** or **Both**, plus the geofence.
   - **Custom value alerts**: a number. Overspeed starts at 80 km/h (50 mph if your unit is miles); battery level starts at 20% and must be 0 to 100.
5. Tap the small + button beside a row to add another alert type to the same set. Each type can be used once per set.
6. Tap the save icon. You see "Settings saved successfully".

To change or remove an alert, use the edit or delete icon on its card in **User Alerts**. Each card shows how many **Objects** it covers and where it is **Enabled On**. Alerts created in the app are delivered as app notifications; email, SMS and webhook delivery are set up on the web platform (see [Creating Alerts](../alerts/creating-alerts.md)).

## See recent alerts

- **Dashboard**: the bell icon and the **Recent Alerts** card. See [Mobile Dashboard](./dashboard.md).
- **More > Alerts & Reminders > Alerts**: alerts for all your vehicles.
- **One vehicle**: **List > tap a vehicle > Alerts**.

The alerts list covers the **last 24 hours**. You can search by alert name, vehicle name or IMEI, filter by type (**All Alerts**, **Parking**, **Moving**, **Ignition**) or by vehicle, and pull down to refresh. Tap an alert to see where it happened on a map, with the address and time.

For vehicles with a video camera, the vehicle's alerts screen has two tabs: **Events** for standard alerts and **AI** for ADAS/DSM camera events. The AI tab offers **Today**, **Yesterday**, **7 Days** and **Custom Range**, and plays the evidence video once the camera has uploaded it ("Evidence uploading…" until then).

**More > Alerts & Reminders > Reminder & Messages** shows scheduled reminders and messages, filtered by **Reminder**, **Message** or **Maintenance**.

## Notifications and voice alerts

- **More > Preferences > Notification** turns push notifications on or off for this phone.
- **More > Preferences > Voice Alerts** reads an alert aloud when it arrives while the app is open. The voice is English. Voice alerts are on until you turn them off.
- Tapping a push notification opens that vehicle's alerts.
- You also get a push notification 7 days and 2 days before a device subscription expires.

## Common questions

### Why do I only see alerts from the last day?

The mobile alerts list loads the last 24 hours. For older alerts, open **List > tap a vehicle > Reports > Alerts** and choose a date range.

### Why didn't the voice read out an alert?

Voice alerts only play while the app is open on screen. In the background you get the normal push notification instead.

### Can I send alerts by email or SMS from the app?

Not from the mobile form. Set up email, SMS or webhook delivery on the web platform.
