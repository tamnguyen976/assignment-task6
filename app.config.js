// app.config.js
module.exports = ({ config }) => ({
  ...config,
  name: 'VolunTeam',
  slug: 'volunteam',
  version: '1.0.0',

  // ✅ add the EAS project link (you already have this id)
  extra: {
    ...(config.extra || {}),
    eas: {
      ...(config.extra?.eas || {}),
      projectId: '021f174a-33c6-440c-908f-49a4d7d3d912',
    },
  },

  ios: {
    ...(config.ios || {}),
    bundleIdentifier: 'com.tamnguyen976.volunteam',
    // ✅ avoid the interactive prompt during EAS build
    infoPlist: {
      ...(config.ios?.infoPlist || {}),
      ITSAppUsesNonExemptEncryption: false,
    },
  },

  android: {
    ...(config.android || {}),
    package: 'com.tamnguyen976.volunteam',
  },

  // ✅ config plugin to set iOS build flags in managed workflow
  plugins: [
    ...(config.plugins || []),
    [
      'expo-build-properties',
      {
        ios: {
          // Disable Flipper to avoid older Folly/Boost tangles
          flipper: false,
          // Bring back removed C++ symbols like std::unary_function
          // (works with current Xcode/libc++)
          otherCPlusPlusFlags: [
            '$(inherited)',
            '-D_LIBCPP_ENABLE_CXX17_REMOVED_UNARY_BINARY_FUNCTION',
          ],
          otherCFlags: [
            '$(inherited)',
            '-D_LIBCPP_ENABLE_CXX17_REMOVED_UNARY_BINARY_FUNCTION',
          ],
        },
      },
    ],
  ],
});
