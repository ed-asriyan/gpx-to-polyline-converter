<template>
  <div class="list">
      <div v-for="r in route">
        <md-list class="list_el">
          <md-list-item md-expand>
            <span class="md-list-item-text">{{ r.lat }} : {{ r.lon }}</span>
            <md-list slot="md-expand">
              <input v-model="r.lat">
              <input v-model="r.lon">
            </md-list>
          </md-list-item>
        </md-list>
      </div>
  </div>
</template>

<script>
  export default {

    name: 'List',

    props: {
      route: {
        require: true,
      },
    },

    data: () => ({}),

    computed: {

    },

    mounted() {

    },

  };
</script>

<style>
.list_el {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.12);
  vertical-align: top;
}
.list {
  width: 320px;
  height: 410px;
  overflow-y: scroll;
  border: 2px solid rgba(0, 0, 0, 0.12);;
}
</style>

