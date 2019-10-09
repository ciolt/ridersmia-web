<template lang="pug">
  .wrapper
    .nav-wrapper(:class="{ fullmode: !!$page.frontmatter.full }")
      Navbar(:logo='$site.themeConfig.logo', :sticky="$route.path === '/'", :fullmode="!!$page.frontmatter.full")
      //- For pages with specified Hero Text
      Hero(v-if='!!$page.frontmatter.heroText' :showbg="$page.frontmatter.showBg" :fullmode="!!$page.frontmatter.full" :text='$page.frontmatter.heroText')
      //- For single events
      Hero(v-if='isSingleEvent' :fullmode="false" :plain="true" :text="$page.frontmatter.title")
    .container
      .inner-contain
        div(v-if="$route.path === '/events/'")
          Content
        //- Single event view
        div(v-if='isSingleEvent')
          SingleEvent
        //- Blog list
        .blog-list(v-if="$route.path === '/blog/'")
          Content
        //- Single blog
        .single-blog(v-if='isSingleBlog')
          Content
        div(v-if="$page.frontmatter.render_content === true")
          Content
    Footer
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$title,
        // all titles will be injected into this template
        titleTemplate: (titleChunk) => {
          if (this.$page.frontmatter.metaTitle != null) return this.$page.frontmatter.metaTitle
          return titleChunk ? `${titleChunk} | The Riders Alliance` : 'The Riders Alliance';
        }
      }
    },
    computed: {
      pageTitle() {
        return this.$page.frontmatter.metaTitle || this.$page.frontmatter.metaTitle || 'Untitled Page'
      },
      isSingleEvent() {
        const worksRoute = '/events/'
        const path = this.$route.path
        if (path.includes('events') && path.length >= (worksRoute.length + 1)) {
          return true
        }
      },
      isSingleBlog() {
        const blogRoute = '/blog/'
        const path = this.$route.path
        if (path.includes('blog') && path.length >= (blogRoute.length + 1)) {
          return true
        }
      }
    },
    updated() {
        // unwrap all images from paragraph tags so we can have
        // different widths inside the content.

        document.querySelectorAll('p img').forEach(image => {
          var wrapper = image.parentNode
          let children = wrapper.children
          let fragment = document.createDocumentFragment()

          Array.from(children).forEach(child => {
            fragment.appendChild(child)
          })

          wrapper.parentNode.replaceChild(fragment, wrapper)

        })
    },
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
  
  h1, h2, h3, h4, h5, h6, p {
    max-width: initial;
  }

  p {
    line-height: 1.5;
    font-size:1.5rem;
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
