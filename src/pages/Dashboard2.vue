<template>
  <section class="dashboard2">
    <div class="welcome-section">
      <h2>Welcome Alice Wambui!</h2>
      <span>Here is what has been happening in last 7 days.</span>
    </div>

    <v-row>
      <v-col md="3" cols="12">
        <v-card class="top-row-card">
          <div class="card-header-text-uppercase">Total Messages sent</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center info-color">
              <v-icon>mdi-cursor-default-outline</v-icon>
            </span>
            <span class="count-display-number info-text">5,000</span>
          </div>
          <div class="card-text">
            <span class="blue--text">See customers</span> that haven't been sent an invite
          </div>
        </v-card>
      </v-col>
      <v-col md="3" cols="12">
        <v-card class="top-row-card">
          <div class="card-header-text-uppercase">Delivered messages</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center success-color">
              <v-icon>mdi-email-outline</v-icon>
            </span>
            <span class="count-display-number success-text">3,000</span>
          </div>
          <div class="card-text">
            <span class="blue--text">See customers</span> that have received the message
          </div>
        </v-card>
      </v-col>
      <v-col md="3" cols="12">
        <v-card class="top-row-card">
          <div class="card-header-text-uppercase">Failed messages</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center error-color">
              <v-icon>mdi-comment-text-outline</v-icon>
            </span>
            <span class="count-display-number error-text">1,400</span>
          </div>
          <div class="card-text">
            <span class="blue--text">See all customers</span> that have not received the messages
          </div>
        </v-card>
      </v-col>
      <v-col md="3" cols="12">
        <v-card class="top-row-card">
          <div class="card-header-text-uppercase">pending messages</div>
          <div class="count-display d-flex align-center">
            <span class="count-display-icon d-flex align-center justify-center warning-color">
              <v-icon>mdi-timer-outline</v-icon>
            </span>
            <span class="count-display-number warning-text">600</span>
          </div>
          <div class="card-text">
            <span class="blue--text">See all messages</span> that pending to be send
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="3" cols="12">
        <v-card class="bottom-row-card">
          <div class="card-header-text-uppercase">credit balance</div>

          <div class="d-flex flex-column align-center">
            <div class="card-circled-icon d-flex align-center justify-center">
              <v-icon>mdi-wallet-outline</v-icon>
            </div>
            <div class="card-text line-height">
              <div class="large-number">200,000</div>
              <div class="tiny-text">Available credit balance</div>
            </div>
            <v-btn depressed color="primary">buy bundles</v-btn>
          </div>

        </v-card>
      </v-col>
      <v-col md="9" cols="12">
        <v-card class="bottom-row-card">

        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Dashboard2'
}
</script>

<style lang="scss" scoped>
  @import "src/styles/layout/dashboard2";
</style>
