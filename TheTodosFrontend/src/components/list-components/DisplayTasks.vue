<template>
    <tr>
        <div class = "task-header">
            <div style="display:flex;flex-direction:row;align-items: center;">
                <span @click = "toggleFavorite" :class="favStatus"></span>
                <td><input :class = "taskNameStyle" id = "taskname" type = "text" v-model = "enteredTask" placeholder="Set Task Name..."/></td>
            </div>
            <td>
                <base-dropdown>
                    <select name = "select" v-model = "enteredPriority" >
                        <option value = "None" selected>No Priority</option>
                        <option value = "1">Important</option>
                        <option value = "2">Urgent</option>
                    </select>
                </base-dropdown>
            </td>  
            <td>
                <base-dropdown>
                    <select name = "select" v-model = "enteredStatus">
                        <option value = "false">Incomplete</option>
                        <option value = "true">Complete</option>
                    </select>
                </base-dropdown>
            </td>
            <base-button mode = "deleteMode" @click = "deleteTask()"><i class="material-icons w3-large">delete</i></base-button>
        </div>
        <div class = "task-body">
            <textarea rows = "10" cols = "50" v-model = "enteredNote" placeholder="Add Some Note?"></textarea>
        </div>
        <div class = "task-footer">
            <!-- ask for deadline using checkbox, if checked show calender else nothing -->
            <td>Deadline: <input type = "date" v-model = "enteredDeadline" format = "yyyy-mm-dd" placeholder="Set Deadline"  ></td>
            <base-button mode = "saveMode" @click = "invokeUpdate()">Save</base-button>
        </div> 
    </tr>
</template>

<script>
// import axios from 'axios'
// import { mapActions } from 'vuex';

export default {
    props: ['selectedListId', 'id', 'name', 'note', 'priority', 'status', 'deadline', 'favorite'],
    data(){
        return {
            enteredTask: this.name,
            enteredNote: this.note,
            enteredPriority: this.priority,
            enteredStatus: this.status,
            enteredDeadline: this.deadline,
            enteredFavorite: this.favorite,
            errorDialog: false
        };
    },
    computed:{
        favStatus(){
            return this.enteredFavorite === true ? 'fa fa-star checked':'fa fa-star notchecked';
        },
        taskNameStyle(){
            return this.errorDialog === false ? 'tasknameInput':'tasknameErrorInput';
        }
    },
    methods: {    
        toggleFavorite(){
            this.enteredFavorite = !this.enteredFavorite; 
        },
        invokeUpdate(){
            const payload = {
                taskId: this.id,
                values:{
                    name: this.enteredTask,
                    description: this.enteredNote,
                    priority: this.enteredPriority,
                    status: this.enteredStatus,
                    deadline: this.enteredDeadline,
                    favorite: this.enteredFavorite,
                    list: this.selectedListId
                    }
                }
            const tasks = this.$store.getters['tasks/getTaskData'];
            // console.log(tasks, 'fdvfdgfdgbdfbhghjj');
            const filtered_task_names = tasks.filter((task) => task.name == this.enteredTask)
            const filtered_task_id = tasks.filter((task) => task.id == this.id)
            console.log(filtered_task_names, filtered_task_id, this.id, 'abcdefghijkl');
            if(this.enteredTask === ''){
                // alert("Set a Name for Task!");
                this.errorDialog = true;
                return 
            }
            if(this.id === undefined & filtered_task_names.length > 0){
                // alert("Try Different Task Name!")
                this.errorDialog = true;
                return 
            }
            this.$store.dispatch('tasks/update', payload);
            this.errorDialog = false;
            console.log("Task Details Saved!");
        },
        deleteTask(){
            this.$store.dispatch('tasks/delete', {id: this.id});
        },
    }
};
</script>

<style scoped>
.checked{
  color: #c20232fc;
  font-size:small;
}
.notchecked{
  color: rgb(85, 79, 79);
  font-size: small;
}
tr{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 7px;
    margin: 1rem;
    width: 100%;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
}
.task-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    height: 15%;
}
#taskname{
    font: 1.2rem sans-serif;
    font-weight: bold;

}
textarea{
    width: 100%;
    border: 1px solid rgb(226, 218, 218);
    font: 1rem sans-serif;
    font-weight: lighter;
    
    /* box-shadow: 1px 1px 4px rgba(0,0,0,0.2); */
}
textarea:focus,
input:focus,
select:focus{
    outline: none;
}
.task-body{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    height: 70%;
}
.task-footer{
    left: 0;
    bottom: 0;
    position: relative;
    padding: 3px 15px 3px 12px;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
select{
    border: none;
    font: 1rem sans-serif;
    font-weight: 500;
}
input,
.tasknameInput{
    border: none;
    width: fit-content;
    font: 1em sans-serif;
    font-weight: 500;
}
.tasknameErrorInput{
    color: red;
}

input::placeholder{
    font: 1em sans-serif;
    font-weight: lighter;
}

</style>