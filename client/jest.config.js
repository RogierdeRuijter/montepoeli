module.exports = {
  "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/src/jest-config/setup.ts"
    ],
    "transformIgnorePatterns":[
      "node_modules/(?!@storybook/*)"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/old/",
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
      "<rootDir>/storybook-static/",
      "<rootDir>/src/test.ts"
    ],
    "coveragePathIgnorePatterns": [
      "/jest-config/",
      "/node_modules/"
    ],
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-preset-angular/AngularSnapshotSerializer.js",
      "<rootDir>/node_modules/jest-preset-angular/HTMLCommentSerializer.js"
    ],
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$",
        "diagnostics": false,
        "isolatedModules": true,
        "astTransformers": [
          "<rootDir>/node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer"
        ]
      }
    },
    "moduleNameMapper": {
      "\\.(css|less)$": "<rootDir>/src/jest-config/styleMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/jest-config/fileMock.js"
    },
    "transform": {
      "^.+\\.(ts|html)$": "ts-jest",
      "^.+\\.js$": "babel-jest",
      "^.+\\.stories\\.[jt]sx?$": "@storybook/addon-storyshots/injectFileName"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node",
      ".html"
    ]
  }