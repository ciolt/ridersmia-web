<template lang="pug">
  .single-event
    .left-sec
      .date-time.nop
        b.h4 Date and time
        p(v-html="getCondenseDateTime(eventDate) + (endDate != null ? dateSep : '')")
        p(v-if="endDate" v-html="getCondenseDateTime(endDate) + ' ' + getTZ(endDate)")
      .location.nop
        b.h4 Location
        p
          a(:href='googleMapsLocationURL' target='_blank' v-html='eventLocation')
      .rsvp.nop(v-if="rsvp")
        b.h4 RSVP
        p This event requires an RSVP.
        p
          a(:href="rsvp") Register
    .right-sec.ncfp.small-p
      b.h4 Description
      Content
</template>

<script>
  import moment from 'moment'
  const locale = 'en-US'
  export default {
    metaInfo() {
      return {
        title: `${this.$page.frontmatter.title}, ${this.getCondenseDate(this.eventDate)} at ${this.getTime(this.eventDate)}`
      }
    },
    data() {
      return {
        dateSep: ' &#8211;'
      }
    },
    computed: {
      googleMapsLocationURL() {
        const query = encodeURIComponent(this.eventLocation)
        return `https://www.google.com/maps/search/?api=1&query=${query}`
      },
      eventLocation() {
        return this.$page.frontmatter.location
      },
      rsvp() {
        return !!(this.$page.frontmatter.rsvp) ? this.$page.frontmatter.rsvp_url : null
      },
      eventDate() {
        return new Date(this.$page.frontmatter.date)
      },
      endDate() {
        const ut = this.$page.frontmatter.until_date
        if (ut) {
          return new Date(ut)
        } else return null
      }
    },
    methods: {
      toMonthStr (date) {
        return moment(date).format('MMMM')
      },
      dateOfMonth (date) {
        return moment(date).format('D')
      },
      getYear (date) {
        return moment(date).format('YYYY')
      },
      getWeekday (date) {
        return moment(date).format('ddd')
      },
      getTime (date) {
        return moment(date).format('h:mm A')
      },
      getTZ (date) {
        try {
          const a =  date.toLocaleString(locale, { timeZoneName: 'short' }).split(' ').pop()
          return a
        } catch (err) {
          return 'EDT'
        }
      },
      getCondenseDate (date) {
        return `${this.getWeekday(date)}, ${this.toMonthStr(date)} ${this.dateOfMonth(date)}, ${this.getYear(date)}`
      },
      getCondenseDateTime (date) {
        return `${this.getWeekday(date)}, ${this.toMonthStr(date)} ${this.dateOfMonth(date)}, ${this.getYear(date)}, ${this.getTime(date)}`
      }
    }
  }
</script>

<style scoped>
.single-event {
    display: flex;
    flex-direction: row;
}

.left-sec {
    width: 300px;
    max-width: 100%;
    flex-shrink: 0;
    padding: 0 1rem 1rem 0;
    margin: 0 1rem 1rem 0;
}

.nop {
  font-size: 1rem;
  margin: 0 0 1rem 0;
}

.nop p {
    margin: 0;
    font-size: 1rem;
    word-break: break-word;
}

@media screen and (max-width: 950px) {
    .left-sec {
      width: 100%;
      padding: 0 0 1rem 0;
    }
    .single-event {
        flex-direction: column;
    }
}

.right-sec {
  max-width: 635px;
}

</style>
