import router from '@/router';
import axios from 'axios'
export default {
    namespaced: true,
    state() {
        return {
            errorMsg: false,
            API_URL: 'http://18.204.15.28:8000/api/'
            // API_URL: 'http://127.0.0.1:8000/api/'
            // API_URL: 'http://18.204.15.28/api/'
            // API_URL: 'http://100.26.5.217/apis/'
        };
    },
    mutations: {
        submitListName(state, payload){
            const name = payload.name.toLowerCase();
            const first = name.charAt(0).toUpperCase();
            const enteredName = first + name.slice(1);
            console.log(enteredName, 'Submitted Name');
            if (enteredName.trim() === ''){
                state.errorMsg = true;
                return 
            }
            axios.post(state.API_URL + 'lists/', 
            {
                "name": enteredName,
                "priority": "1",
                "deadline": "2023-02-23",
                "favorites": false
            })
            .then(response => {
                state.errorMsg = false;
                // push this data to todolist with dispatching list/load method?
                console.log(response.data, 'fregdfgfdfdb');
            });
            router.push('/api/lists/')
        },
    },
    actions: {
        submitListName(context, payload){
            context.commit('submitListName', payload);
        }
    },
    getters: {
        getErrorMsg(state){
            return state.errorMsg;
        }
    }
};