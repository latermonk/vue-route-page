module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-route-page/'
        : '/',
    outputDir: "docs"
}
