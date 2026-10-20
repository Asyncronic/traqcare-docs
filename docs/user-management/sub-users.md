---
id: sub-users
title: Sub-Users
description: "Add a sub-user in Traqcare under Settings > Sub-Users, link the vehicles they may see, then reset, deactivate or delete the login when needed."
sidebar_position: 1
keywords: [sub-users, create user, user access, vehicle access, permissions]
---

# Sub-Users

A sub-user is an extra login for your fleet account that sees only the vehicles you link to it. Use sub-users for dispatchers, branch managers or customers who need to track some of your vehicles without access to the rest of the account.

The **Sub-Users** tab is available to reseller accounts and to non-reseller admin accounts. Sub-users don't get this tab, so they can't create further logins. Sub-users are managed in the web app only; the mobile app has no screen for them.

## Create a sub-user

1. Click **Settings** in the left sidebar and open the **Sub-Users** tab.
2. Click **Add Sub-Users**. The **Add User** form opens.
3. Fill in the fields:

| Field | What to enter |
|-------|---------------|
| **Client** | Shown to reseller accounts only. The client account the sub-user belongs to; it starts on your own client. The vehicle list at the bottom shows this client's vehicles. |
| **Full Name** | Required. |
| **Username** | Required, no spaces. Usernames are unique across the platform, so a name that is already taken is rejected. |
| **Password** | Required, at least 6 characters. |
| **Mobile**, **Email** | Optional contact details. |
| **Timezone** | Required. Filled in from the client's timezone; change it if the user works in another zone. |
| **Preferred Language** | Required. The language the user sees after signing in. |
| **Give Objects Access (Atleast one)** | Move at least one vehicle from the left list to the right list. These are the only vehicles the sub-user will see. |

4. Click **Submit**.

Every login created on this form gets the **Sub User** role. The form has no role picker.

## What a sub-user can see and do

- **Vehicles:** the map, object lists, dashboard and reports show only the vehicles linked to the sub-user.
- **Settings:** only the **Object Groups**, **Profile** and **System** tabs.
- **Wallet & Subscriptions:** this menu needs coin, subscription or transaction permissions, which the default sub-user permissions don't include.
- **Geofences:** a sub-user sees the geofences they created themselves.
- **Commands:** like every role, the Sub User role includes the `sendCommand` permission, so a sub-user can send commands to their linked vehicles. Link only vehicles the person should be allowed to control.

## Manage existing sub-users

Each row in the list has these buttons:

- **Set Alerts**: view and edit the alerts set up for that user.
- **Link**: opens **Link Objects**, where you add or remove the user's vehicles.
- **Modify**: change the full name, mobile, email, timezone and language. The username can't be changed.
- **Deactivate** / **Activate**: a deactivated user can't sign in, and their open sessions stop working.
- **Reset Password**: set a new password (at least 6 characters, no spaces).
- **Delete**: removes the login and unlinks it from all vehicles.

The list also shows the main login of every client below you. The **Role** column shows **Reseller Admin**, **Non-reseller Admin** or **Sub User**. Main client logins can't be deleted here, and you can't delete your own login. Use the search box (name or company name), or the **Role** and **Status** filters, to narrow the list.

## Sub-Users List
![Sub-Users](/img/screenshots/web/settings-users.png)

## Add User Form
![Add User Form](/img/screenshots/web/add-user-form.png)

## Common questions

### Can a sub-user see vehicles that are not linked to them?
No. For a Sub User account, vehicle lists, live data and reports are limited to the vehicles linked on the **Add User** form or with **Link**.

### Can I give a sub-user admin rights?
Not from this tab: the form always creates a Sub User. An admin login is created together with a new client account. See [Client Management](../reseller/client-management.md).

### Do object groups limit what a sub-user can see?
No. Access comes only from linking vehicles. [Object groups](./object-groups.md) only organise vehicles.

### Why can't I delete a user in the list?
The user is either your own login or the main login of a client (Reseller Admin or Non-reseller Admin). Those can't be deleted from the Sub-Users tab.
