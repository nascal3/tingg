<template>
  <v-app>
    <app-bars />
    <v-main>
      <v-container ma-0 pa-0 fluid>
        <router-view/>

        <v-btn class="chat-button" fab dark small color="primary">
          <v-icon>question_answer</v-icon>
        </v-btn>
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
