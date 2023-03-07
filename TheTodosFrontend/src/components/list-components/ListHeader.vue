<template>
    <base-card>
        <div class = "row">
            <div class = "left">
                <p>Name</p>
            </div>
            <div class = "right">
                <p>Count</p>
                <p>Action</p>
            </div>
        </div>
    </base-card>
</template>

<style scoped>
.row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.right,
.left{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.right p,
.left p{
    margin: 1rem;
    font-weight: bold;
}
.left p{
    margin: 1rem;
}


</style>