import axios from "axios";
// export const SET_TASKS = 'SET_TASKS'
// export const FETCH_TASKS = 'FETCH_TASKS'
// USE MUTATIONS AND ACTION NAMES AS CONST, TO AVOID ERRORS

export default {
    namespaced: true,
    state() {
        return {
            todotasks: [],
            taskCount: {},
            // API_URL: 'http://18.204.15.28:8000/api/'

            API_URL: 'http://127.0.0.1:8001/api/'
            // API_URL: 'http://18.204.15.28/api/'
            // API_URL: 'http://100.26.5.217/apis/'
        };
    },
    mutations: {
        load(state, payload){
            state.todotasks = payload;
        },
        add(state, payload){
            const newtask = {
                "name": "",
                "description": "",
                "priority": "None",
                "status": false,
                "favorite": false,
                "deadline": "1979-01-01",
                "list": payload.id
            }
            state.todotasks.push(newtask);
        },
        update(state, payload){
            const id = payload.taskId;
            const newtask = payload.values;
            if (id === undefined){
                axios.post(state.API_URL + 'tasks/', newtask);
            }
            else{
                axios.put(state.API_URL + `tasks/${id}`, newtask)
                .then(() => {
                    const index = state.todotasks.findIndex(idx => idx.id === id);
                    state.todotasks[index] = newtask;
                })
                .catch((error) => {console.log(JSON.stringify(error))});
            }
        },
        delete(state, payload){
            const id = payload.id;
            if(id === undefined){state.todotasks.pop()}
            else{
                console.log(state.currentListId, state.API_URL,'----------');
                const index = state.todotasks.findIndex((task) => task.id === id);
                axios.delete(state.API_URL + `tasks/${id}`)
                state.todotasks.splice(index, 1);
            }
        },
        setTaskCount(state, payload){
            state.taskCount = payload;
        }
    },
    actions: {
        load(context, payload){
            const id = payload.id;
            context.currentListId = id;
            console.log(context.currentListId);
            axios.get('http://127.0.0.1:8000/api/tasks/') // {params: {list: id}}
            .then(response => {
                const tasks = response.data;
                context.taskCount = {};
                for (const task of tasks){
                    if(!(task.list in context.taskCount)){
                        context.taskCount[task.list] = 1;
                    }else{
                        context.taskCount[task.list] += 1;
                    }
                }
                context.commit('load', tasks.filter((task) => task.list == id));
                context.commit('setTaskCount', context.taskCount);
            }).catch()
        },
        add(context, payload){
            context.commit('add', payload);
        },
        update(context, payload){
            context.commit('update', payload);
        },
        delete(context, payload){
            context.commit('delete', payload);
        },
    },
    getters: {
        getTaskData(state){return state.todotasks;},
        getCountValue(state){return state.taskCount}
    }
};

