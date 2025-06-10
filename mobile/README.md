# CropDoctor Mobile App

A mobile application that provides a WebView interface for cropdoctor.in with AdMob integration.

## Features

- WebView integration of cropdoctor.in
- Responsive navigation controls (back, refresh)
- Loading indicators and error handling
- AdMob banner integration
- Modern black and white UI theme

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## Installation

1. Clone the repository and navigate to the mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. Update AdMob IDs:
- Open `src/components/AdBanner.tsx`
- Replace the test AdMob IDs with your production IDs
- Update the AdMob App ID in `app.json` for both iOS and Android

## Running the App

1. Start the development server:
```bash
npm start
```

2. Run on specific platforms:
- iOS: `npm run ios`
- Android: `npm run android`
- Web: `npm run web`

## AdMob Integration

The app uses AdMob for monetization. During development, it uses test ad unit IDs:
- Android Banner: 'ca-app-pub-3940256099942544/6300978111'
- iOS Banner: 'ca-app-pub-3940256099942544/2934735716'

Before publishing:
1. Create an AdMob account if you haven't already
2. Create new ad units for your app
3. Replace the test ad unit IDs with your production IDs
4. Update the AdMob App ID in `app.json`

## Google Play Store & App Store Compliance

To ensure compliance with store policies:
1. Implement proper error handling for network issues
2. Ensure ads don't interfere with main content
3. Follow AdMob's placement policies
4. Include proper app permissions
5. Provide clear privacy policy and terms of service

## Development Notes

- The app uses TypeScript for better type safety
- WebView implementation includes error handling and loading states
- AdMob integration follows Google's policies
- UI follows a clean black and white theme

## Building for Production

1. Configure app.json with your app details
2. Update AdMob IDs to production values
3. Build the app:
```bash
expo build:android  # For Android
expo build:ios      # For iOS
```

## Support

For any issues or questions, please refer to:
- [Expo Documentation](https://docs.expo.dev)
- [React Native WebView Documentation](https://github.com/react-native-webview/react-native-webview)
- [Google AdMob Documentation](https://developers.google.com/admob)
