module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src/tests'], // Uppdatera sökvägen här
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  };
  