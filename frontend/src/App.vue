<template>
  <router-view :key = "this.$store.state.reloadCounter"></router-view>
  
  <!-- <todo-footer></todo-footer> -->
</template>

<script>
export default {
  created(){
      this.$store.dispatch('tasks/load',{id: null, listname: null});
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('@fortawesome/fontawesome-free/css/all.css');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");


* {
  box-sizing: border-box;
}

html {
  font: 1rem sans-serif;
}

body{
  margin: 0;
}
</style>
