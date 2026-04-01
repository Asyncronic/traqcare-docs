---
slug: playback-enhancements
title: "Playback Enhancements: Fixed Distance Stats & Improved Session Handling"
authors: [traqcare]
tags: [release, fix, mobile]
---

Route playback on the mobile app has received several important fixes for distance calculation and session handling.

<!-- truncate -->

## Fixes

### Accurate Distance in Playback Stats

The distance stat in the playback header bar was occasionally showing large negative values. This happened because certain historical data rows returned zero for cumulative distance, throwing off the calculation.

**Fix:** The playback engine now skips zero-distance rows and carries forward the last valid distance value. Total route distance is calculated from the last known good value.

### Stats No Longer Persist Across Sessions

Previously, if you logged out and logged back into a different account, the playback page would briefly show stats from the previous session. 

**Fix:** The playback state is now cleared every time you open the playback page, ensuring you always see fresh data.

### Compact Stats Display

The playback header stats (Distance, Moving, Stopped, Max Speed, Avg Speed) now use:
- **Single decimal** for distance (e.g., "48.0 km" instead of "48.00 km")
- **Compact time format** ("h" instead of "hrs")
- **Auto-scaling text** — values no longer wrap to two lines on smaller screens

## Learn More

See our [Playback Guide](/docs/playback/route-playback) for a complete walkthrough of the playback feature.
