---
slug: mobile-video-audio-features
title: "Mobile App: Video History Downloads, AI Evidence Playback, Monitor & Intercom"
authors: [traqcare]
tags: [release, feature, mobile, video]
---

Major updates to the Traqcare mobile app for camera-equipped vehicles — video history file management, AI alert evidence playback, live audio monitoring, two-way intercom, and device gallery image viewing.

<!-- truncate -->

## Video History — Upload & Download

The video history files screen now includes full file management capabilities, matching the web app:

### Upload to Cloud

Tap the cloud icon next to any video history file to upload it to cloud storage (S3). The device transfers the file in the background — you can leave the screen while it uploads. Once complete, the file appears in the **Saved** tab.

### Download Recording

Tap the download icon to start a recording download. The video server records the device stream and converts it to MP4. Downloads run in the background — you can navigate to other screens within the app and will be notified via toast when the file is ready for saving.

### Saved Tab

A new **Saved** tab lists all cloud-uploaded recordings for the device. Each entry shows the channel number, time range, and a play/download button. Tap any recording to play it directly in the app using the built-in video player.

### One-at-a-Time Restriction

Only one upload and one download can run at a time. If you tap another file while one is in progress, a notification will inform you to wait.

---

## AI Alert Evidence — In-App Video Playback

AI alert detail screens (ADAS/DSM events) now play evidence videos directly within the app. Previously, evidence files required an external player. Now:

- Tap any evidence video to open the built-in video player
- Toggle between portrait and landscape orientation for better viewing
- Standard playback controls (play, pause, seek)

---

## Voice Monitor

Listen to live audio from in-vehicle microphones directly on your phone:

- Tap **Monitor** on any camera-equipped vehicle
- Audio streams in real time via WebSocket
- Visual waveform indicator shows live audio levels
- Tap **Stop** to end the session — the device is automatically told to stop streaming

---

## Two-Way Intercom

Full two-way audio communication with the vehicle:

- Tap **Intercom** on any camera-equipped vehicle
- Speak through your phone's microphone — audio is transmitted to the vehicle's speaker
- Hear the vehicle's microphone audio simultaneously
- Microphone permission is requested on first use (iOS users: ensure the app appears in Settings > Privacy > Microphone)

---

## Device Gallery — Image Viewer

The device gallery (Object Gallery) page now opens captured images directly when tapped, allowing quick review of device snapshots without leaving the app.

---

## Auto-Stop on Background

When you lock your phone or switch to another app while watching live video, the app now **automatically stops all video streams**. This prevents the device from continuing to stream data when no one is watching — saving bandwidth and device resources.

---

## Connection Reliability

- **HandshakeException handling** — SSL/TLS connection failures are now properly caught across all API calls, preventing app crashes on unstable networks
- **WebSocket readiness check** — Video and audio WebSocket connections now verify the handshake completes before proceeding, surfacing real connection errors instead of failing silently
