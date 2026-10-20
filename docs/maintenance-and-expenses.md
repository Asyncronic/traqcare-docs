---
id: maintenance-and-expenses
title: Maintenance & Expenses
description: "Set service reminders by date, km or engine hours in Traqcare, and record fuel and other vehicle expenses with receipts on the web or mobile app."
sidebar_position: 11
keywords: [maintenance, expenses, service schedule, vehicle costs, fuel expense]
---

# Maintenance & Expenses

Maintenance schedules remind you when a vehicle is due for service, based on time, distance (km) or engine hours. Expenses keep a per-vehicle record of fuel and other costs, with an optional receipt photo.

## Create a maintenance schedule (web)

1. Go to **Maintenance > Maintenance** and click **Add Schedule**.
2. Fill in the details:
   - **Client** (reseller accounts only).
   - **Title** (3 to 200 characters).
   - **Object Name**: the vehicle.
   - **Service Tasks**: one or more tasks from the list, such as Oil Change, Air Filter Replacement, Brake Inspection, Rotate Tires, Insurance Renewal or Regular Service.
3. Under **Service Schedule Method**, choose **Recurring** or **One-Time**. A recurring schedule also needs a **Start Date** (today or later).
4. Turn on at least one trigger. The service is due by whichever trigger is reached first.
   - **Time-Based Trigger**: **Every** N Days, Weeks, Months or Years (recurring), or a **Target Date** (one-time).
   - **Mileage-Based Trigger**: **Every (KM)** or **At Mileage (KM)**.
   - **Engine Hours-Based Trigger**: **Every (Hours)** or **At Engine Hours**.
   - Each trigger has an **Advance Reminder**, which sends the reminder that much earlier. It must be less than the trigger value.
5. Under **Notification Settings**, tick **Push Notification** and choose **Notification Users**, and/or tick **Email** and type **Email Addresses**. At least one recipient is required.
6. Click **Submit**.

### How reminders work

- Traqcare checks schedules every 4 hours.
- A recurring schedule counts from the day it becomes active. For example, "Every 5,000 KM" means 5,000 km after the distance the vehicle has recorded on that day. After a reminder, the trigger that fired starts counting again.
- A one-time schedule sends one reminder and its status changes to **Generated**. A schedule with a future start date shows **Pending** until that date, then **Enabled**.
- The reminder is titled "Maintenance reminder for" the vehicle name and lists the services due. Users get it as an in-app and push notification. In the mobile app it is under **More > Quick Actions > Alerts & Reminders > Reminder & Messages** (filter **Maintenance**).
- Email reminders are sent only when the company the schedule belongs to has an **Email Configuration (SMTP)** (reseller accounts set this in **Settings > Profile**).

Use **Edit** or **Delete** in the **Action** column to change or remove a schedule.

## Record an expense

**Web:** go to **Maintenance > Expense** and click **Add Expense**, or open a vehicle's menu in **Monitor > Map View** or **List View** and choose **Logs & Expenses > Add Expense**.

**Mobile:** open **List**, tap the vehicle and tap **Expenses**, then use the **Add Expense** tab.

Fields:

- **Vehicle** and **Expense Date** (required). On the web, the vehicle's driver is shown if one is assigned.
- **Expense Type**: **Fuel** or **Other**. It cannot be changed after saving.
- For **Fuel**: fuel type, odometer (km), engine reading (hours), fuel volume and cost per volume. **Total Cost** is calculated as volume × cost per volume.
- For **Other**: type the **Total Cost**.
- **Reference**, **Notes** and one receipt image (optional). On mobile you can take the receipt with the camera or pick it from the gallery.

## View expenses

On the web **Expense** page, search by vehicle ID or object name. Expand a row to see the fuel details, reference, notes and receipt, or use the edit and delete icons. In the mobile app, the **Expense List** tab can be filtered by type: **All**, **Fuel** or **Other**. Each vehicle's own list is under **Logs & Expenses > Expense Log** on the web.

## Maintenance Schedules
![Maintenance](/img/screenshots/web/maintenance.png)

## Add Schedule Form
![Add Schedule](/img/screenshots/web/maintenance-add-form.png)

## Expense Tracking
![Expenses](/img/screenshots/web/expenses.png)

## Add Expense Form
![Add Expense](/img/screenshots/web/expense-add-form.png)

## Common questions

### Can one schedule use date, km and engine hours together?

Yes. Turn on any combination of the three triggers. The reminder is sent for whichever is reached first.

### Why didn't I get a maintenance email?

Emails need an SMTP email configuration on the company account and at least one address under **Email Addresses**. Push and in-app reminders go to the users chosen under **Notification Users**.
