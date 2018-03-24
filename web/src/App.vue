<template lang="pug">
  .page-container
    md-app
      md-app-toolbar.md-dense.md-primary
        md-tabs(md-alignment="fixed").md-primary
          md-tab(
          v-for="(route, index) in routes", :key="route.id",
          v-bind:md-label="route.name",
          v-on:click="activeRouteIndex = index"
          )
        .md-toolbar-section-end
          md-button.md-raised.md-accent(v-on:click="onAddRouteClick")
            md-icon add
      md-app-content
        HelloWorld(
        v-for="(route, index) in routes", :key="route.id", v-if="index === activeRouteIndex"
        v-bind:name="route.name"
        )
</template>

<script>
  import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',
    components: {
      HelloWorld,
    },

    data: () => ({
      routes: [],
      activeRouteIndex: 0, // after first route creating it will be opened
    }),

    methods: {
      onAddRouteClick() {
        this.routes.push({name: Math.round(Math.random() * 1000), id: Math.random()});
      },
    },
  };
</script>

<style lang="scss">
</style>
