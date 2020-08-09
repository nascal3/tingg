<template>
  <v-badge
    bordered
    color="error"
    content="1"
    overlap
  >
    <v-menu
      transition="slide-y-transition"
      max-width="350"
      offset-y
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-icon icon v-on="on">mdi-message</v-icon>
      </template>
      <v-list class="list-menu">
        <div class="list-menu-title">
          <span>Messages</span>
          <span class="blue--text">Clear all</span>
        </div>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-avatar class="list-menu-avatar">
              <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <div class="list-menu-text">
              Lorem ipsum dolor sit amet. Alias dignissimos doloribus eaque iure more tetxting non...
            </div>
            <div class="list-menu-info">
              <span>20 minutes ago</span>
              <span class="blue--text">Clear</span>
            </div>
          </v-list-item-content>
        </v-list-item>
        <div class="view-link blue--text">View All</div>
      </v-list>
    </v-menu>
  </v-badge>
</template>

<script>
export default {
  name: 'NotificationPop',
  data: () => ({
    items: [
      { avatar: require('@/assets/john_doe.jpg') },
      { avatar: require('@/assets/jane_doe.jpg') }
    ]
  })
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/components/notificationPop';
</style>
