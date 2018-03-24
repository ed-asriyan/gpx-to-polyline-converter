<template lang="pug">
  .page-container
    md-app
      md-app-toolbar.md-dense.md-primary
        md-tabs(md-alignment="fixed", v-bind:md-active-tab="activeRouteId").md-primary
          md-tab(
          v-for="route in routes", :key="route.id",
          v-bind:md-label="route.name", v-bind:id="route.id"
          v-on:click="activeRouteId = route.id"
          )
        .md-toolbar-section-end
          md-button.md-raised.md-accent(v-on:click="onAddRouteClick")
            md-icon add
      md-app-content.content
        RouteGpx(
        v-for="route in routes", :key="route.id",
        v-bind:hidden="route.id !== activeRouteId"
        v-bind:id="route.id" v-bind:gpx="route.gpx"
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
      activeRouteId: null,
    }),

    methods: {
      async onAddRouteClick() {
        const gpx = await selectAndOpenfile({
          accept: 'application/gpx+xml',
        });

        const route = {
          gpx,
          id: `routeTab${Math.round(Math.random() * 1000)}`,
          name: Math.random(),
        };
        this.routes.push(route);
        this.activeRouteId = route.id;
      },
    },
  };
</script>

<style scoped lang="scss">
  .content {
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
