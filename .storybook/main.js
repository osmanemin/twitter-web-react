const path = require('path');
module.exports = {
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        '@storybook/addon-knobs'
    ],
    "presets": [path.resolve(__dirname, './next-preset.js')]
}