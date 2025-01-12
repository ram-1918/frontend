<template>
        <div class = "edge-case" v-if = "!todolist.length">
            <edge-case>No Todo lists to display</edge-case>
        </div>
        <div id = 'todolists' v-else>
            <display-list
                v-for = "(eachlist, index) in todolist" 
                :key = "eachlist.id"
                :id = "eachlist.id"
                :index = "index"
                :listname = "eachlist.name" 
                :priority = "eachlist.priority" 
                :fav = "eachlist.favorites" 
                :deadline = "eachlist.deadline">
            </display-list>
        </div>
</template>

<script>

import DisplayList from '../components/list-components/DisplayList.vue'

export default {
    components: {
        DisplayList,
    },
    computed:{
        todolist(){
            return this.$store.getters['list/getListData']
        },
    },
    created(){
        this.$store.dispatch('list/load');
        this.$store.dispatch('tasks/load', {id: null});
    }
};
</script>

<style scoped>
#todolists{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}
@media only screen and (min-width: 350px) and (max-width: 700px) {
    #todolists{
        /* background-color: brown; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
  }
}


</style>