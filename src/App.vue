<template>
  <v-app>

    <v-navigation-drawer app></v-navigation-drawer>
    <v-app-bar app></v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app></v-footer>

  </v-app>
</template>

<script>
//import NavigationDrawer from '@/views/layout/NavigationDrawer.vue';
//import Appbar from '@/views/layout/Appbar.vue';
//import Footer from '@/views/layout/Footer.vue';

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({

  }),
};
</script>
