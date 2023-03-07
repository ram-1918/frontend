<template>
    <!-- <div class = "backscreen" @click= "closeTab"></div> -->
    <div class = "inputCard">
        <header><p>Create List</p></header>
        <form @submit.prevent = "submitList({name:enteredName})">
            <input 
                type = "text" 
                id = "listname" 
                name = "listname" 
                placeholder="List Name"
                v-model = "enteredName"
                @keyup.enter="submitList({name:enteredName})">
                <p class = "errormsg" v-if = "errorDialog">List name should not be empty!</p>
                <base-button type = "submit" mode = "addMode">Add</base-button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            enteredName: '',
        };
    },
    computed:{
        errorDialog(){return this.$store.getters['createlist/getErrorMsg']},
    },
    methods: {
        ...mapActions({submitList: 'createlist/submitListName'})
    }
};
</script>

<style scoped>
.backscreen{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
}
header{
    font-size: larger;
    font-weight: bold;

}
.inputCard{
    width: 30rem;
    height: 20rem;
    padding: 2rem;
    margin: 4rem auto;
    border: none;
    border-radius: 10px;
    /* box-shadow: 1px 1px 4px rgba(0,0,0,0.4); */
}
input{
    padding: 0.6rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    font: 1.3rem sans-serif;
    font-weight: lighter;
    width: 100%;
}
input::placeholder{
    font: 1.3em sans-serif;
    font-weight: lighter;
}
input:focus{
    outline: none;
    font: 1.4em sans-serif;
    font-weight: lighter;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: white;
}
.closeAdd{
    display: flex;
    justify-content: space-evenly;
    background-color: antiquewhite;
}
.errormsg{
    margin: 0;
    padding: 0.4rem;
    color: red;
    font: 0.9rem sans-serif;
    background-color: inherit;
}
</style>