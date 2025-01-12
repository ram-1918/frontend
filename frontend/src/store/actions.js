export default {
    getLists(state) {
        state.commit('getLists');
    },
    getTasks(state, payload) {
        state.commit('getTasks', payload);
    },
    // deleteList(state, payload){
    //     state.commit('deleteList', payload);
    // },
    updateTask(state, payload){
        state.commit('updateTask', payload)
    },
    // deleteTask(state, payload){
    //     state.commit('deleteTask', payload);
    // },
    openSelectedList(state, listId, listname){
        state.commit('openSelectedList', listId, listname);
    },
    viewList(state, id){
        state.commit('viewList', id);
    },
}