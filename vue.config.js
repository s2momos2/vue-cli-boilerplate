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
  },

  css: {
    loaderOptions : {
      sass : {
        data: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_mixins.scss";
                    @import "@/styles/_functions.scss";
                `
      }
    }
  }

}
