<template lang="pug">
  .hello
    h1 {{ name }}
    h2 Essential Links
    ul
      li(v-for="item in links")
        a(v-bind:href="item.link" target="_blank")
          | {{ item.description }}
        br(v-if="item.breakline")
    h2 Ecosystem
    ul
      li(v-for="item in ecosystem")
        a(v-bind:href="item.link" target="_blank")
          | {{ item.description }}
</template>

<script>
  export default {
    name: 'HelloWorld',

    props: ['name'],

    data: () => ({
      links: [
        {
          link: 'https://vuejs.org',
          description: 'Core Docs',
        },
        {
          link: 'https://forum.vuejs.org',
          description: 'Forum',
        },
        {
          link: 'https://chat.vuejs.org',
          description: 'Community Chat',
        },
        {
          link: 'https://twitter.com/vuejs',
          description: 'Twitter',
          breakline: true,
        },
        {
          link: 'https://forum.vuejs.org',
          description: 'Forum',
        },
      ],
      ecosystem: [
        {
          link: 'https://forum.vuejs.org',
          description: 'Forum',
        },
        {
          link: 'https://forum.vuejs.org',
          description: 'Forum',
        },
        {
          link: 'https://forum.vuejs.org',
          description: 'Forum',
        },
        {
          link: 'https://forum.vuejs.org',
          description: 'Forum',
        },
      ],
    }),
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
