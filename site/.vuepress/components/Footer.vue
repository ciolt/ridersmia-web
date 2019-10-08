<template lang="pug">
  footer
    .inner-footer
      span.text {{ $site.themeConfig.footer }}
      .fl-right
        .soc-icon
          a.twitter(href="https://www.twitter.com/ridersmia" title="Twitter @ridersmia")
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
  }
@media (max-width: 970px) {
  .inner-footer {
    padding: 1rem 2rem;
  }
}

  .text {
    font-size: 0.8rem;
    color: #767676;
  }
</style>
