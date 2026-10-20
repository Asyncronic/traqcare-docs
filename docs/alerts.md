---
id: alerts
title: Alerts & Notifications
description: "How Traqcare alerts work - set rules for overspeed, geofences, ignition, SOS and more, get them by push, email, SMS or webhook, and review history."
sidebar_position: 5
keywords: [alerts, notifications, overspeed, geofence alert]
---

# Alerts & Notifications

Alerts tell you when something happens to a vehicle, such as speeding, entering or leaving a geofence, the ignition switching on or an SOS button being pressed. You choose the alert type, the vehicles and how you want to be told; Traqcare checks each vehicle's live data and notifies you when the condition is met.

## How alerts work

1. **You create an alert**: an alert type, a value where needed (for example a speed limit of 80 km/h), the vehicles it covers and the delivery channels. On the web this is **Alerts > Alerts**; on mobile it is **More > Preferences > Alerts Configuration**.
2. **Traqcare checks every live position.** Each time a vehicle sends a live position, its alerts are checked against the new data. Positions that the tracker stored while it had no signal and uploads later go into history but do not trigger alerts.
3. **The alert is saved and sent.** It is recorded in alert history (kept for 90 days) and delivered on the channels you ticked: push notification and web pop-up, email, SMS or webhook.

## Kinds of alerts

- **Speed and movement:** Overspeed (your limit in km/h or mph), Moving (speed rises above 5 km/h from below 5 km/h).
- **Location:** Geofence and POI entry or exit.
- **Sensor states:** Ignition, Power, Door and Air Condition, which need the matching sensor set up on the device.
- **Tracker alarms:** alarms the device raises itself, such as SOS, Power Cut, Vibration and External Low Battery. Which ones you get depends on the tracker model.
- **Fuel and trips:** refuel and fuel theft events, and trip alerts such as Route Deviation.
- **Parking:** turned on per vehicle with the Parking switch. It alerts when the vehicle moves faster than 5 km/h, and on Ignition, Power or Door changes if the vehicle has those sensors. See the [FAQ](./faq.md#what-does-the-parking-switch-do).

The full list with descriptions is on [Alert types](./alerts/alert-types.md).

## Where alerts reach you

- **Web:** a pop-up while the web app is open, and the bell icon in the top bar for the last 24 hours.
- **Mobile:** push notifications on each phone where you are logged in, plus **More > Alerts & Reminders**.
- **Email, SMS and webhook:** per alert, set on the web.

Subscription expiry reminders are separate from alerts: they arrive as push notifications 7 and 2 days before a vehicle's subscription expires and are saved under Reminders & Messages.

## In this section

- [**Alert types**](./alerts/alert-types.md): every alert type and what triggers it.
- [**Creating alerts**](./alerts/creating-alerts.md): step-by-step setup on web and mobile, alert values and editing.
- [**Alert history**](./alerts/alert-history.md): the bell, the mobile Alerts list and the Alert Report.
- [**Notification settings**](./alerts/notification-settings.md): channels per alert, pop-ups, sound and voice alerts.

## Common questions

### Is there an alert when a vehicle goes offline?
No, there is no offline alert type. A vehicle shows as offline when it has sent no data for 2 hours or more. To find offline vehicles, use the Offline Objects Report in [Additional reports](./reports/additional-reports.md).

### Who receives an alert?
The user the alert belongs to. Each user sets up their own alerts. On the web, a reseller or admin can set alerts for a sub-user with **Set Alerts** in **Settings > Sub-Users**.

### Where are dashcam AI alerts?
AI alerts from dashcams (driver and road events) are under **Alerts > AI Alerts** on the web and on the **AI** tab of a vehicle's Alerts screen in the mobile app.
