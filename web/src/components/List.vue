<template>
    <div class="list">
      <md-button v-on:click="undo" class="md-raised">Undo</md-button>
      <md-button v-on:click="redo" class="md-raised">Redo</md-button>
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
  import {InsertPoint, DeletePoint, ChangePoint} from '../data/route/command.js'

  export default {

    name: 'List',

    props: {
      route: {
        require: true,
      },
    },

    methods: {
      delete_point: function (index) {
        this.route.execute(new DeletePoint(this.route.points[index], index));
      },

      add_point: function () {
        this.route.execute(new InsertPoint({lat: this.lat,
                                            lon: this.lon}, this.index));
      },

      change_point: function () {

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
  width: 320px;
  height: 410px;
  overflow-y: scroll;
  border: 2px solid rgba(0, 0, 0, 0.12);
  position: absolute;
  left: 75%;
  top: 20%;
}

</style>

