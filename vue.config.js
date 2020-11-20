module.exports = {
  "devServer" : {
    "port" : 8090
  },

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'en',
      localeDir: 'plugins/locales',
      enableInSFC: true
    }
  }

}
