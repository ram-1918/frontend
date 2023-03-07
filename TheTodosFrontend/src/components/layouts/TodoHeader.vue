<template>
    <header :class = "mode">
        <h2>
            <slot>
            </slot>
        </h2>
    </header>
</template>
<script>

export default {
    props:["mode"]
};
</script>
<style scoped>
header{
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(14, 11, 54, 0.899); */
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 5px rgba(4,4,4,0.3);
}
h2{
    color: rgb(109, 4, 4);
    margin: 0;
}
.inputHeader{
    width: 100%;
    height: 3rem;
}
</style>