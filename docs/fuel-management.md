---
id: fuel-management
title: Fuel Management
description: "Track fuel level, consumption, refuels and suspected fuel theft in Traqcare by calibrating a fuel sensor and reading the Fuel Summary Report."
sidebar_position: 9
keywords: [fuel management, fuel monitoring, fuel theft, fuel sensor]
---

# Fuel Management

Fuel management in Traqcare shows how much fuel a vehicle has, how much it used, when it was refuelled and when fuel dropped in a way that suggests theft. To get these figures, the vehicle needs a fuel level sensor connected to its tracker and set up in Traqcare.

![Fuel Calibration](/img/screenshots/web/fuel-calibration-guide.png)

## How it works

1. **Connect a fuel sensor.** The sensor is wired to the tracker by your installer.
2. **Turn on the fuel sensor in Traqcare.** On the web, open **Settings > Devices**, click **Modify** next to the vehicle, open **Device Sensors**, turn on the fuel sensor and choose its **Parameter** (for example fuel, fuel_value or fuelLevelPercentage).
3. **Calibrate it.** A **Fuel Calibration** tab then appears in the same window. Set the **Sensor Output Unit** and the **Conversion Factor**, then the readings or tank capacity described below, and click **Submit**.
4. **Read the results.** Run the **Fuel Summary Report** and click **View Graph** on a row to open the fuel chart.

## Calibration at a glance

| Sensor Output Unit | What you enter |
|--------------------|----------------|
| **Voltage**, Calibration Type **Automatic** | **Empty Tank Reading** and **Full Tank Reading** in volts (**Half Tank Reading** is optional), plus **Tank Capacity** in liters |
| **Voltage**, Calibration Type **Manual** | A CSV, XLS or XLSX file of voltage and fuel volume pairs. **Download Sample File** gives the template. |
| **Liter**, **Gallon** or **Percentage** | **Tank Capacity** in liters |

The **Conversion Factor** starts at 1.0 and must be greater than zero. Calibrate on level ground, and keep the vehicle stationary for 1 minute after refuelling before you enter the actual refuelling volume. Repeating the calibration can correct deviations. Full steps are in [Fuel Calibration](./fuel-management/fuel-calibration.md).

## Where fuel data appears

- **Fuel Summary Report** (web **Reports**, and **Fuel Summary** under Reports in the mobile app): Fuel Consumed, Theft Event, Fuel Theft, Refuel Event, Fuel Refueled, Distance and Max Speed for the selected period. See [Fuel Summary](./reports/fuel-summary.md).
- **Fuel chart**: fuel level over time, with refuel and theft markers. See [Fuel Chart](./fuel-management/fuel-chart.md).
- **Alert report**: the **Alert Type** filter includes **Refuel** and **Fuel Theft**. See [Alert Report](./reports/alert-report.md).

## Pages in this section

- [**Fuel Chart**](./fuel-management/fuel-chart.md): how to read the fuel chart, its markers and the summary bar.
- [**Fuel Calibration**](./fuel-management/fuel-calibration.md): set up the fuel sensor in **Settings > Devices > Modify > Fuel Calibration**.

## Common questions

### Why don't I see the Fuel Calibration tab?
The tab appears only after you turn on the fuel sensor in the **Device Sensors** tab of the same window. **Settings > Devices** is available to reseller accounts; if you don't see it, ask your provider to set up the sensor.

### My vehicle has no fuel sensor. Why do some reports show fuel?
The Daily Travel and Daily Distance reports estimate Fuel Consumed from distance. If the vehicle's fuel mileage isn't set, they use a default of 8 km per litre and show "Fuel figures are estimated". Click **Set Vehicle Mileage** to enter the real figure, then run the report again.

### Can I calibrate a sensor that reports liters directly?
Yes. Choose **Liter** as the Sensor Output Unit and enter the tank capacity.
