---
id: object-groups
title: Object Groups
description: "Create object groups in Traqcare Settings to sort vehicles in the live Groups view, and choose up to 20 Priority Objects for your dashboard."
sidebar_position: 3
keywords: [object groups, vehicle groups, fleet groups, organization]
---

# Object Groups

An object group is a named set of vehicles. Use groups to organise a long vehicle list, for example by depot, customer or vehicle type, then switch the live object list to **Groups** to see your vehicles under each group name. Groups organise vehicles; they don't control who can see them.

Every account type, including sub-users, has the **Object Groups** tab in **Settings** on the web.

## Create a group

1. Click **Settings** in the left sidebar and open the **Object Groups** tab.
2. Click **Create Group**. The **Add Object Group** form opens.
3. Enter a **Title**. Each of your groups needs a different title, and the name **Priority Objects** is reserved.
4. Under **Select Objects**, move vehicles from **Unassigned Objects** to **Assigned Objects**. A group needs at least one vehicle.
5. Click **Add**.

A vehicle can belong to several groups. You can also open the same form from **Monitor > Map View**: click the **+** button (tooltip **Add Group**) above the object list.

## View, edit and delete groups

The groups table shows **Group Name**, **Created By**, the group's **Objects**, **Created at** and three actions:

- **View**: lists the group's vehicles with **Object Name**, **Object Imei**, **Object Type** and **Object Status**.
- **Edit**: change the title or the vehicles in the group.
- **Delete**: removes the group after you confirm. The vehicles themselves are not changed.

The tab lists the groups your own login created, plus any group that contains a vehicle your login added.

## The Priority Objects group

Each login has a default group called **Priority Objects**. It is created automatically the first time your dashboard loads and starts with up to 20 of your vehicles. It is listed first, in bold.

- Its title can't be changed and it has no **Delete** button.
- It must hold at least 1 and at most 20 vehicles.
- Its vehicles are the ones shown in the dashboard's **Priority Objects** card. Change them with **Set Priority Objects** on that card, or with **Edit** on this tab.

## Groups in the live object list

1. Go to **Monitor > Map View**.
2. Above the object list, switch from **Objects** to **Groups**.

Each group is shown with its vehicle count, and the eye icon opens the group's details. Vehicles that are in no group are listed under **Default Group**. The Priority Objects group is not shown in this view.

Resellers also see a **Groups** column in **Settings > Devices**, which shows the groups each device's vehicle belongs to.

## Groups List
![Object Groups](/img/screenshots/web/settings-group.png)

## Add Group Form
![Add Group Form](/img/screenshots/web/add-group-form.png)

## Common questions

### Do object groups control what a sub-user can see?
No. A sub-user sees only the vehicles linked to their login under [Sub-Users](./sub-users.md). Groups a sub-user creates can only contain those vehicles.

### Can a vehicle be in more than one group?
Yes. Adding a vehicle to a new group does not remove it from its other groups.

### Why can't I delete the Priority Objects group?
It is the default group that feeds the dashboard's Priority Objects card. You can change its vehicles, but not its name, and you can't delete it.

### Can I manage groups in the mobile app?
No. The mobile app has no object group screens; create and edit groups in the web app.
