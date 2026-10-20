---
id: faq
title: Frequently Asked Questions
description: "Common questions about the Traqcare web platform and mobile app — GPS accuracy, offline devices, odometer, and more."
keywords: [FAQ, frequently asked questions, troubleshooting, help, GPS accuracy, odometer, mobile app]
---

# Frequently Asked Questions

Answers for both the web platform and the mobile app. Where the steps differ, each answer shows **Web** and **Mobile** separately.

### Why is my vehicle showing "Offline"?

Traqcare shows a vehicle as **Offline** when no data has reached the platform for a while: **2 hours or more** on the web, **more than 60 minutes** in the mobile app. Offline vehicles are shown in blue. Possible causes:
- No cellular signal in the area
- Device powered off or disconnected
- SIM card issue (expired, no data balance)
- Device malfunction

Check the device installation and SIM card balance.

### How accurate is the GPS location?

GPS accuracy is typically **3-5 meters** in open areas. In urban canyons, tunnels, or underground parking, accuracy may decrease or the device may temporarily go offline.

### How often does the location update?

This depends on your device configuration. Most devices send updates every **10-30 seconds** while moving, and less frequently when parked to conserve battery and data.

### Can I track on both web and mobile simultaneously?

**Yes!** You can be logged in on both platforms at the same time. Data is synced in real-time across all sessions.

### How do I change the map type?

- **Web:** On Live Tracking, open the map-type control at the top right of the map and choose **Road map**, **Google satellite**, **Google terrain** or **Google hybrid**. Road map and Google hybrid can also show **Traffic**, **Transit** and **Cycling** layers. The default map (Google or OpenStreetMap) is set in **Settings > General settings**.
- **Mobile:** Tap the map-type button to switch between the standard map and satellite view with road labels. A separate button turns live traffic on and off.

### How do I switch between km and miles?

- **Web:** Settings > System > Distance Unit
- **Mobile:** More > Distance Unit > select km or miles

### How do I change the odometer (mileage)?

You can set the odometer to match the vehicle's dashboard, or reset it to 0, from the web platform or the mobile app.

**Web:**
1. Open **Live Tracking** and click the vehicle in the list.
2. In the panel at the bottom, open the **Statistics** tab.
3. Click the edit icon next to **Odometer**.
4. Type the new value in **km** and click **OK**, then **Submit** to confirm.

![Change the odometer on the web](/img/screenshots/web/odometer-edit.png)

![Enter the new odometer value](/img/screenshots/web/odometer-edit-dialog.png)

**Mobile:**
1. Go to the **List** tab and tap the vehicle.
2. Tap **Live Map**.
3. Tap **Odometer** at the bottom left (next to the pencil icon).
4. Type the new value in **km** and tap **Update**.

![Change the odometer in the mobile app](/img/screenshots/mobile/odometer-edit-steps.png)

**Good to know:**
- The odometer is changed one vehicle at a time. To update several vehicles, repeat the steps for each one.
- Always enter the value in km, even if your account shows distances in miles.
- The vehicle must have sent data to the platform at least once before its odometer can be changed.
- On the web, the edit icon is shown to admin and reseller accounts. If you don't see it, log in with your main account.
- After you change it, the odometer keeps counting up from the new value. Distance reports and past trip history are not changed.

### What does the Parking switch do?

The **Parking** switch turns on **Parking Mode**, an anti-theft alert for when the vehicle is parked. While Parking Mode is on, you get a push notification in the mobile app when:

- **The vehicle starts moving** ("Parking Alert : Moving")
- **The ignition (ACC) turns on or off**, if the vehicle has an Ignition sensor set up
- **External power is connected or disconnected**, if the vehicle has a Power sensor set up. This can warn you if someone cuts the tracker's power.
- **A door opens or closes**, if the vehicle has a Door sensor set up

These alerts also appear in the alert list on the platform.

**Web:** open **Monitor** (Object Live Status) and use the switch in the **Parking** column for the vehicle.

![Parking switch on the web](/img/screenshots/web/parking-mode.png)

**Mobile:** go to the **List** tab, tap the vehicle, tap **Parking**, and confirm.

![Parking Mode in the mobile app](/img/screenshots/mobile/parking-mode-steps.png)

**Good to know:**
- Turn it on when you park, and turn it off before you drive. Parking Mode doesn't switch off by itself, so if you leave it on you'll get an alert every time the vehicle starts moving.
- In the mobile app, Parking Mode can only be turned on while the vehicle is stopped.
- Parking Mode only sends alerts. It doesn't stop or immobilize the vehicle, and it doesn't change tracking or reports.

