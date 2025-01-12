
import axios from 'axios'

export default {
    loadLists(state){
        axios.get('http://127.0.0.1:8001/api/lists').then(response => {
            state.todolist = response.data;
            console.log(state.todolist);
        })
    },
    getTasks(state, payload) {
        axios.get('http://127.0.0.1:8001/api/tasks/', {
            params: {
                "list": payload.id
            }
        }).then(response => {
            state.todotasks = response.data;
        }).catch()
        console.log("todo", state.todotasks);
    },
    // getCount(state, id){
    //     const tasks = state.todotasks; //state.commit('getTasks');
    //     let count = 0;
    //     state.tasksCount = 0;
    //     for (const task of tasks){
    //         if (task.list == id){
    //             count++;
    //         }
    //     }
    //     state.tasksCount = count;
    // },
    deletelist(state, payload){
        const id = payload;
        const idx = state.todolist.findIndex((lid) => lid.id === id);
        state.todolist.splice(idx,1);
        console.log("Deleted Succussfully!");
    },
    updateTask(_, payload){
        const taskDetails = {
            "name": payload.enteredTask,
            "description": payload.enteredNote,
            "priority": payload.enteredPriority,
            "status": payload.enteredStatus,
            "list": payload.listId
        };
        const id = payload.taskId;
        if (id === undefined){
            axios.post('http://127.0.0.1:8001/api/tasks/', taskDetails);
        }
        else{
            axios.put(`http://127.0.0.1:8001/api/tasks/${id}`, taskDetails);
        }
    },
    deletetask(state, payload){
        const id = payload.taskId;
        const idx = state.todotasks.findIndex((task) => task.id === id);
        state.todotasks.splice(idx, 1);
        console.log("Defined taskID: ", id);
    },
    openSelectedList(state, listId, listname){
        state.openList = true; 
        state.selectedListId = listId;
        state.selectedListName = listname;
        console.log(state.selectedListId);
    },
}