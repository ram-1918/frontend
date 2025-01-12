<template>
    <button :type = "type" :class = "mode">
        <slot>

        </slot>
    </button>
</template>

<script>
export default {
    props: ["type", "mode"],
};
</script>

<style scoped>
button{
    border: none;
    background-color: burlywood;
    border-radius: 5px;
    /* padding: 0.35rem;
    margin: 1rem; */
    cursor: pointer;
}
.backMode{
    background-color: white;
    border: none;
    font-weight: 500;
    font-size: 1rem;
}
.backMode:hover{
    opacity: 0.7;
}
.addMode{
    background-color: white;
    color: rgb(175, 31, 6);
    font-weight: lighter;
    border: 1px solid rgb(182, 31, 5);
    padding: 0.6rem 1rem;
    margin: 1rem;
}
.addMode:hover,
.saveMode:hover{
    opacity: 0.7;
}
.saveMode{
    border: 1px solid green;
    color: green;
    background-color: white;
    padding: 0.4rem 0.6rem;
}

.deleteMode{
    background: none;
    border: none;
    color: rgb(9, 9, 9);
    cursor: pointer;
    text-decoration: underline;
}
.deleteMode:hover{
    color: rgb(197, 34, 5);
}


</style>