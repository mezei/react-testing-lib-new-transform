module.exports = {
  testPathIgnorePatterns: ['node_modules'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
