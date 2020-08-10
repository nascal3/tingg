module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/abstracts/_variables.scss";'
      }
    }
  },
  publicPath: '/tingg/'
}
