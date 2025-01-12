import axios from 'axios'
// import router from '@/router'
export default {
    namespaced: true,
    state() {
        return {
            todolist: [], 
            listNamesArray: {},
            tasksCount: 0,
            API_URL: 'http://127.0.0.1:8001/api/'
            // API_URL: 'http://18.204.15.28:8000/api/'
            // API_URL: 'http://100.26.5.217/apis/'
        };
    },
    mutations: {
        load(state){
            axios.get(state.API_URL + 'lists').then(response => {
                state.todolist = response.data;
                for (const list of state.todolist){
                    state.listNamesArray[list.id] = list.name;
                }
                console.log(state.todolist, state.listNamesArray);
            })
        },
        delete(state, payload){
            const id = payload.id;
            const index = payload.index;
            axios.delete(state.API_URL + `lists/${id}`).then(response => {
                state.todolist.splice(index, 1);
                console.log(response.data);
            }).catch();
            console.log('Delete List Mutation');
        },
        update(state, payload){
            const id = payload.id;
            const index = state.todolist.findIndex((list) => list.id === id)
            const value = payload.value;
            console.log(value, id)
            axios.patch(state.API_URL + `lists/${id}`, {"favorites":  value})
            .then(() => {
                state.todolist[index].favorites = value;
            })
            .catch((error) => {console.log(error)})
        }
    },
    actions: {
        load(context){
            context.commit('load');
        },
        delete(context, payload){
            context.commit('delete', payload);
        },
        update(context, payload){
            context.commit('update', payload)
        }
    },
    getters: {
        getListData(state){
            return state.todolist;
        },
        listNamesObject(state){return state.listNamesArray;}
    }
};