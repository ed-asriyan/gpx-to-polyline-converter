<template lang="pug">
  div
    div(:id="mapId").map
    List(
      v-for="rou in route", :key="rou.id",
        v-bind:route="rou"
    )
</template>

<script>
  import L from 'leaflet-gpx';
  import {SerializerJpx} from '../data/route/serializers';
  import List from './List.vue';

  export default {

    name: 'RouteGpx',
    components: {
      List,
    },

    props: {
      id: {
        require: true,
      },
      route: {
        require: true,
      },
    },

    data: () => ({}),

    computed: {
      mapId() {
        return `routeGpx${this.id}`;
      },
    },

    mounted() {
      const map = L.map(this.mapId);
      debugger;
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      new L.GPX(this.route.serialize(SerializerJpx), {
        async: true,
        marker_options: {
          startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
          endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
          shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png',
          wptIconUrls : {},
        },
      }).on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
      }).addTo(map);

    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .map {
    height: 100%;
    overflow: hidden;
  }
</style>
