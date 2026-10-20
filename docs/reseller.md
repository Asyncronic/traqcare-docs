---
id: reseller
title: Reseller Features
description: "What a Traqcare reseller account can do: create client accounts and sub-resellers, add devices, transfer coins and activate or renew subscriptions."
sidebar_position: 14
keywords: [reseller, client management, coins, subscriptions, white-label]
---

# Reseller Features

Reseller features let a Traqcare account run other client accounts: create clients and their logins, build a hierarchy of sub-clients, add devices for them, hand out coins and activate or renew their device subscriptions. They are available to the main login of a client that was created with **Mark as reseller** ticked (role **Reseller Admin**).

![Reseller Management](/img/screenshots/web/reseller-management.png)

## What a reseller account gets

In the web app:

| Feature | Where to find it |
|---------|------------------|
| **Clients** tab: client tree, coin balances per client, add, edit, migrate and delete clients | **Settings > Clients** |
| **Devices** tab: add and manage devices for your clients | **Settings > Devices** |
| **Sim Card Status** tab | **Settings > Sim Card Status** |
| **Wallet & Subscriptions** menu: My Wallet, Subscription, Transfer Coins (each needs the matching coin, subscription or transaction permission; default reseller permissions include them) | Left sidebar |
| **Trash**: Deleted Devices and Deleted Clients, with Restore | Profile menu (your name, top right) |
| **Login Logs** | Profile menu (your name, top right) |

A Non-reseller Admin login doesn't get the three Settings tabs above; its tabs are Object Groups, Sub-Users, Drivers, Profile and System. See [User Management](./user-management.md) for those.

In the mobile app, open **More**. Under **Quick Actions**, the **Reseller** item (shown only to reseller accounts) opens **Add Client**, **Add Object**, **Migrate Objects**, **Activate/Renew**, **Transfer Coins** and **Preferences**. The **More** screen also has an **Include Sub Clients** switch that adds your sub-clients' vehicles to the app's object list.

## How the client hierarchy works

- Every client has one parent client. When you add a client, the parent defaults to your own account.
- In the web app, the **Parent Client** list offers only reseller clients, so new clients go under a reseller.
- A reseller under you can create its own clients. Your login sees the clients, users and vehicles at every level below you.
- Moving a client to a different parent is done with **Migrate Client**, not by editing the client.

## Reseller guides

- [**Client Management**](./reseller/client-management.md): add clients, choose their role, mark sub-resellers, migrate, delete and restore clients.
- [**Coins & Wallet**](./reseller/coins-and-wallet.md): coin balances per subscription term and transfers to sub-clients.
- [**Subscriptions**](./reseller/subscriptions.md): activate and renew device subscriptions, single or in bulk.

## Common questions

### How does an account become a reseller?
The account above it ticks **Mark as reseller** when adding the client, or later with **Modify** in **Settings > Clients**. The client's main login then becomes a Reseller Admin.

### Can my clients see each other's vehicles?
No. A client's logins see only their own client and the clients below it, not clients beside or above them.

### Do my end customers need to be resellers?
No. Leave **Mark as reseller** unticked for customers who only track their own vehicles; their main login becomes a Non-reseller Admin that can still add sub-users and drivers.

### When do subscription reminders go out?
Users get push notifications 7 days and 2 days before a device subscription expires. See [Subscriptions](./reseller/subscriptions.md).
