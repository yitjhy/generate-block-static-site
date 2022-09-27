module.exports = function override(config, env) {
    config.optimization = {
        ...config.optimization,
        // 为了配合缓存更加有效, 只变更我们修改的hash
        moduleIds: 'deterministic',
    };
    return config;
}