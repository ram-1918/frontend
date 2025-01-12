import {createStore} from 'vuex'

import listModule from './modules/list'
import tasksModule from './modules/tasks'
import createlistModule from './modules/createlist'

// import rootMutations from './mutations'
// import rootActions from './actions'
// import rootGetters from './getters'

const store = createStore({
    modules: {
        list: listModule,
        tasks: tasksModule,
        createlist: createlistModule
    },
    state() {
        return {
            abcdef: "dsvdsf",
            API_URL: 'http://127.0.0.1:8001/api/'

            // API_URL: 'http://127.0.0.1:8000/api/'
        }
    },
    mutations: {},
    actions: {},
    getters: {}
});

export default store;