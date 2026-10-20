---
id: notification-settings
title: Notification Settings
description: "Choose how Traqcare alerts reach you - push, web pop-ups, email, SMS or webhook per alert - and set sound and voice alerts on web and mobile."
sidebar_position: 4
keywords: [notification settings, push notifications, voice alerts, alert sounds]
---

# Notification Settings

Two kinds of settings decide how an alert reaches you: the channels ticked on each alert, and the on-screen, sound and voice switches in the web and mobile apps. An alert is always saved to [Alert History](./alert-history.md), whatever you choose here.

## Channels on each alert

Each alert has its own channels. Set them when you [create the alert](./creating-alerts.md) or with **Modify** on **Alerts > Alerts** (web). The **Enabled** column shows the channels each alert uses.

![User Alerts Setting](/img/screenshots/web/user-alerts-setting.png)

| Channel | What you get |
|---|---|
| **Notification** | A push notification on every phone where you are logged in to the mobile app, and a pop-up in the web app while it is open. The push shows the alert, the vehicle name, the time, the speed (when above zero) and the address; the web pop-up shows the alert, vehicle, time and address. |
| **Email** | An email to the address in the **Email** field. The subject is the alert and the body has the vehicle, time, speed and address. It is only sent if an outgoing email (SMTP) account is set up for the company that owns the vehicle. Resellers find this under **Settings > Profile > Email Configuration (SMTP)**. |
| **SMS** | A text to the number in the **Mobile** field. It is only sent if your service provider has SMS sending set up for your account. |
| **Webhook** | An HTTP GET request to the URL in **Webhook**, with the alert details (IMEI, alert text, coordinates, address, vehicle name, time) as query parameters. |

Email, SMS and webhook can only be set on the web. Alerts created in the mobile app use Notification only.

## Web app settings

1. Go to **Settings > System**.
2. Under **Notification Alerts**, set:
   - **Display Notifications**: shows a pop-up for each alert while the web app is open. On by default.
   - **Notification Sound**: plays a sound with each pop-up. Off by default. SOS alerts use a different sound. The sound only plays when Display Notifications is on.
3. Click **Save Changes**.

The same two switches are at the top of the bell panel, as the bell and speaker icons ("Hide notifications" / "Show notifications" and "Mute notifications" / "Unmute notifications"). There they save as soon as you click.

## Mobile app settings

Go to **More > Preferences**:

| Setting | What it does |
|---|---|
| **Notification** | Turns push notifications on or off for this phone only. Other phones logged in to the same account are not affected. |
| **Voice Alerts** | Speaks "Vehicle is ON" or "Vehicle is OFF" when an Ignition alert arrives while the app is open. On by default. |

Ignition On and Ignition Off push notifications have their own sounds. Tapping a push notification opens the Alerts screen for that vehicle.

## Reminders and messages

Subscription expiry reminders are sent as push notifications 7 days and 2 days before a vehicle's subscription expires. They are also saved to the in-app notification list: the **Reminders & Messages** tab under the bell on the web, and **More > Alerts & Reminders > Reminder & Messages** on mobile.

## Common questions

### Why am I not getting push notifications on my phone?
Check that **Notification** is on under **More > Preferences** on that phone and that the alert has the **Notification** channel ticked. Push is sent only to phones where you are logged in to the app.

### Does turning off Display Notifications stop my alerts?
No. It only hides the pop-ups in the web app. Alerts are still saved to your history, and push, email, SMS and webhook keep working.

### Why don't my email alerts arrive?
Email needs the **Email** channel with an address on the alert, and an SMTP account set up for the company that owns the vehicle. Ask your service provider to check the SMTP setup.

### Can I choose a different alert sound?
No. On the web you can only switch the sound on or off.
