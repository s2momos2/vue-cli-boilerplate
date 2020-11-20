<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <hr/>
      <HelloI18n/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from '@/views/components/HelloWorld';
import HelloI18n from '@/views/components/HelloI18n';

export default {
  name: 'App',

  components: {
    HelloWorld,
    HelloI18n
  },

  data: () => ({
    //
  }),
};
</script>
