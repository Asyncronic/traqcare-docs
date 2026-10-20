---
id: client-management
title: Client Management
description: "Add Traqcare client accounts as a reseller: pick the parent client and role, create the main login, mark sub-resellers, migrate or restore clients."
sidebar_position: 1
keywords: [client management, add client, sub-client, reseller clients]
---

# Client Management

Client management is where a reseller creates and maintains customer accounts. Each client gets a company record and one main login, sits under a parent in your client hierarchy, and can itself be a reseller with clients of its own.

:::tip Video Tutorial
<video controls width="100%">
  <source src="/videos/how-to-add-client.mp4" type="video/mp4" />
</video>
:::

The **Clients** tab is shown only to reseller accounts (Reseller Admin).

## The Clients tab

1. Click **Settings** in the left sidebar and open the **Clients** tab.
2. On the left, click a client in the client tree. The table on the right lists that client's direct sub-clients, and **Available Subscription Coins** shows its balance per coin type (**Available** and **Used**).
3. Narrow the table with the search box (name or company name) or the column filters, such as **Reseller** (Yes/No) and **Status** (Active/Inactive).

Each row has **Modify**, **Copy ID** (copies the client's ID) and, under **More Controls**, **Delete**.

## Client List
![Clients](/img/screenshots/web/settings-clients.png)

## Add a client

1. Click **Add Client**.
2. On the **Client Details** tab, fill in:

| Field | What to enter |
|-------|---------------|
| **Parent Client** | Required. Starts on your own account. Only reseller clients are listed. |
| **Select Role** | Required. The permission set for the new main login. Roles are set up by the platform administrator; pick one that matches your **Mark as reseller** choice. |
| **Company Name** | Required. |
| **Contact Person Name** | Required. Also used as the main login's full name. |
| **Primary Username** | Required, at least 5 characters, no spaces, not already taken. This is the client's login name. |
| **Password** | Required, 6 to 20 characters. |
| **User Timezone**, **Preferred Language** | Prefilled from your account. |
| **Email**, **Mobile** | Optional. |
| **Preferred Distance Unit** | KM or MILES. |
| **City**, **State/Province**, **Zipcode** | Optional. |
| **Country** | Required. |
| **Mark as reseller** | Tick to let the client create its own clients and devices. |

3. If you ticked **Mark as reseller**, open the **Reseller Details** tab: **Support Email**, **Support Contact** and **Preferred Map Center Coordinate** (**Latitude**, **Longitude**). These start with your own values; if the map centre is empty, the client uses its parent's.
4. Click **Save**.

The new main login appears in **Settings > Sub-Users** as **Reseller Admin** if you ticked **Mark as reseller**, otherwise as **Non-reseller Admin**. Either can add its own [sub-users](../user-management/sub-users.md) and [drivers](../user-management/drivers.md).

In the mobile app, add a client from **More > Quick Actions > Reseller > Add Client**. There the reseller box is labelled **Allow this client to create clients and devices**.

## Add Client Form
![Add Client](/img/screenshots/web/add-client-form.png)

## Edit a client

Click **Modify** to change the company and contact details or the **Mark as reseller** box. The parent client is shown read-only, and the username, password and role are not on the edit form. To move a client under another parent, use **Migrate Client**.

## Move a client to another parent

1. Click **Migrate Client**.
2. Choose **Client To Move** and **Where To Move Client**, click **Submit** and confirm.

The client's data (objects, drivers, sub-clients and so on) moves with it. The app warns that this can't be undone and can take several minutes, so keep the window open. To move single devices, see [Device Migration](../device-management/device-migration.md).

## Delete and restore a client

1. Click **Delete** in the client's **More Controls** column (active clients only).
2. Type the exact company name and click **Yes, Permanently Delete**.

The client then moves to **Trash**: it becomes inactive and its logins are deactivated. To undo, open the profile menu (your name, top right), choose **Trash > Deleted Clients** and click **Restore**. The client returns to its original parent and its logins work again. **Delete** inside Trash removes the client for good.

## Common questions

### Can a non-reseller client create its own clients?
No. The **Clients** tab is shown only to reseller accounts.

### How do I see my sub-clients' vehicles?
Your login already sees vehicles at every level below you. In **Settings > Devices**, the **Include Sub Clients** box adds sub-client devices to the list; the mobile app has an **Include Sub Clients** switch on the **More** screen.

### How do I give a client its own coins?
Transfer coins from your wallet. See [Coins & Wallet](./coins-and-wallet.md).
