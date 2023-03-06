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
        API_URL : 'http://18.204.15.28:8000/apis/create/',
        users: []
      }
    },
    created(){
      axios.get(this.API_URL)
      .then(response => {
        this.users = response.data;
        console.log(this.users, 'frsgrgr')
      })
    },
    methods:{
      submit(val){
        axios.post(this.API_URL, val)
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
  