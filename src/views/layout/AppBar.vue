<template>
  <v-app-bar app>
      <v-app-bar-nav-icon @click="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $store.state.title }}</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Appbar'
}
</script>
