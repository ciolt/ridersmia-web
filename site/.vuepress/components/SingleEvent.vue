<template lang="pug">
  .single-event
    .left-sec
      .date-time
        b.h4 Date and time
        p(v-html="getCondenseDateTime(eventDate) + (!!endDate ? dateSep : '')")
        p(v-if="endDate" v-html="getCondenseDateTime(endDate) + ' ' + getTZ(endDate)")
    .right-sec.ncfp
      Content
</template>

<script>
  const locale = 'en-US'
  export default {
    metaInfo() {
      return {
        title: `${this.$page.frontmatter.title}, ${this.getCondenseDate(this.eventDate)} at ${this.getTime(this.eventDate)}`
      }
    },
    data() {
      return {
        dateSep: ` &#8211;`
      }
    },
    computed: {
      eventDate() {
        return new Date(this.$page.frontmatter.date)
      },
      endDate() {
        return this.eventDate
        const ut = this.$page.frontmatter.until_date
        if (ut != null && String(ut).trim().length > 0) {
          return new Date(ut)
        } else return null
      }
    },
    methods: {
      toMonthStr (date) {
        return date.toLocaleString(locale, {
          month: 'short'
        })
      },
      dateOfMonth (date) {
        return date.getDate()
      },
      getYear (date) {
        return date.getFullYear()
      },
      getWeekday (date) {
        return date.toLocaleDateString(locale, { weekday: 'short' })
      },
      getTime (date) {
        return date.toLocaleString(locale, { hour: 'numeric', minute: '2-digit', hour12: true })
      },
      getTZ (date) {
        return date.toLocaleString(locale, { timeZoneName: 'short' }).split(' ').pop()
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

.date-time p {
  font-size: 1.125rem;
  margin: 0;
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

p, .right-sec p {
    margin-top: 0;
}
</style>
