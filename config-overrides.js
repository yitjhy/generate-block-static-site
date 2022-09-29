module.exports = function override(config, env) {
    config.optimization = {
        ...config.optimization,
        // 为了配合缓存更加有效, 只变更我们修改的hash
        moduleIds: 'deterministic',
    };
    config.externals = {
        ...config.externals,
        externals: {
            react: 'react',
            'react-dom': 'react-dom',
        },
    }
    return config;
}