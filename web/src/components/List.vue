<template>
    <div class="list">
      <md-button v-on:click="undo" class="md-raised undo">Undo</md-button>
      <md-button v-on:click="redo" class="md-raised redo">Redo</md-button>
      <div v-on:click="change_lat_lon(0, 0)">
        <md-list-item md-expand>
          <span> Добавить </span>
          <md-list slot="md-expand">
            <input v-model="index" placeholder="index">
            <input v-model="lat" placeholder="lat">
            <input v-model="lon" placeholder="lon">
            <button v-on:click="add_point" >Добавить</button>
          </md-list>
        </md-list-item>
      </div>
      <div class="list_points">
        <div v-for="(r, index) in route.points" v-on:click="change_lat_lon(r.lat, r.lon)">
          <md-list class="list_el">
            <md-list-item md-expand>
              <span class="md-list-item-text">{{ r.lat }} : {{ r.lon }}</span>
              <md-list slot="md-expand">
                <input v-model="lat" placeholder="lat">
                <input v-model="lon" placeholder="lon">
                <button v-on:click="change_point(index)" >Изменить</button>
                <button v-on:click="delete_point(index)" >Удалить</button>
              </md-list>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
</template>

<script>
  import {InsertPoint, DeletePoint, ChangePoint} from '../data/route/command.js'

  export default {

    name: 'List',

    props: {
      route: {
        require: true,
      },
    },

    methods: {
      change_lat_lon: function (lat_point, lon_point) {
        this.lat = lat_point;
        this.lon = lon_point;
      },

      delete_point: function (index) {
        this.route.execute(new DeletePoint(this.route.points[index], index));
      },

      add_point: function () {
        this.route.execute(new InsertPoint({lat: this.lat,
                                            lon: this.lon}, this.index));
      },

      change_point: function (index) {
        this.route.execute(new ChangePoint({lat: this.lat,
                                            lon: this.lon}, index, this.route.points[index]));
      },

      undo: function() {
        this.route.undo();
      },

      redo: function() {
        this.route.redo();
      }
    },

    data: () => ({
        index: 0,
        lat: 0,
        lon: 0
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
  background: white;
  width: 320px;
  height: 375px;
  border: 2px solid rgba(0, 0, 0, 0.12);
  position: absolute;
  left: 75%;
  top: 15%;
}
.list_points {
  overflow-y: scroll;
  width: 316px;
  height: 271px;
}
.redo {
  position: relative;
  left: 90px;
}
.undo {
  position: relative;
  left: 15px;
}
</style>

