<template>
  <section>
    <v-row class="messages-top-row">
      <v-col class="d-flex justify-center" md="7" cols="12">
        <v-text-field
          placeholder="Search for contact list/groups"
          color="#E0E0E0"
          dense
          single-line
          hide-details
          outlined
        ></v-text-field>
        <v-btn class="filter-search-button" depressed>
          Filter
          <v-icon right>mdi-filter-off-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-end" md="5" cols="12">
        <v-btn class="send-bulk-button" color="primary" depressed>
          <v-icon left>mdi-pencil-outline</v-icon>
          Send bulk SMS
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="messages-info-row">
      <v-col md="3" cols="12">
        <v-card flat>
          <div class="card-header-text-uppercase">Total Messages sent</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center info-color">
              <v-icon>mdi-cursor-default-outline</v-icon>
            </span>
            <span class="count-display-number info-text">5,000</span>
          </div>
        </v-card>
      </v-col>
      <v-col md="3" cols="12">
        <v-card flat>
          <div class="card-header-text-uppercase">Delivered messages</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center success-color">
              <v-icon>mdi-email-outline</v-icon>
            </span>
            <span class="count-display-number success-text">3,000</span>
          </div>
        </v-card>
      </v-col>
      <v-col md="3" cols="12">
        <v-card flat>
          <div class="card-header-text-uppercase">Failed messages</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center error-color">
              <v-icon>mdi-comment-text-outline</v-icon>
            </span>
            <span class="count-display-number error-text">1,400</span>
          </div>
        </v-card>
      </v-col>
      <v-col md="3" cols="12">
        <v-card flat>
          <div class="card-header-text-uppercase">pending messages</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center warning-color">
              <v-icon>mdi-timer-outline</v-icon>
            </span>
            <span class="count-display-number warning-text">600</span>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="messages-info-table">
      <v-col md="12" cols="12">
        <messages-table />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import MessagesTable from '@/components/messagesBroadcast/MessagesTable'

export default {
  name: 'BroadcastsTab',
  components: {
    MessagesTable
  }
}
</script>

<style lang="scss" scoped>
  @import "src/styles/layout/broadcatsTab";
</style>
