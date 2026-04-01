---
id: alert-types
title: Alert Types
description: All 20+ available alert types in Traqcare including overspeed, geofence, SOS, fuel theft, power cut, harsh driving, and more.
sidebar_position: 1
keywords: [alert types, overspeed, geofence alert, fuel theft, ignition alert, SOS, harsh braking, power cut, vibration alert]
---

# Alert Types

Traqcare supports **20+ alert types** covering safety, security, geofencing, driver behavior, and device health. Alerts are configured and stored in the system — your subscription plan determines which alert types are available.

## Motion & Speed Alerts

| Alert Type | Triggers When | Example Use |
|------------|---------------|-------------|
| **Overspeed** | Vehicle exceeds a configured speed limit | Fleet safety compliance |
| **Moving** | Vehicle starts moving | After-hours departure monitoring |
| **Harsh Acceleration** | Sudden, aggressive acceleration detected | Driver behavior scoring |
| **Harsh Braking** | Sudden, hard deceleration detected | Safety monitoring, insurance |
| **Sharp Left Turn** | Aggressive left turn detected | Driving behavior analysis |
| **Sharp Right Turn** | Aggressive right turn detected | Driving behavior analysis |
| **Rash Turning** | Reckless or repeated sharp turning | Fleet safety programs |
| **Sharp Crash** | Impact or crash event detected | Incident response |
| **Pull / Tow** | Device detects unauthorized towing | Anti-theft protection |
| **Fall** | Device detects a fall event (wearables/portable trackers) | Personal safety monitoring |

## Geofence & Zone Alerts

| Alert Type | Triggers When | Example Use |
|------------|---------------|-------------|
| **Geofence Entry** | Vehicle enters a defined geofence zone | Customer site arrival notification |
| **Geofence Exit** | Vehicle leaves a defined geofence zone | Unauthorized departure detection |
| **Dead Zone Entry** | Vehicle enters a configured no-go zone | Restricted area monitoring |
| **Dead Zone Exit** | Vehicle leaves a no-go zone | Compliance verification |

## Power & Ignition Alerts

| Alert Type | Triggers When | Example Use |
|------------|---------------|-------------|
| **Ignition On (ACC On)** | Engine / ignition switched on | After-hours usage monitoring |
| **Ignition Off (ACC Off)** | Engine / ignition switched off | Unauthorized engine cuts |
| **Power Cut** | External power to the device is cut | Anti-theft tamper detection |
| **Connected to Main Battery** | Device reconnected to vehicle battery | Restoration after tampering |
| **Disconnected from Main Battery** | Device disconnected from vehicle battery | Tamper alert |
| **External Low Battery** | Vehicle battery voltage drops below threshold | Preventive maintenance |
| **External Low Battery Protection** | Battery protection mode activates | Battery health monitoring |
| **Shut Down Due to Low Power** | Device powers down due to insufficient battery | Uptime monitoring |

## Device & Security Alerts

| Alert Type | Triggers When | Example Use |
|------------|---------------|-------------|
| **SOS / Emergency On** | SOS button pressed or emergency activated | Driver emergency response |
| **Emergency Off** | SOS/emergency mode cleared | Post-incident tracking |
| **Emergency Button Tampered** | Emergency button is tampered | Security monitoring |
| **Vibration** | Device detects vibration (parked vehicle movement) | Anti-theft, parking protection |
| **Disassemble / GPS Box Opened** | GPS device casing opened or tampered | Tamper detection |
| **SIM Change** | The SIM card in the device is changed | Device security |
| **Airplane Mode** | Device enters airplane mode | Deliberate signal blocking alert |
| **Alert Over the Air** | Remote alert pushed from the platform to device | Custom remote triggers |
| **GPS First Fix Notice** | Device acquires GPS signal for the first time | Device commissioning |
| **Low Battery** | Device internal battery is low | Portable tracker maintenance |
| **Low Battery Removed** | Internal battery issue resolved/removed | Maintenance tracking |

## Door & Sensor Alerts

| Alert Type | Triggers When | Example Use |
|------------|---------------|-------------|
| **Door Alert** | Door sensor detects open/close events | Cargo security, driver access |
| **Fuel Theft** | Sudden fuel level drop detected | Fuel security monitoring |
| **Maintenance Due** | Scheduled maintenance date or mileage reached | Preventive maintenance |

:::info
Not all alert types are available on every GPS device. Hardware capabilities (e.g., accelerometer for harsh braking, door sensor, fuel sensor) determine which alerts can be activated for a given device. Contact your hardware supplier for device-specific capabilities.
:::

:::tip
For driver behavior programs, combine **Overspeed**, **Harsh Braking**, **Harsh Acceleration**, **Sharp Left Turn**, and **Sharp Right Turn** alerts to build a comprehensive driver scoring profile.
:::
