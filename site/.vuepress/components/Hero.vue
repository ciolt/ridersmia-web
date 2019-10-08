<template lang="pug">
  .impress-parent(:class="{ selfcontained: !fullmode }")
    .mcontain
      h1.impress.title(v-if="text" v-html="processText(text)")
    style(v-if="showbg")
      | .impress-parent.selfcontained:after { content: ''; background-image: url({{ showbg }}) }
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    },
    fullmode: Boolean,
    showbg: String
  },
  methods: {
    processText(tex) {
      return tex.replace(/\\n/g, '<br/>') // text '\n' to real newlines
    }
  }
}
</script>

<style scoped>
  .impress-parent {
    margin: 0;
    box-sizing: border-box;
    clear: both;
    position: relative;
  }

  .impress-parent.selfcontained {
    padding: 2rem 2rem;
    background-color: #ea005e;
    background-image: linear-gradient(45deg, #e3008c, #e74856);
  }

  .impress-parent.selfcontained:after {
    /* content: ''; */
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    left: 0;
    right: 0;
    /* background-image: url(/upload/header_bg.png); */
    z-index: 0;
    background-size: cover;
    max-width: 1400px;
    background-position: 50% 50%;
    opacity: 0.5;
  }

  .fullmode .impress-parent {
    padding-bottom: 36pt;
  }
  .mcontain{
    max-width: 950px;
    margin: 0 auto;
    z-index: 10;
    padding: 0 2rem;
  }

  .impress-parent.selfcontained .mcontain {
    padding: 0;
  }

  .impress{
    font-weight: 800;
    line-height: .9;
    max-width: 550px;
    margin-right: 0;
    margin-left: -.07em;
    padding-left: .02em;
    letter-spacing: -.035em;
    color: #fff;
    padding-top: .12em;
    padding-bottom: .12em;
    margin-bottom: 0;
    }

  @media(max-width: 768px) {
    .impress {
        font-size:10vw;
        line-height: .9
    }
  }

@media(min-width: 768px) {
    .impress {
        font-size:50px;
    }
}

@media(min-width: 992px) {
    .impress {
        font-size:60px;
        line-height: .9
    }
}

</style>
