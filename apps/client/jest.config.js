module.exports = {
    "setupFilesAfterEnv": [
      "./src/jest-config/setup.ts"
    ],
    "preset": '../../jest.config.js',
    "coverageDirectory": '../../coverage/apps/montepoeli',
    "transformIgnorePatterns":[
      "../../node_modules/(?!@storybook/*)"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/src/test.ts"
    ],
    "coveragePathIgnorePatterns": [
      "/jest-config/",
      "/node_modules/"
    ],
    "snapshotSerializers": [
      "../../node_modules/jest-preset-angular/AngularSnapshotSerializer.js",
      "../../node_modules/jest-preset-angular/HTMLCommentSerializer.js"
    ],
    "globals": {
      "ts-jest": {
        "tsConfig": "./tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$",
        "diagnostics": false,
        "isolatedModules": true,
        "astTransformers": [
          "../../node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer"
        ]
      }
    },
    "moduleNameMapper": {
      "\\.(css|less)$": "./src/jest-config/styleMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./src/jest-config/fileMock.js"
    },
    "transform": {
      "^.+\\.(ts|html)$": "ts-jest",
      "^.+\\.js$": "babel-jest",
      "^.+\\.stories\\.[jt]sx?$": "@storybook/addon-storyshots/injectFileName"
    }
  }