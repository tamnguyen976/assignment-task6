import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'VolunTeam',
  slug: 'volunteam',
  version: '1.0.0',
  ios: {
    ...(config.ios ?? {}),
    bundleIdentifier: 'com.tamnguyen976.volunteam',
  },
  android: {
    ...(config.android ?? {}),
    package: 'com.tamnguyen976.volunteam',
  },
});
