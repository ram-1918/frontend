<template>
    <div class = "edge-case">
        <p>
            <slot>
            </slot>
        </p>
    </div>
</template>

<style scoped>
.edge-case{
    margin: 10rem auto;
    /* transition: 0.5s ease-in-out; */
    position: relative;
    animation: animateRotate 2s infinite;
}
.edge-case p{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:1.5rem;
    font-weight: 450;
}
p::after{
    content: '!';
    padding: 5px;
    font-size: larger;
}
@keyframes animateRotate{
    from {color: black;}
    to {color: red;}
}
</style>