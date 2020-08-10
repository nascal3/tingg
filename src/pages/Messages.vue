<template>
  <section class="messages">
    <div class="welcome-section">
      <h2>Messages</h2>
    </div>

    <v-btn class="date-filter-button" depressed small>
      <v-icon color="grey" left>mdi-calendar-blank</v-icon>
        Filter by date <span>Mar 24th</span>
      <v-icon color="primary" right>arrow_drop_down</v-icon>
    </v-btn>

    <div class="content-section">
      <v-tabs class="messages-container-tabs" v-model="tab">
        <v-tabs-slider/>
        <v-tab href="#quickSMS">Quick SMS</v-tab>
        <v-tab href="#bulkUploads">Bulk Uploads</v-tab>
        <v-tab href="#broadcasts">Broadcasts</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="quickSMS" class="tab-container">
          <h1>quick SMS</h1>
        </v-tab-item>
        <v-tab-item value="bulkUploads">
          <h1>bulk uploads tab</h1>
        </v-tab-item>
        <v-tab-item value="broadcasts">
          <broadcasts-tab />
        </v-tab-item>
      </v-tabs-items>

    </div>
  </section>
</template>

<script>
import BroadcastsTab from '@/components/messagesBroadcast/BroadcastsTab'

export default {
  name: 'Messages',
  components: {
    BroadcastsTab
  },
  data: () => ({
    tab: 'broadcasts'
  })
}
</script>

<style lang="scss" scoped>
  @import "src/styles/layout/messages";
</style>
