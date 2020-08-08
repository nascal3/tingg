<template>
  <v-app-bar height="55px" flat app>
    <v-spacer></v-spacer>
    <template>
      <v-row align="center" justify="end" no-gutters>
        <div class="user d-flex flex-column justify-end">
          <div class="user-name">name</div>
          <div class="user-role">role</div>
        </div>
      </v-row>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/layout/toolBar';
</style>
