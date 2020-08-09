<template>
  <section class="dashboard">
    <div class="welcome-section">
      <h2>Welcome Alice Wambui!</h2>
      <span>Get familiar with dashboard. Here are some ways to get started.</span>
    </div>

    <v-row>
      <v-col md="7" cols="12">
        <v-card class="top-row-card">
          <v-row>
            <v-col md="6" cols="12">
             <div class="card-header-text">Send Message</div>
              <div class="card-text">
                Start send tailored messages to your customers.
              </div>
              <v-btn depressed color="primary">Send your first SMS</v-btn>
            </v-col>
            <v-col md="6" cols="12">
              <div class="card-1-mage">
                <v-img :src="require('@/assets/working_staff.png')"></v-img>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="5" cols="12">
        <v-card class="top-row-card">
          <div class="card-header-text">Add contact list</div>
          <div class="card-2-mage d-flex justify-center">
            <v-img :src="require('@/assets/working-person.jpg')"></v-img>
          </div>
          <div class="card-text">
            Easily add contact list of groups and start sending messages to your customers.
          </div>
          <v-btn depressed color="primary">Add contacts list</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="7" cols="12">
        <v-card class="bottom-row-card">
          <v-row>
            <v-col md="7" cols="12">
              <div class="card-header-text">Top up credit</div>
              <div class="card-text">
                Easily topup your credit bundle balance and start sending messages to your customers.
              </div>
              <v-btn depressed color="primary">Topup credit</v-btn>
            </v-col>
            <v-col md="5" cols="12">
              <div class="card-3-mage d-flex justify-end align-center">
                <v-img :src="require('@/assets/credit-cards.png')"></v-img>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="5" cols="12">
        <v-card class="bottom-row-card d-flex flex-column align-center">
          <div class="card-header-text">Credit balance</div>
          <div class="card-text line-height">
            <div class="large-number">200,000</div>
            <div class="tiny-text">Available credit balance</div>
          </div>
          <v-btn depressed color="primary">buy bundles</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>

export default {
  name: 'Dashboard',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import "src/styles/layout/dashboard";
</style>
