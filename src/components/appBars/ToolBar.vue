<template>
  <v-app-bar height="60px" flat app>
    <v-text-field
      class="toolbar-search-field"
      label="Search for contact lists/groups"
      prepend-inner-icon="mdi-magnify"
      placeholder="Search for contact lists/groups"
      solo
      dense
      flat
    ></v-text-field>
    <v-spacer></v-spacer>
    <section id="notifications-badge" class="toolbar-notifications">
      <div>
        <v-badge
          bordered
          color="error"
          content="1"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </div>
      <div>
        <v-badge
          bordered
          color="error"
          content="1"
          overlap
        >
          <v-icon>mdi-message</v-icon>
        </v-badge>
      </div>
      <div>
        <span>Log Out</span>
        <span class="power-circle">
          <v-icon>mdi-power</v-icon>
        </span>
      </div>
    </section>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style lang="scss" >
  #notifications-badge {
    .v-badge__badge {
      border-radius: 2px;
      font-size: 9px;
      height: 15px;
      min-width: 15px;
      padding: 4px 4px;
    }
  }
</style>
<style lang="scss" scoped>
  @import 'src/styles/layout/toolBar';
</style>
