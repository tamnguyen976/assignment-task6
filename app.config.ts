// app.config.ts
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'volunteam',
  slug: 'volunteam',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#031A62',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],

  // iOS & Android identifiers (adjust to your org if you like)
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.yourname.volunteam',
  },
  android: {
    package: 'com.yourname.volunteam',
  },

  web: {
    favicon: './assets/favicon.png',
  },

  plugins: [
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you add them to events.',
        cameraPermission:
          'The app accesses your camera to let you add pictures to events.',
      },
    ],
  ],

  extra: {
    // ✅ Use the EAS projectId that EAS showed you
    eas: { projectId: '021f174a-33c6-440c-908f-49a4d7d3d912' },
    // your env var still works the same
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  },
});
