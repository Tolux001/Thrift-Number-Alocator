# Thrift Number Allocator

A small browser app to assign unique random numbers to participants (useful for raffles, thrift allocations, and draws).

Enter a collector name, set the maximum number, and list participants. The app picks a distinct random number for every participant (no duplicates), stores the outcome in Firestore, and redirects you to a shareable results page.

A lightweight web app that assigns each participant a unique random number within a user-defined range, saves the results to Firestore, and provides a shareable result link — ideal for raffles, draws, or thrift allocations.

## Features

- Add multiple participants
- Generate unique random numbers within a specified range
- Persist results to Firestore and share via a result link

## Files

- [Test/index.html](Test/index.html) — Input UI
- [Test/app.js](Test/app.js) — Main logic and Firestore writes
- [Test/result.html](Test/result.html) — Display saved results
- [Test/firebase.js](Test/firebase.js) — Firebase initialization (client-side)
- [Test/style.css](Test/style.css) — Styles

## Local usage

1. Open [Test/index.html](Test/index.html) in a modern browser that supports ES modules.
2. Fill `Collector Name`, `Maximum Number`, and participant names.
3. Click `Generate Random Numbers` — results are saved to Firestore and you are redirected to a shareable result link.

No build step is required; this is a static client app.

## Firebase & Security

- The Firebase web config in `firebase.js` is intentionally public (API key is not a secret). Protected by only allowing authorized domain and protecting your data by configuring Firestore Security Rules and requiring authentication for sensitive operations.

## License

MIT
