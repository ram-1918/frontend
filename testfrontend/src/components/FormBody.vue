<template>
    <form @submit.prevent = "submitdata">
        <label for = "name">Name</label>
        <input type = "text" id = "name" placeholder="Enter Name" v-model = "enteredName" />
        <label for = "password">password</label>
        <input type = "text" id = "password" placeholder="Enter Password" v-model = "enteredPassword" />
        <button type = "submit">Login</button>
    </form>
</template>

<script>
export default {
    emits: ['add-user'],
    data(){
        return {
            enteredName: '',
            enteredPassword: '',
        };
    },
    methods:{
        submitdata(){
            const user = {
                name: this.enteredName,
                password: this.enteredPassword
            };
            console.log(user);
            this.$emit('add-user', user);
        }
    }
};
</script>