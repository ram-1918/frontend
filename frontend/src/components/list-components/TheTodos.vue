<template>
    <div class = "wrapper">
        <todo-header>Task Tracker</todo-header>
        <div class = "nav">
            <router-link to = "/api/create-list">
                <i class="fa fa-plus" style="font-size:34px"></i>
            </router-link>
        </div>
        <div class = "mainbody">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('list/load');
    }
};
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
}
.nav a{
    text-decoration: none;
    border-radius: 50%;
    border: none;
    padding: 15px;
    margin: 0 auto;
    top: 82%;
    left: 90%;
    position: fixed;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
    background-color: white;
    color: rgb(141, 47, 47);
    z-index: 10;
}
nav a:hover{
    animation: animateRotate 3s;
}
@keyframes animateRotate {
    from{rotate: 0deg};
    to {rotate: 30deg};    
}
.mainbody{
    width: 100%;
    text-align: center;
}
</style>