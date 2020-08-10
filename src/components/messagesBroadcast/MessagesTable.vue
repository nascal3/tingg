<template>
  <v-data-table
    id="message-records-table"
    dense
    :headers="headers"
    :items="data"
    item-key="id"
    :sort-icon="false"
    :header-props="{ sortIcon: null }"
    :footer-props="{itemsPerPageText: 'Show rows:'}"
  >
    <template v-slot:item.id="
      // eslint-disable-next-line vue/no-unused-vars{ item }">
      <v-icon color="primary">mdi-drag-variant</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'MessagesTable',
  data: () => ({
    data: [
      {
        id: 1,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Published',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 2,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'In Progress',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 3,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 4,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 5,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 6,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 7,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 8,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 9,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      },
      {
        id: 10,
        name: 'Test quick demo',
        shortcode: 'Cellulant',
        status: 'Complete',
        createdBy: 'Sharon Wanjiru',
        sentTime: '2020-03-17 11:02',
        scheduleTime: '2020-03-17 11:02'
      }
    ],
    headers: [
      {
        text: 'Messages',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Shortcode', sortable: false, value: 'shortcode' },
      { text: 'Status', value: 'status' },
      { text: 'Created By', value: 'createdBy' },
      { text: 'Sent Time', sortable: false, value: 'sentTime' },
      { text: 'Schedule Time', sortable: false, value: 'scheduleTime' },
      { text: 'Actions', align: 'end', sortable: false, value: 'id' }
    ]
  })
}
</script>

<style lang="scss">
  @import "src/styles/layout/messagesTable";
</style>
