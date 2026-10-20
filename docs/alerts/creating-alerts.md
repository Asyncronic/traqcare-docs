---
id: creating-alerts
title: Creating Alerts
description: "Create an alert in Traqcare on web or mobile - pick the alert type, value, vehicles and delivery channels (notification, email, SMS, webhook)."
sidebar_position: 2
keywords: [create alert, add alert, alert setup, configure alerts]
---

# Creating Alerts

An alert is a rule you set once: an alert type (for example Overspeed), its value, the vehicles it watches and how you want to be told. Traqcare checks the rule every time one of those vehicles sends a live position and notifies you when the condition is met.

## Create an alert on the web

1. In the sidebar, open **Alerts > Alerts**. The page is titled **User Alerts Setting** and lists the alerts you already have.
2. Click **Add**.
3. Resellers only: choose the **Client**, then the **User** who will receive the alert.
4. In **Alert**, pick the alert type. The **Alert Value** field changes with the type (see the table below).
5. To add another alert in the same form, click the green **+** button. The red button removes a row.
6. Tick the channels: **Notification** (bell icon, ticked by default), **Email**, **SMS** and **Webhook**.
7. For Email, SMS or Webhook, fill in the **Email**, **Mobile** or **Webhook** field. Each field becomes editable when its channel is ticked.
8. In **Select Objects**, move vehicles from **Unassigned Objects** to **Assigned Objects**. At least one is required.
9. Click **Add**.

## Create an alert on the mobile app

1. Go to **More > Preferences > Alerts Configuration**.
2. Tap **Add Alert** (or **Create Alert** if you have none yet).
3. Choose the alert type and, where needed, the **Alert Value** or geofence.
4. Under **Select Objects**, pick the vehicles, then tap **Save Alert**.

Alerts created in the mobile app are delivered as notifications only. To add email, SMS or a webhook, edit the alert on the web.

## Alert value by type

| Alert type | Alert Value |
|---|---|
| **Overspeed** | Speed limit, with a **KM/H** or **MPH** selector. The web form starts at 60. |
| **Ignition**, **Power**, **Door**, **Air Condition** | **On**, **Off** or **Both** |
| **Geofence**, **POI** | One or more geofences or POIs, then **Entry**, **Exit** or **Both** |
| **Battery Level** | The level below which the alert fires |
| Other types (for example SOS, Power Cut, Vibration, Moving) | No value needed |

Ignition, Power, Door and Air Condition alerts only work if the vehicle has that sensor set up in its [device settings](../device-management/device-settings.md). Overspeed fires once each time the speed goes from below the limit to the limit or above, not on every position while speeding. See [Alert types](./alert-types.md) for what each type means.

## Alert Creation Form
![Create Alert Form](/img/screenshots/web/alert-create-form.png)

## Other ways to create alerts

- **Geofence list:** open a geofence's menu and choose **Set Alert** to create an entry/exit alert for that geofence.
- **Sub-users:** in **Settings > Sub-Users**, click **Set Alerts** on a user's row to manage that user's alerts.
- **New devices:** when a device is added, the **Set Alerts** step is pre-filled with Overspeed at 60 and Ignition (Both), or External Low Battery for wireless trackers.

## Edit or delete an alert

On **User Alerts Setting**, click **Modify** to change the value, channels, contact fields or vehicles. The alert type can't be changed; delete the alert and create a new one. **Delete** removes the alert straight away.

## Common questions

### Why is Parking not in the alert list?
Parking is turned on per vehicle with the Parking switch, not from this form. See [What does the Parking switch do?](../faq.md#what-does-the-parking-switch-do).

### What happens if I add an alert I already have?
If you already have an alert with the same type and value, the new vehicles are added to it. Its email, SMS and webhook details stay as they were, so use **Modify** to change them.

### Can I set two overspeed limits on the same vehicle?
Use one value per alert type for each vehicle. The app does not reliably check two values of the same alert type on one vehicle.

### Do alerts fire for data the tracker uploads late?
No. Positions the tracker stored while it had no signal and sends later go into history, but they don't trigger alerts.
