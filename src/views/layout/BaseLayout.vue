<template>
   <div>
        <NavigationDrawer></NavigationDrawer>
        <AppBar></AppBar>
        <slot></slot>
        <Footer></Footer>
   </div>
</template>

<script>
import NavigationDrawer from '@/views/layout/NavigationDrawer.vue'
import AppBar from '@/views/layout/AppBar.vue'
import Footer from '@/views/layout/Footer.vue'

export default {
   name: 'BaseLayout',
   components: {
      NavigationDrawer,
      AppBar,
      Footer
   }
}
</script>