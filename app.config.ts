import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'phoenix-tracker',
  slug: 'phoenix-tracker',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    },
    package: 'com.maxelite1520.phoenix_tracker',
    googleServicesFile: './google-services.json'
  },
  web: {
    favicon: './assets/favicon.png'
  },
  githubUrl: 'https://github.com/maxelite1520/phoenix-tracker'
};

export default config;
