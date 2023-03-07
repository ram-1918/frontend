<template>
    <div class = "todo-tasks-header">
        <router-link :to = "goTolists">
            <i class="fa fa-arrow-left"></i> View Lists
        </router-link>
        <h3>{{ listname[listid] }}</h3>
        <base-button mode = "addMode" @click = "addTask({id: listid})">+ Add Task</base-button>
    </div>
    <div v-if = "!todotasks.length"><edge-case>No tasks currently</edge-case></div>
    <table v-else>
        <display-tasks
        v-for = "task in todotasks"
        :key = "task.id"
        :id = "task.id"
        :name = "task.name"
        :note = "task.description"
        :priority = "task.priority"
        :status = "task.status"
        :deadline = "task.deadline"
        :favorite = "task.favorite"
        :selectedListId = "listid"
        ></display-tasks>
    </table>
</template>

<script>
import { mapActions } from 'vuex';
import DisplayTasks from '../components/list-components/DisplayTasks.vue';


export default {
    components:{
        DisplayTasks
    },
    props: ['listid'], // acquired from route params
    computed: {
        todotasks(){return this.$store.getters['tasks/getTaskData']},
        listname(){return this.$store.getters['list/listNamesObject']},
        goTolists(){return {name: 'lists'}},
    },
    created(){
        this.$store.dispatch('tasks/load', {id: this.listid});
    },
    methods: {
        ...mapActions({addTask: 'tasks/add'})
        }
};
</script>

<style scoped>
a{
    text-decoration: none;
    font: 1rem sans-serif;
    font-weight: 450;
    color: brown;
}
.back-arrow {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 10px solid black;
  transform: rotate(0deg);
  display: inline-block;
}
.todo-tasks-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
h3{
    font-size: 1.3rem;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 400;
    color: rgb(0, 0, 0)
}
table{
    width: 50rem;
    margin: 0 auto;
    border-collapse: collapse;
}
</style>