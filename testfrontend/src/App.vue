<template>
  <h2>Test Vue</h2>
  <form-body @add-user = "submit"></form-body>
  <b><h2>Users</h2></b>
  <div v-for = "user in users" :key = "user.id">
    {{ user.name }}
  </div>
  
  </template>
  
  <script>
  import FormBody from './components/FormBody.vue'
  import axios from 'axios'
  export default {
    components: {
      FormBody
    },
    data(){
      return {
        users: []
      }
    },
    created(){
      axios.get('http://127.0.0.1:8000/apis/create/')
      .then(response => {
        this.users = response.data;
        console.log(this.users, 'frsgrgr')
      })
    },
    methods:{
      submit(val){
        axios.post('http://127.0.0.1:8000/apis/create/', val)
        .then(response => {
          console.log(val, response.data);
          this.users.push(val);
        })
      }
    }
  };
  </script>
  
  <style>
  
  </style>
  