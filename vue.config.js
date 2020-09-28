module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/thread-master/'
        : '/',
    pwa: {
        name: 'Thread Master',
    }
}