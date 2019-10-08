<template lang="pug">
  header.header(:class='{ fullmode: fullmode }')
    .inner-head
      router-link(to='/')
        .logo
          img.logo-img(:src='fullmode ? "/upload/logotype-inverse.svg" : "/upload/logotype.svg"' width='200' :title='$site.title' :alt='$site.title')
      nav.navigation(v-if='navLinks')
        ul
          li(v-for='nav in navLinks', :key='nav.text')
            router-link.nav-link(tag='a', :to='nav.link', active-class='active', v-text='nav.text', exact='',
              :class="{ active: $route.path.indexOf(nav.link) !== -1 }")
    .clearfix
</template>

<script>
  export default {
    props: {
      logo: {
        type: String,
        required: false,
      },
      sticky: {
        type: Boolean,
        required: false,
      },
      fullmode: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {}
    },
    computed: {
      navLinks() {
        return this.$site.themeConfig.nav
      },
    }
  }
</script>

<style scoped>
  .clearfix {
    width: 100%;
    clear: both;
    height: 0;
  }
  .header {
    color: #FFFFFF;
    position: relative;
    padding: 1.65rem 2rem 2rem 2rem;
  }
  .logo-img {
    display: block;
    margin: 0;
    width: 110px;
    max-width: 80%;
  }
  .inner-head {
    max-width: 950px;
    margin: 0 auto;
  }
  .left-section {
    float: left;
  }
  .right-section {
    float: right;
  }
  nav ul {
    list-style: none;
    margin: 10pt 0 0 0;
  }
  nav ul li {
    display: inline-block;
    margin: 4pt 1.2rem 0 0;
    font-size: 1.2rem;
    color: #393939;
  }
  .nav-link, .nav-link:visited {
    font-weight: 600;
    /* text-transform: uppercase; */
    font-size: 0.8em;
    color: inherit;
    text-decoration: none;
    padding-bottom: 1pt;
    letter-spacing: 0.025em;
    border-bottom: 1pt solid transparent; /* #CCC */
  }

  .fullmode .nav-link, .fullmode .nav-link:visited {
    border-bottom-color: #ff85b6;
    color: #ffb3d1;
  }

  .fullmode .nav-link:hover, .fullmode .nav-link:active, .fullmode .nav-link.active, .fullmode .nav-link.active2 {
    color: #FFFFFF;
  }
  
  .nav-link:hover, .nav-link:active, .nav-link.active, .nav-link.active2 {
    color: #ea005e;
  }
  .nav-link:active {
    color: #2B2B2B;
  }
  .nav-link.active {
    border-bottom-color: currentColor;
  }

  /* .header:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: block;
    height: 3pt;
    background-color: #ea005e;
  }

  .fullmode .header:before {
    background-color: #000;
  } */
  
</style>
