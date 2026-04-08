---
id: video-and-camera
title: Video, Audio & Camera
description: Complete guide to using live video, voice monitor, intercom, video history, AI alert evidence, and device gallery on the Traqcare mobile app.
sidebar_position: 4
keywords: [video, camera, live video, monitor, intercom, talkback, video history, upload, download, AI alerts, evidence, gallery, dashcam, DVR]
---

# Video, Audio & Camera

For vehicles equipped with cameras, the Traqcare mobile app provides live video streaming, audio monitoring, two-way intercom, video history management, AI alert evidence playback, and device image gallery.

:::info Requirement
Camera features are only available for devices with a camera sensor configured. If you do not see the camera icons on your vehicle, contact your administrator to set up the camera sensor in **Device Management > Camera Settings**.
:::

---

## Where to Find Camera Features

Camera features are accessible from two places:

### 1. Object List (List View tab)

Each camera-equipped vehicle shows action icons below its name:

| Icon | Feature | Description |
|------|---------|-------------|
| Video camera | **Live Video** | Open multi-channel live video player |
| Headphones | **Voice Monitor** | Listen to live audio from the vehicle |
| Mic | **Intercom** | Two-way audio communication |
| Image | **Gallery** | View captured device images |
| History clock | **Video History** | Browse and manage recorded video files |

### 2. Single Object Map

When viewing a single vehicle on the map, the action buttons panel at the bottom includes:

- **Video** — Opens live video player
- **Monitor** — Opens voice monitor drawer
- **Intercom** — Opens two-way intercom drawer
- **Gallery** — Opens device image gallery
- **Video History** — Opens recorded video files browser

---

## Live Video

Watch real-time video from vehicle dashcams with multi-channel support.

### How to Use

1. Tap the **video camera icon** on any camera-equipped vehicle, or tap **Video** in the single object action panel
2. The video player opens with up to 4 channels (CH1, CH2, CH3, CH4)
3. Channels with active camera feeds will start streaming automatically
4. Use the layout selector to switch between 1, 2, or 4 channel views

### Controls

- **Play/Stop** — Start or stop individual channel streams
- **Mute/Unmute** — Toggle audio for a channel
- **Screenshot** — Capture a still image from the video feed
- **Fullscreen** — Expand a single channel to full screen
- **Landscape/Portrait** — Rotate the view for better viewing

### Auto-Stop

When you press the back button, lock your phone, or switch to another app, all video streams are **automatically stopped**. The device is told to stop streaming, saving bandwidth and device resources. You will need to restart streams when you return.

---

## Voice Monitor

Listen to live audio from the vehicle's microphone — useful for checking in on drivers or monitoring vehicle sounds.

### How to Use

1. Tap the **headphones icon** on a camera-equipped vehicle, or tap **Monitor** in the single object action panel
2. A drawer opens from the bottom with a waveform visualizer
3. Audio starts streaming automatically
4. Adjust volume using the slider
5. Tap **Stop Monitoring** to end the session

### What Happens Behind the Scenes

- The app connects to the video server via WebSocket to receive audio data
- A command is sent to the device to start transmitting audio (channel depends on device type)
- When you stop, the app sends a stop command to the device and closes the WebSocket

---

## Two-Way Intercom

Communicate directly with the vehicle driver — your voice plays through the vehicle's speaker, and you hear the vehicle's microphone.

### How to Use

1. Tap the **microphone icon** on a camera-equipped vehicle, or tap **Intercom** in the single object action panel
2. Grant microphone permission when prompted (first time only)
3. A drawer opens showing the active intercom session
4. **Speak into your phone** — your audio is transmitted to the vehicle's speaker
5. **Listen** — the vehicle's microphone audio plays through your phone
6. Tap **End Call** to disconnect

### Microphone Permission (iOS)

On iOS, the app must have microphone access. If the permission dialog does not appear:

1. Open **Settings** on your iPhone
2. Scroll down and tap the Traqcare app (or your white-label app name)
3. Enable **Microphone**

:::tip
If the app does not appear in the microphone privacy settings, try uninstalling and reinstalling the app, then open Intercom again.
:::

---

## Video History

Browse, upload, and download recorded video files stored on the device's SD card.

### How to Use

1. Tap the **history clock icon** on a camera-equipped vehicle
2. Select a date range and tap **Search**
3. The screen shows all recorded video segments organized by time, grouped by channel

### Playing a Recording

Tap any video segment to open it in the multi-channel video player. The player will request the device to stream the historical footage for the selected time range.

### Uploading to Cloud

1. Tap the **cloud upload icon** next to any video file
2. A confirmation dialog explains the upload process
3. Tap **Start Upload** — the command is sent to the device
4. The device transfers the file to cloud storage in the background
5. You can leave the screen — the upload continues on the device
6. Once complete, the file appears in the **Saved** tab

### Downloading a Recording

1. Tap the **download icon** next to any video file
2. A confirmation dialog explains the download process
3. Tap **Start Download**
4. The video server records the device stream and converts it to MP4
5. You can navigate to other screens — the download runs in the background
6. When complete, a share dialog opens so you can save the file

### Saved Tab

Switch to the **Saved** tab to see all cloud-uploaded recordings:

- Each entry shows the channel number and time range
- Tap the **play icon** to watch the recording in the built-in video player
- Tap the **download icon** to save the MP4 file to your device
- Pull down to refresh the list

### Limits

- Only **one upload** can run at a time
- Only **one download** can run at a time
- If you tap another file while one is in progress, you will be asked to wait

---

## AI Alert Evidence

ADAS (Advanced Driver Assistance System) and DSM (Driver Status Monitor) alerts capture video evidence of events like lane departure, forward collision, driver fatigue, or distracted driving.

### Viewing Evidence

1. Go to **More > Alerts** or tap an alert notification
2. Open any AI alert (ADAS/DSM type)
3. The detail screen shows event information and attached evidence files
4. Tap any evidence video to open the **built-in video player**

### Video Player Controls

- **Play/Pause** — Standard playback controls
- **Seek** — Drag the progress bar to jump to any point
- **Landscape toggle** — Tap the rotate icon to switch between portrait and landscape for better viewing
- **Close** — Tap the X or press back to return to the alert detail

---

## Device Gallery

View images captured by the device camera (snapshots taken via GPRS command or automated capture).

### How to Use

1. Tap the **image/gallery icon** on a camera-equipped vehicle
2. The gallery shows all captured images in a grid
3. **Tap any image** to open it full-screen
4. Swipe left/right to browse through images
5. Use pinch-to-zoom for details

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No camera icons on vehicle | Camera sensor not configured — contact admin to set up in Device Management > Camera Settings |
| Video shows black screen | Device may be offline or camera disconnected — check device status |
| "Microphone permission required" | Grant microphone access in iOS Settings > (App Name) > Microphone |
| Intercom: can hear but can't speak | Microphone permission not granted or mic is muted by the OS |
| Upload stuck at pending | Device may be offline or has poor network — it will retry when connectivity improves |
| Download timeout | Large recordings may take longer than 5 minutes — try uploading to cloud first, then download from Saved tab |
| "HandshakeException" error | Network/SSL issue — check your internet connection and try again |
| Video keeps streaming after leaving | Update to the latest app version — auto-stop on exit was added in the April 2026 update |
