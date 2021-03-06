module.exports = (config) => {
    config.set({
        mutator: 'typescript',
        packageManager: 'npm',
        reporters: ['html', 'clear-text', 'progress', 'dashboard'],
        testRunner: 'jest',
        jest: {
            projectType: 'custom',
            config: require('./jest.config-unit.js'),
            enableFindRelatedTests: true,
        },
        transpilers: [],
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        mutate: ['lib/**/*.ts'],
        thresholds: { break: 80 }
    });
}; 