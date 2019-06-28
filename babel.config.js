module.exports = api => {
    // const env = api.env() || 'development';
    const config = { presets: ['@magento/peregrine'] };
    if (process.env.CODEBUILD_BUILD_ID) {
        api.cache.never();
    } else if (api.env() === 'development') {
        // Ignore everything with underscores except stories in dev mode
        config.exclude = [/\/__(tests?|mocks|fixtures|helpers|dist)__\//];
    }
    return config;
};
