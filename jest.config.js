/*!
 * Copyright 2022 Quisitive, LLC. All rights reserved.
 */
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['**/(packages|components|tools)/tests/**/*.test.(ts|js)'],
  testEnvironment: 'node'
}
