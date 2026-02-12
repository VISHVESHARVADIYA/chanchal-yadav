# ChiyaFlix - Adding New Videos & Photos

This guide explains step-by-step how to add new videos, episodes, series, and profile photos to ChiyaFlix.

---

## Table of Contents

1. [Google Drive Video Setup](#1-google-drive-video-setup)
2. [Adding a New Episode to an Existing Series](#2-adding-a-new-episode-to-an-existing-series)
3. [Adding a New Series](#3-adding-a-new-series)
4. [Adding Custom Thumbnail Images](#4-adding-custom-thumbnail-images)
5. [Adding Profile Photos](#5-adding-profile-photos)
6. [Directory Structure Reference](#6-directory-structure-reference)
7. [Naming Conventions](#7-naming-conventions)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Google Drive Video Setup

### Step 1: Upload your video to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Click **+ New** > **File upload**
3. Select your video file and wait for upload to complete

### Step 2: Set sharing permissions

1. Right-click the uploaded video in Google Drive
2. Click **Share** > **Share**
3. Under "General access", change from "Restricted" to **"Anyone with the link"**
4. Set the role to **"Viewer"**
5. Click **Done**

### Step 3: Get the embed URL

1. Right-click the video > **Share** > **Copy link**
2. The link will look like:
   ```
   https://drive.google.com/file/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ/view?usp=sharing
   ```
3. Extract the **FILE_ID** (the long string between `/d/` and `/view`):
   ```
   1aBcDeFgHiJkLmNoPqRsTuVwXyZ
   ```
4. Construct the embed URL:
   ```
   https://drive.google.com/file/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ/preview
   ```

This embed URL is what you'll paste into `lib/data.ts`.

---

## 2. Adding a New Episode to an Existing Series

### Step 1: Open `lib/data.ts`

This is the **only file** you need to edit for adding episodes.

### Step 2: Find the episodes array

Look for the `chiyaGanduEpisodes` array (or the episodes array for your series):

```typescript
export const chiyaGanduEpisodes: Episode[] = [
  // ... existing episodes
]
```

### Step 3: Add a new episode object

Copy an existing episode as a template and add it at the end of the array (but before the closing `]`):

```typescript
{
  id: "chiya-gandu-s1-e11",          // Unique ID: {series-id}-s{season}-e{episode}
  seriesId: "chiya-gandu",           // Must match the series ID
  seasonNumber: 1,                   // Season number
  episodeNumber: 11,                 // Episode number (next sequential)
  title: "Your Episode Title",       // Display title
  description: "A brief description of what happens in this episode.",
  duration: "25m",                   // Duration string (e.g., "25m", "1h 10m")
  thumbnailGradient: "from-pink-500 to-rose-800",  // Tailwind gradient classes
  videoUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview",
  isNew: true,                       // Set to true to show "NEW" badge
},
```

### Step 4: Save the file

The episode will appear automatically on the series detail page.

### Gradient Color Options for Thumbnails

Use any combination of Tailwind gradient colors:
- Warm: `from-rose-500 to-red-800`, `from-amber-600 to-yellow-900`, `from-orange-500 to-rose-800`
- Cool: `from-blue-500 to-indigo-800`, `from-cyan-500 to-blue-800`, `from-indigo-600 to-slate-900`
- Nature: `from-green-500 to-emerald-800`, `from-teal-500 to-cyan-800`
- Neutral: `from-gray-500 to-zinc-800`, `from-stone-500 to-neutral-800`

---

## 3. Adding a New Series

### Step 1: Create the series object in `lib/data.ts`

Add to the `placeholderSeries` array (or create a new exported array):

```typescript
{
  id: "my-new-series",                              // kebab-case unique ID
  title: "My New Series",                            // Display title
  description: "A short description for cards.",      // Short desc for browse cards
  longDescription: "A longer description...",         // Full desc for series page
  thumbnailGradient: "from-blue-600 via-indigo-700 to-violet-800",
  backdropGradient: "from-blue-950 to-black",
  genre: ["Romance", "Drama"],                       // 1-3 genres
  year: 2024,
  maturityRating: "U/A 13+",                         // U, U/A 7+, U/A 13+, U/A 16+, A
  matchPercentage: 95,                               // 80-99
  seasons: 1,
  cast: ["Person 1", "Person 2"],
  tags: ["Heartwarming", "Sweet"],
},
```

### Step 2: Create episodes for the new series

Create a new exported array below the series:

```typescript
export const myNewSeriesEpisodes: Episode[] = [
  {
    id: "my-new-series-s1-e01",
    seriesId: "my-new-series",
    seasonNumber: 1,
    episodeNumber: 1,
    title: "Episode Title",
    description: "Episode description.",
    duration: "24m",
    thumbnailGradient: "from-blue-500 to-indigo-800",
    videoUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview",
    isNew: true,
  },
  // ... more episodes
]
```

### Step 3: Update the `allSeries` array

Add your new series to the combined array:

```typescript
export const allSeries: Series[] = [chiyaGanduSeries, ...placeholderSeries]
```

If you created a separate array, also add it here.

### Step 4: Update the helper functions

In `getEpisodesBySeriesId()`, add a case for your new series:

```typescript
export function getEpisodesBySeriesId(seriesId: string): Episode[] {
  if (seriesId === "chiya-gandu") return chiyaGanduEpisodes
  if (seriesId === "my-new-series") return myNewSeriesEpisodes  // ADD THIS
  return []
}
```

Also update `getEpisodeById()`:

```typescript
export function getEpisodeById(episodeId: string): Episode | undefined {
  return [...chiyaGanduEpisodes, ...myNewSeriesEpisodes].find(
    (e) => e.id === episodeId
  )
}
```

### Step 5: Add to home page content rows

In the `contentRows` array, add your series to the relevant rows:

```typescript
{
  id: "trending-now",
  title: "Trending Now",
  items: [
    myNewSeries,    // ADD your series reference here
    // ... other items
  ],
},
```

---

## 4. Adding Custom Thumbnail Images

Instead of gradient placeholders, you can use real images.

### Step 1: Create the directory structure

```
public/
  thumbnails/
    chiya-gandu/
      backdrop.jpg         # Series backdrop (1920x1080 recommended)
      ep-01-thumb.jpg      # Episode 1 thumbnail (640x360 recommended)
      ep-02-thumb.jpg
      ...
    my-new-series/
      backdrop.jpg
      ep-01-thumb.jpg
```

### Step 2: Update the types (one-time setup)

In `lib/types.ts`, the Series and Episode types already support image URLs. To switch from gradients to real images, add these optional fields:

```typescript
// In Series interface, you can add:
thumbnailUrl?: string    // e.g., "/thumbnails/chiya-gandu/thumb.jpg"
backdropUrl?: string     // e.g., "/thumbnails/chiya-gandu/backdrop.jpg"

// In Episode interface, you can add:
thumbnailUrl?: string    // e.g., "/thumbnails/chiya-gandu/ep-01-thumb.jpg"
```

### Step 3: Update the components

In `components/netflix/title-card.tsx` and `components/netflix/episode-card.tsx`, replace the gradient div with an `<img>` tag when a `thumbnailUrl` is provided:

```tsx
{series.thumbnailUrl ? (
  <img
    src={series.thumbnailUrl}
    alt={series.title}
    className="absolute inset-0 w-full h-full object-cover"
  />
) : (
  <div className={`absolute inset-0 bg-gradient-to-br ${series.thumbnailGradient}`} />
)}
```

### Image Specifications

| Image Type | Recommended Size | Aspect Ratio | Format |
|---|---|---|---|
| Series Backdrop | 1920 x 1080 px | 16:9 | JPG/WebP |
| Series Thumbnail | 640 x 360 px | 16:9 | JPG/WebP |
| Episode Thumbnail | 640 x 360 px | 16:9 | JPG/WebP |
| Profile Avatar | 320 x 320 px | 1:1 | JPG/PNG |

---

## 5. Adding Profile Photos

### Step 1: Place images in the public directory

```
public/
  profiles/
    chiya-gandu.jpg
    my-love.jpg
```

### Step 2: Update profile data

In `lib/data.ts`, add an `avatarUrl` field to the profile:

```typescript
{
  id: "chiya-gandu",
  name: "Chiya Gandu",
  avatarColor: "#E50914",        // Fallback color
  avatarInitial: "C",            // Fallback initial
  avatarUrl: "/profiles/chiya-gandu.jpg",  // ADD THIS
},
```

### Step 3: Update the profile card component

In `components/netflix/profile-card.tsx`, add image rendering:

```tsx
{profile.avatarUrl ? (
  <img
    src={profile.avatarUrl}
    alt={profile.name}
    className="w-full h-full object-cover"
  />
) : (
  <div className="w-full h-full flex items-center justify-center"
       style={{ backgroundColor: profile.avatarColor }}>
    <span className="text-3xl font-bold">{profile.avatarInitial}</span>
  </div>
)}
```

---

## 6. Directory Structure Reference

```
ChiyaFlix/
|
+-- lib/
|   +-- data.ts              <-- MAIN FILE TO EDIT for all content changes
|   +-- types.ts             <-- TypeScript interfaces (rarely needs changes)
|
+-- public/
|   +-- thumbnails/           <-- Optional: Real thumbnail images
|   |   +-- chiya-gandu/
|   |   |   +-- backdrop.jpg
|   |   |   +-- ep-01-thumb.jpg
|   |   |   +-- ep-02-thumb.jpg
|   |   |   +-- ...
|   |   +-- [new-series-slug]/
|   |       +-- backdrop.jpg
|   |       +-- ep-01-thumb.jpg
|   |
|   +-- profiles/             <-- Optional: Real profile avatars
|       +-- chiya-gandu.jpg
|       +-- my-love.jpg
|
+-- app/
|   +-- browse/page.tsx       <-- Home dashboard (auto-reads from data.ts)
|   +-- series/[id]/page.tsx  <-- Series detail page (auto-reads from data.ts)
|   +-- watch/[episodeId]/    <-- Video player (auto-reads from data.ts)
|   +-- search/page.tsx       <-- Search page (auto-searches data.ts)
|   +-- profiles/page.tsx     <-- Profile selection
|
+-- components/netflix/       <-- UI components (rarely need changes)
    +-- navbar.tsx
    +-- hero-banner.tsx
    +-- content-row.tsx
    +-- title-card.tsx
    +-- episode-card.tsx
    +-- video-player.tsx
    +-- ...
```

---

## 7. Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Series ID | kebab-case | `chiya-gandu`, `midnight-conversations` |
| Episode ID | `{series-id}-s{season}-e{episode}` | `chiya-gandu-s1-e01` |
| Thumbnail files | `ep-{number}-thumb.jpg` | `ep-01-thumb.jpg` |
| Backdrop files | `backdrop.jpg` | `backdrop.jpg` |
| Profile photos | `{profile-name}.jpg` | `chiya-gandu.jpg` |
| Thumbnail dirs | Same as series ID | `public/thumbnails/chiya-gandu/` |

---

## 8. Troubleshooting

### Google Drive video not playing
- **Check sharing permissions**: The file must be set to "Anyone with the link" can view
- **Check the URL format**: Must end with `/preview`, not `/view`
- **File too large**: Google Drive has streaming limits. Keep videos under 5GB
- **Blocked by organization**: If using a school/work account, sharing may be restricted

### Thumbnail not loading
- Verify the file exists in the `public/` directory at the exact path specified
- Check the file extension matches (case-sensitive on some systems)
- Ensure the path starts with `/` (e.g., `/thumbnails/chiya-gandu/ep-01-thumb.jpg`)
- Clear browser cache and refresh

### Episode not appearing
- Ensure the episode is added to the correct array in `lib/data.ts`
- Check that the `seriesId` field matches the parent series `id`
- Verify there are no JSON/TypeScript syntax errors (check for missing commas)
- Make sure the `getEpisodesBySeriesId()` function returns your episodes array

### Series not appearing in search
- Verify the series is included in the `allSeries` array
- Check that the series has a `title`, `description`, and `genre` filled in
- The search checks title, description, genres, and tags

### New series not showing on home page
- Add the series to at least one `contentRows` entry in `lib/data.ts`
- Import the series variable if it's in a separate file

---

## Quick Reference: Adding a Video in 3 Steps

1. **Upload** video to Google Drive and set sharing to "Anyone with the link"
2. **Copy** the file ID from the share URL
3. **Edit** `lib/data.ts` -- add an episode object with the video URL: `https://drive.google.com/file/d/{FILE_ID}/preview`

That's it! Save the file and your new episode is live.
