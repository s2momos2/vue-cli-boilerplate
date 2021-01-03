<template>
  <v-app>
      <BaseLayout>
        <v-main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
      </BaseLayout>

  </v-app>
</template>

<script>
import BaseLayout from '@/views/layout/BaseLayout.vue'

export default {
  name: 'App',

  components: {
    BaseLayout
  },

  data: () => ({}),
};
</script>
