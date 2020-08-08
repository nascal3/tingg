<template>
  <v-app>
    <app-bars />
    <v-main>
      <v-container ma-0 pa-0 fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBars from '@/components/appBars/AppBars'

export default {
  name: 'App',
  components: {
    AppBars
  }
}
</script>

<style lang="scss">
  @import 'src/styles/main';
</style>
