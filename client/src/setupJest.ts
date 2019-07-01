import 'jest-preset-angular';

module.exports = {
  globals: {
    __TRANSFORM_HTML__: true,
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|html)$': '../node_modules/jest-preset-angular/preprocessor.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', '.html'],
};
