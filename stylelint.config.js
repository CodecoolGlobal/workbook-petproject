module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
    rules: {
        'plugin/no-unsupported-browser-features': [
            true,
            {
                severity: 'warning',
            },
        ],
        indentation: 4,
        'value-list-max-empty-lines': 999,
        'color-hex-length': 'long',
        'order/properties-alphabetical-order': true,
    },
};
