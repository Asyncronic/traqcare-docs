---
id: user-management
title: User Management
description: "How Traqcare controls access: sub-user logins that see only linked vehicles, driver profiles with RFID IDs, and object groups for sorting vehicles."
sidebar_position: 13
keywords: [user management, sub-users, drivers, object groups, admin]
---

# User Management (Admin)

User management in Traqcare covers the people around your vehicles: extra logins for your staff or customers (sub-users), the people who drive (drivers), and named sets of vehicles (object groups). All three are tabs under **Settings** in the web app.

![User Management](/img/screenshots/web/user-management.png)

## Where to find it

1. In the web app, click **Settings** in the left sidebar.
2. Open the **Sub-Users**, **Drivers** or **Object Groups** tab.

The mobile app has no screens for creating sub-users, drivers or groups. It does show the driver of a vehicle in the vehicle's details.

## Which tabs each account sees

Which Settings tabs appear depends on the role of the login:

| Login | Settings tabs |
|-------|---------------|
| **Reseller Admin** (main login of a reseller client) | Clients, Devices, Object Groups, Sub-Users, Drivers, Sim Card Status, Profile, System |
| **Non-reseller Admin** (main login of a regular client) | Object Groups, Sub-Users, Drivers, Profile, System |
| **Sub User** | Object Groups, Profile, System |

Every client account gets one main login when the client is created. It becomes a Reseller Admin when the client is marked as a reseller, and a Non-reseller Admin otherwise. See [Client Management](./reseller/client-management.md).

## The three tools

### Sub-Users
A sub-user has their own username and password and sees only the vehicles you link to them, on the map, in lists, on the dashboard and in reports. You can change their vehicles, deactivate the login or reset the password at any time. [Read more about sub-users](./user-management/sub-users.md).

### Drivers
A driver profile holds a name, mobile number, licence details and an optional **Tracking ID**. Assign one driver to each vehicle from the vehicle's menu in Map View or List View. If the tracker has an RFID or iButton reader, the Tracking ID lets Traqcare show which driver swiped in. [Read more about drivers](./user-management/drivers.md).

### Object Groups
An object group is a named set of vehicles. Groups appear in the **Groups** view of the live object list, and the default **Priority Objects** group sets the vehicles on your dashboard. [Read more about object groups](./user-management/object-groups.md).

## How access works

- **Reseller and admin logins** see the vehicles of their own client and of every client below it.
- **Sub-users** see only the vehicles linked to their login.
- **Object groups and drivers don't change access.** Adding a vehicle to a group or a driver to a vehicle doesn't let anyone else see it.
- **Deactivated logins** can't sign in until you activate them again.

## Common questions

### Can a sub-user create other sub-users?
No. The **Sub-Users** tab appears only for Reseller Admin and Non-reseller Admin logins.

### Do object groups limit what a sub-user can see?
No. Visibility comes only from the vehicles linked to the sub-user. Groups only sort vehicles.

### Where do I create client accounts?
Client accounts are a reseller feature in **Settings > Clients**. See [Reseller Features](./reseller.md).

### Where can I see who signed in?
Reseller accounts can open **Login Logs** from the profile menu (your name, top right).
