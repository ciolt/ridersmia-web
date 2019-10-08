<template lang="pug">
  .events-wrapper
    ClientOnly
      //- Do not show SSR events
      style #ssr-events { display: none !important }

      .events-section(v-if="sortedFutureEvents.today.length > 0")
        h2 Today
        EventsListSingle(:events="sortedFutureEvents.today")

      .events-section(v-if="sortedFutureEvents.tomorrow.length > 0")
        h2 Tomorrow
        EventsListSingle(:events="sortedFutureEvents.tomorrow")

      .events-section(v-if="sortedFutureEvents.later_this_week.length > 0")
        h2 Later this week
        EventsListSingle(:events="sortedFutureEvents.later_this_week")

      .events-section(v-if="sortedFutureEvents.this_weekend.length > 0")
        h2 This weekend
        EventsListSingle(:events="sortedFutureEvents.this_weekend")

      .events-section(v-if="sortedFutureEvents.next_week.length > 0")
        h2 Next week
        EventsListSingle(:events="sortedFutureEvents.next_week")

      .events-section(v-if="sortedFutureEvents.future.length > 0")
        h2 In the future
        EventsListSingle(:events="sortedFutureEvents.future")

    .events-list#ssr-events
      EventsListSingle(:events="events")
</template>

<script>
  export default {
    computed: {
      events() {
        const nowdate = ((now) => { const s = now; s.setHours(0, 0, 0, 0); return s.valueOf() })(new Date()).valueOf()
        return this.$site.pages
          .filter(x => x.path.startsWith('/events/') && !x.frontmatter.events_index)
          .map(a => nowdate - new Date(a.frontmatter.date) >= 0 ?
            ({ ...a, future: false }) :
            ({ ...a, future: true }))
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      },
      sortedFutureEvents() {
        const now = new Date()
        const fullDayInMs = 86400000
        const eventsList = {
          today: [],
          tomorrow: [],
          later_this_week: [],
          this_weekend: [],
          next_week: [],
          // in_2_weeks: [],
          // in_3_weeks: [],
          // next_month: [],
          future: []
        }

        const calcEndOfWeek = d => { // new Date(Date.UTC(2019, 9, 20)
          const v = new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay() + 7)
          v.setHours(23, 59, 59)
          return v
        }

        const getRelativeDate = off => new Date(Date.UTC(now.getFullYear(), now.getUTCMonth(), now.getUTCDate() + off))

        const futureEvents = this.events.filter(a => a.future)
        const startOfToday = ((now) => { const s = now; s.setHours(0, 0, 0, 0); return s.valueOf() })(now).valueOf()
        const endOfToday = startOfToday + fullDayInMs
        const endOfTomorrow = endOfToday + fullDayInMs
        const endOfThisWeek = calcEndOfWeek(getRelativeDate(0))
        const endOfNextWeek = calcEndOfWeek(getRelativeDate(7))
        const startOfThisWeekend = endOfThisWeek - (fullDayInMs * 2)

        futureEvents.forEach(event => {
          const ed = (new Date(event.frontmatter.date)).valueOf()
          const meta = event
          if (startOfToday < ed && ed < endOfToday) { // today
            eventsList['today'].push(meta) // pushes just metadata
          } else if (endOfToday < ed && ed < endOfTomorrow) {
            eventsList['tomorrow'].push(meta)
          } else if (endOfTomorrow < ed && ed < startOfThisWeekend) {
            eventsList['later_this_week'].push(meta)
          } else if (startOfThisWeekend < ed && ed < endOfThisWeek) {
            eventsList['this_weekend'].push(meta)
          } else if (endOfThisWeek < ed && ed < endOfNextWeek) {
            eventsList['next_week'].push(meta)
          } else {
            eventsList['future'].push(meta)
          }
        })

        return eventsList
      }
    }
  }
</script>

<style scoped>
  .events-section {
    margin-top: 2rem;
  }
</style>
