import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import ko from 'vuetify/es5/locale/ko'
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify);

//true로 설정하면 모든 Vuetify 로그 및 경고를 표시하지 않습니다.
//Vuetify.config.silent = true;


export default new Vuetify({
    lang: {
        locales: { ko, en },
        current: 'ko',
    },
    icons: { iconfont: 'fa'},
});
