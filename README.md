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

## Dependencies
-   `react`: 19.1.0
-   `react-native`: 0.81.5
-   `expo`: ~54.0.25
-   `react-native-markdown-display`: ^7.0.2
-   `react-dom`: (for web support)
-   `react-native-web`: (for web support)

## Folder Structure
-   `/src/components`: Contains `Editor.js` and `Preview.js` components.
-   `/src/screens`: Contains the main `Home.js` screen.
-   `App.js`: Entry point of the application.
