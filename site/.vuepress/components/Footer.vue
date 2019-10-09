<template lang="pug">
  footer
    .inner-footer
      .fl-right
        b.soc-icon
          a.text.twitter(href="https://www.twitter.com/ridersmia" title="Twitter @ridersmia") Twitter
      .fl-left
        span.text {{ $site.themeConfig.footer }}
</template>

<style scoped>
  footer {
    padding: 2rem 0;
  }
  .inner-footer {
    max-width: 950px;
    padding: 1rem 0;
    border-top: 1pt solid #CCCCCC;
    margin: 0 auto;
    font-size: 0.8rem;
  }

  .text {
    font-size: 0.8rem;
    color: #767676;
  }

  .fl-right {
    float: right;
}

.fl-left {
    float: left;
}

.inner-footer:before, .inner-footer:after {
    /* Clearfix */
    content: '';
    width: 100%;
    position: relative;
    display: block;
    clear: both;
}

.fl-right a {
    font-size: 0.8rem;
}
@media (max-width: 970px) {
  .inner-footer {
    padding: 1rem 2rem;
  }
  .fl-right {
    float: none;
}

.fl-left {
    float: none;
}
}
</style>
