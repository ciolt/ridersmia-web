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
  export default {
    props: {
      events: Array
    },
    methods: {
      formatTime (rawdate) {
        const dt = new Date(rawdate)
        const minutes = dt.getMinutes()
        let hours = dt.getHours()
        let ampm = 'AM'
        if (hours >= 12) {
          hours = (dt.getHours() - 12) || 12
          ampm = 'PM'
        }
        return `${hours}:${minutes} ${ampm}`
      },
      formatDate (rawdate) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]
        const dt = new Date(rawdate)
        const year = dt.getFullYear()
        const month = monthNames[dt.getMonth()]
        const dayOfM = dt.getDate()
        return `${month} ${dayOfM}, ${year}`
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
    float: left;
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
