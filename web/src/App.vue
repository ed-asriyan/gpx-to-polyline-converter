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
        RouteGpx(
        v-for="(route, index) in routes", :key="route.id", v-if="index === activeRouteIndex"
        v-bind:gpx="route.gpx"
        )
</template>

<script>
  import RouteGpx from './components/RouteGpx';
  import selectAndOpenfile from './utils/selectAndOpenFile';

  export default {
    name: 'App',
    components: {
      RouteGpx,
    },

    data: () => ({
      routes: [],
      activeRouteIndex: 0, // after first route creating it will be opened
    }),

    methods: {
      async onAddRouteClick() {
        const gpx = await selectAndOpenfile({
          accept: "application/gpx+xml",
        });

        this.routes.push({
          gpx,
          id: Math.random(),
          name: Math.random(),
        });
      },
    },
  };
</script>

<style lang="scss">
</style>
