module.exports = {
    plugins: {
        'postcss-nested': {},
        "postcss-custom-media": {
            importForms: [
                {
                    customMedia: {'--t': '(min-width: 880px)'}
                },
                {
                    customMedia: {'--d': '(min-width: 1270px)'}
                }
            ]
        }
    }
}