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

    <v-list flat>
      <v-list-item-group v-model="model" color="secondary">
      <v-list-item
        class="navigation-list-item"
        v-for="page in pages"
        :key="page.title"
        router :to="page.route"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="menu-items-text">{{ page.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    </v-list>
    <v-spacer></v-spacer>

    <v-footer class="d-flex" absolute>
      <div class="dstv-logo">
        <v-img :src="dstvLogo"></v-img>
      </div>
      <div class="footer-text">
        <span>DStv</span>
        <span>info@dstv.co.ke</span>
      </div>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: () => ({
    model: 1,
    drawer: true,
    logo: require('@/assets/cellulant_logo.png'),
    dstvLogo: require('@/assets/dstv_logo.png'),
    pages: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', route: '/' },
      { title: 'Messages', icon: 'mdi-email-open-outline', route: '/messages' },
      { title: 'Contacts', icon: 'mdi-account-multiple-outline', route: '/contacts' },
      { title: 'Accounts', icon: 'mdi-folder-outline', route: '/dashboard2' },
      { title: 'Credits', icon: 'mdi-wallet-outline', route: '/credits' },
      { title: 'Reports', icon: 'bar_chart', route: '/reports' },
      { title: 'Contact us', icon: 'alternate_email', route: '/contactus' }
    ]
  })
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/layout/navigationBar';
</style>
