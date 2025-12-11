// app.config.js
module.exports = ({ config }) => ({
  ...config,
  name: 'VolunTeam',
  slug: 'volunteam',
  version: '1.0.0',
  extra: {
    ...(config.extra || {}),
    eas: {
      ...(config.extra?.eas || {}),
      projectId: '021f174a-33c6-440c-908f-49a4d7d3d912', // <- from EAS prompt
    },
  },
  ios: { ...(config.ios || {}), bundleIdentifier: 'com.tamnguyen976.volunteam' },
  android: { ...(config.android || {}), package: 'com.tamnguyen976.volunteam' },
});
