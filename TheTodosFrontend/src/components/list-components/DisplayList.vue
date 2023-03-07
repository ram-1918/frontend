<template>
        <div class = "list-box">
            <div class = "list-box-header">
              <p>
                <router-link @click = "getTasks({id:id})" :to = "viewTasks">{{listname}}</router-link>
                <span @click = "update({id: id, value: !fav})" :class="favStatus"></span>
              </p>
              <p>Total Tasks: {{ getCount }}</p>
            </div>
            <div @click = "goToTasks" class = "content">
              <table id = 'previewcontent'>
                <tr>
                  <th>Title</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>status</th>
                </tr>
                <preview-content 
                v-for = "(eachlist, index) in tasks" 
                :key = "eachlist.id"
                :id = "eachlist.id"
                :index = "index"
                :name = "eachlist.name" 
                :priority = "eachlist.priority" 
                :status = "eachlist.status"
                :fav = "eachlist.favorites" 
                :deadline = "eachlist.deadline">
                </preview-content>
              </table>
            </div>
            <div class = "list-box-footer">
              <p>Earliest Deadline: <input style = "border:none; background: inherit;" type = "date" :value = "deadline"/></p>
              <p><base-button type = "button" @click = "deleteItem({id: id, index: index})" mode = "deleteMode">
                <i class="material-icons w3-xlarge">delete</i>
              </base-button></p>
            </div>
        </div>
        <!-- {{ tasks }} -->
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import PreviewContent from './PreviewContent.vue'

export default {
  components: {
    PreviewContent
  },
  data(){
    return {
      tasks: {}
    }
  },
  props: ['id', 'index', 'listname', 'deadline', 'priority', 'fav'],
  computed:{
    favStatus(){return {'fa fa-star notchecked': !this.fav, 'fa fa-star checked': this.fav}},
    viewTasks(){return {name: 'tasks', params: {listid: this.id}};},
    getCount(){
      return this.$store.getters['tasks/getCountValue'][this.id] != null ? this.$store.getters['tasks/getCountValue'][this.id] : 0 ;
    },
  },

  methods: {
    goToTasks(){
      this.$router.push(`/api/${this.id}`);
    },
      ...mapActions({
        update: 'list/update', 
        deleteItem:'list/delete', 
        getTasks: 'tasks/load',
      })
  },
  created(){
        axios.get(this.$store.state.API_URL + 'tasks/', {params: {list: this.id}})
        .then(response => {
            this.tasks = response.data;
        })
    },
};
</script>

<style scoped>
.checked{
  color: #c20232fc;
  font-size:medium;
}
.notchecked{
  color: rgb(85, 79, 79);
  font-size: medium;
}
.content{
  cursor: pointer;
  position: relative;
  height: 75%;
  overflow: scroll;
  background-color: rgb(254, 254, 254);
}
#previewcontent {
  font: 0.83rem sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#previewcontent th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: white;
  color: rgb(2, 2, 2);
}
a{
  /* background-color: antiquewhite; */
  text-decoration: none;
  font: 1.3rem sans-serif;
  font-weight: 600;
}
.list-box{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  width: 30%;
  height: 22rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
}
.list-box .list-box-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4rem;
  height: 15%;
}
.list-box .list-box-footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  position: relative;
  height: 15%;

}
</style>