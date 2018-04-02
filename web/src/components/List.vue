<template>
    <div class="list">
      <md-list-item md-expand>
        <span> Добавить </span>
        <md-list slot="md-expand">
          <input v-model="index" placeholder="index">
          <input v-model="lat" placeholder="lat">
          <input v-model="lon" placeholder="lon">
          <button v-on:click="add_point" >Добавить</button>
        </md-list>
      </md-list-item>
      <div v-for="(r, index) in route.points">
        <md-list class="list_el">
          <md-list-item md-expand>
            <span class="md-list-item-text">{{ r.lat }} : {{ r.lon }}</span>
            <md-list slot="md-expand">
              <button v-on:click="" >Изменить</button>
              <button v-on:click="delete_point(index)" >Удалить</button>
              <!--<input v-model="r.lat">-->
              <!--<input v-model="r.lon">-->
            </md-list>
          </md-list-item>
        </md-list>
      </div>
    </div>
</template>

<script>
  import Route from '../data/route/route.js'
  import {InsertPoint} from '../data/route/command.js'

  export default {

    name: 'List',

    props: {
      route: {
        require: true,
      },
    },
    methods: {
      delete_point: function (index) {
        alert(index);
      },
      add_point: function () {
        this.route.execute(new InsertPoint({lat: this.lat,
                                            lon: this.lon}, this.index));
      }
    },

    data: () => ({
        index: 0,
        lat: 0,
        lon: 0,
        route: new Route()
    }),

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
  border: 2px solid rgba(0, 0, 0, 0.12);
  position: absolute;
  left: 75%;
  top: 20%;
}

</style>