### Where can I find the option to immobilize a vehicle?

**Immobilize** cuts the vehicle's engine remotely, for example after a theft. **Mobilize** (called **Open** in the mobile app) restores it.

Before you can use it:
- The tracker must support engine cut-off, and a **relay** must be installed and wired to the vehicle by your installer.
- The **Immobilize sensor** must be set up for the vehicle on the web platform (Step 1). Until then, Immobilize is greyed out on the web and doesn't appear in the mobile app.

**Step 1: Set up the Immobilize sensor (web, once per vehicle)**
1. Open **Settings** and go to the **Devices** tab.
2. Enter the vehicle's IMEI and click **Search**.
3. Click **Modify** next to the vehicle.

![Find the vehicle in Settings > Devices](/img/screenshots/web/immobilize-1-devices.png)

4. Open the **Device Sensors** tab.
5. Turn on **IMMOBILIZE**.
6. Set **Parameter** to **cutoff** and **Reading Type** to **Direct**.
7. Click **Submit**.

![Turn on the Immobilize sensor](/img/screenshots/web/immobilize-2-sensor.png)

**Step 2: Immobilize from the web**
1. Open **Live Tracking** and click **⋯** next to the vehicle in the list.
2. Click **Immobilize**.

![Immobilize in the vehicle menu](/img/screenshots/web/immobilize-3-menu.png)

3. Click **Immobilize** to stop the engine, or **Mobilize** to restore it. The device's reply is shown below the buttons.

![Immobilize and Mobilize buttons](/img/screenshots/web/immobilize-4-dialog.png)

**Step 2: Immobilize from the mobile app**
1. Go to the **List** tab and tap the vehicle.
2. Tap **Immobilize**. You can also open **Live Map** and tap **Immobilize** there.
3. Tap **Immobilize** to stop the engine, or **Open** to restore it, then tap **Yes** to confirm. The dialog also shows the vehicle's current state.

![Immobilize in the mobile app](/img/screenshots/mobile/immobilize-steps.png)

**Good to know:**
- The tracker must be online to receive the command, and it can take a little time to run. Don't use it when the mobile signal is poor.
- For safety, only immobilize when the vehicle is stopped or moving slowly. Some trackers wait until the vehicle slows down before cutting the engine.
- You can check the current state in **Monitor**, in the **Immobilized** column.
- **cutoff** is the right parameter for most trackers. If the Immobilized state always shows the opposite of the real state, change **Reading Type** to **Reverse**. For other tracker models, or if you're not sure, contact support.

### I'm not able to see the Immobilize option. Why?

Check these, in order:

1. **The Immobilize sensor isn't set up for the vehicle.** This is the most common reason. Without it, **Immobilize** is greyed out in the web menu and doesn't appear in the mobile app at all. Set it up in **Settings > Devices > Modify > Device Sensors**: turn on **IMMOBILIZE**, set Parameter to **cutoff**, and click **Submit**. See [Where can I find the option to immobilize a vehicle?](#where-can-i-find-the-option-to-immobilize-a-vehicle) for the steps with screenshots.
2. **You can't see Settings > Devices.** Sensors are set up from your main (admin) account. If you log in with a sub-user account, or your devices are managed by your provider, ask them to set up the sensor for you.
3. **The mobile app hasn't refreshed yet.** After the sensor is set up on the web, pull down on the **List** tab to refresh, or close and reopen the app.
4. **The vehicle's subscription has expired.** In the mobile app, tapping an expired vehicle shows "Device Expired – Renew this device to continue using it." instead of the vehicle menu. Renew the vehicle to use Immobilize again.
5. **The tracker doesn't support engine cut-off, or no relay is installed.** The option only works on trackers that support it, with a relay wired to the vehicle. Ask your installer or contact support.

### What does the fuel chart show?

The blue line shows fuel level over time, and the dashed line shows cumulative distance. Green markers indicate refueling events, and red markers indicate suspected fuel theft. See the [Fuel Chart Guide](./fuel-management/fuel-chart.md) for details.

### How do I share a vehicle's location?

Select any vehicle, then use the **Share Location** action. Choose an expiry duration, and a shareable link is generated. Anyone with the link can view the live location — no login required.

### What languages are supported?

The mobile app supports **13 languages**: English, Arabic, Portuguese, Vietnamese, French, German, Spanish, Indonesian, Hindi, Nepali, Persian, Pashto, and Serbian.
