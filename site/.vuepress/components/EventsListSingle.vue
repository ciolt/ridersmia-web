<template lang="pug">
  .events-list
    .event(v-for='event in events', :key='event.title')
      h3.event-header
        router-link.event-title(tag='a', :to='event.path') {{ event.frontmatter.title }}
        small.event-time &nbsp;
          | {{ formatTime(event.frontmatter.date) }}
      span.event-date {{ formatDate(event.frontmatter.date) }}
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      events: Array
    },
    methods: {
      formatTime (rawdate) {
        const dt = moment(rawdate)
        return dt.format('h:mm A')
      },
      formatDate (rawdate) {
        const dt = moment(rawdate)
        return dt.format('MMMM D, YYYY')
      }
    }
  }
</script>

<style scoped>
.event {
    clear: both;
    display: block;
}

.event:before, .event:after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
}

.event-date {
    float: right;
    font-size: 1.25rem;
}

.event-header {
    display: inline-block;
    width: auto;
}

.event-title {
    font-size: 1.45rem;
    color: #ea005e;
    text-decoration: none;
}

.event-time {
    font-size: 1.25rem;
    font-weight: 400;
    opacity: 0.5;
}
</style>
