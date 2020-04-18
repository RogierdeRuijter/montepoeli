module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js|cjs)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: [
    "ts",
    "tsx",
    "cjs",
    "js",
    "jsx",
    "json",
    "node",
    "html"
  ],
  coverageReporters: ['html'],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|babel-plugin-require-context-hook|@storybook/addon-storyshots)",
  ],
};