<template>
    <button type = "disable" :class = "tagmode">
        <slot></slot>
    </button>

</template>
<script>
export default {
    props: ["tagmode"]
};
</script>
<style scoped>
.button{
    padding: 5px;
    text-align: center;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.4);
}
.routerlink{
    text-decoration: none;
    font: 0.9rem sans-serif;
    font-weight: 400;
    background-color: none;
}
.notbutton{
    background: none;
    border: none;
}
.important{
    background-color: rgb(245, 44, 44);
    color: white;
}
.urgent{
    background-color: rgb(198, 245, 44);
    color: rgb(2, 2, 2);
}
.nopriority{
    background-color: rgb(255, 255, 255);
    color: rgb(11, 11, 11);
}

.notyet{
    color: rgb(163, 28, 4);
}
.completed{
    color: green
}

</style>




<!-- p{
    top: 10%;
    left: 36%;
    position: relative;
    padding: 0.3rem;
    border-radius: 5px;
    color: white;
    font: 1rem sans-serif;
    background-color: rgb(1, 113, 5);
    max-width: 25rem;
    text-align: center;
    z-index: 100;
    animation: moveup 3s;
}
.popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    z-index: 10;
    background-color: rgba(0,0,0,0);
}

@keyframes moveup{
    from {top: 10%; opacity: 1;}
    to {top:0%; opacity: 0}
} -->