module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    testMatch: ['**/test/unit/**/*.spec.ts'],
    coverageDirectory: 'reports/coverage',
    collectCoverageFrom: [
        'lib/**/*.{ts,tsx,js,jsx}',
        '!lib/**/*.d.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    rootDir: '../'
};