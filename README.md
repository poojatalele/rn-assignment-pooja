# Simple Notes App with Markdown Preview

This is a simple React Native notes app that allows users to write notes in Markdown and preview them.

## Features
- **Edit Mode**: Write notes using a multiline text editor.
- **Preview Mode**: View the rendered Markdown content.
- **Toggle**: Switch easily between Edit and Preview modes.

## How to Run
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start the App**:
    ```bash
    npx expo start
    ```
3.  **Run on Device/Emulator**:
    -   Scan the QR code with the Expo Go app on your Android/iOS device.
    -   Press `a` to run on Android Emulator.
    -   Press `i` to run on iOS Simulator.

## Dependencies
-   `react`: 18.2.0
-   `react-native`: 0.74.5
-   `expo`: ~51.0.28
-   `react-native-markdown-display`: ^7.0.2

## Folder Structure
-   `/src/components`: Contains `Editor.js` and `Preview.js` components.
-   `/src/screens`: Contains the main `Home.js` screen.
-   `App.js`: Entry point of the application.
