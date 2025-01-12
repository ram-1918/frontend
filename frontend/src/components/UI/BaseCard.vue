<template>
    <div :class = "mode">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ["mode"]
};
</script>
<style scoped>
div{
    border-radius: 10px;
    max-width: 60rem;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    color: rgb(2, 2, 2);
    box-shadow: 1px 1px 6px rgba(2,2,2,0.2);
}
.headerType{
    max-width: 60rem;
    padding: 0.1rem;
    box-shadow: 1px 1px 1px rgba(0,0,0,0);
}
</style>