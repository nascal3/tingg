<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    width="230"
    clipped-left
    permanent
  >
    <v-list-item class="menu-logo-section" >
      <v-img :src="logo"></v-img>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: () => ({
    drawer: true,
    logo: require('@/assets/cellulant_logo.png')
  })
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/layout/navigationBar';
</style>
