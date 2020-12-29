import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

import ko from 'vuetify/es5/locale/ko'
import en from 'vuetify/es5/locale/en'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

//true로 설정하면 모든 Vuetify 로그 및 경고를 표시하지 않습니다.
//Vuetify.config.silent = true;

export default new Vuetify({
    lang: {
        current: 'ko',
        locales: { ko, en },
    },
    icons: {
      iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    rtl: false,
    theme: {
      dark: false,
      default: 'light',
      disable: false,
      themes: {
        light: {
          primary: colors.purple,
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        dark: {
          primary: colors.blue.lighten3,
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    }
});
