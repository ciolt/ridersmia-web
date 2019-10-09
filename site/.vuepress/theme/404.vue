<template lang="pug">
  .wrapper
    .nav-wrapper(:class="{ fullmode: true }")
      Navbar(:logo='$site.themeConfig.logo', :sticky="$route.path === '/'", :fullmode="true")
      Hero(:fullmode="true" :plain="false" :text="text404")
    .container
      .inner-contain
        p
          small
            | Were you looking for something? Email us at 
            a(href='mailto:help@riders.miami') help@riders.miami
            |  with any questions.
    Footer
</template>

<script>
  export default {
    metaInfo: {
      title: '404 | The Riders Alliance'
    },
    data() {
      return {
        text404: 'This page does not exist.'
      }
    }
  }
</script>

<style>

  :root {
    --color-black: #1c1c1c;
    --color-highlight: rgba(249, 233, 172, 0.99);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-moz-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::-webkit-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  html {
    background-color: #FFFFFF;
    /* background-color: #ECEFF1; */
    /* background-image: linear-gradient(90deg, #FAFAFA, 50%, #ECEFF1, 100%); */
  }

  body {
    font-family: "Metropolis", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    min-height: 100%;
    color: var(--color-black);
    background-color: transparent;
  }

  img {
    width: 100%;
    max-width: 100%;
    line-height: 0;
    margin: 2rem 0;
  }

  .container {
    padding: 1rem 2rem;
  }

  .inner-contain {
    max-width: 950px;
    margin: 0 auto;
  }

  .nav-wrapper.fullmode {
    background-color: #ea005e;
    background-image: linear-gradient(45deg, #e3008c, #e74856);
  }

  .container.full-mode {
    padding-top: 0;
  }

  .h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
      font-weight: 600;
      line-height: 1.2;
      margin-top: 0;
      margin-bottom: 8px;
      margin-bottom: .5rem;
  }

  .h4,h4 {
      font-size: 24px;
      font-size: 1.5rem
  }
  .h1,h1 {
      font-size: 40px;
      font-size: 2.5rem
  }
  
  p {
    line-height: 1.5;
    margin: 1rem auto 1rem auto;
  }

  pre {
    background: var(--color-black);
    padding: 1rem;
    margin: 1rem 0;
  }

  code {
    color: white;
    background: var(--color-black);
    font-size: 1rem;
    padding: 0.05rem 0.25rem;
    font-weight: 400;
  }

  a, a:active {
    color: #ea005e;
    text-decoration: none;
  }

  .ncfp p:first-of-type {
    margin-top: 0;
  }

</style>
