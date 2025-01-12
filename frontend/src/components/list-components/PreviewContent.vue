<template>
        <tr>
            <td>{{ name }} </td>
            <td>{{ deadline }}</td>              
            <td><base-tags :tagmode = "priorityTag">{{ checkPriority }}</base-tags></td>
            <td><base-tags :tagmode = "statusTag">{{ checkStatus }}</base-tags></td>
        </tr>
</template>

<script>
export default {
    props: ['id', 'index', 'name', 'fav', 'deadline', 'priority', 'status'],
    computed:{
        checkPriority(){
            if(this.priority === '1'){return "Important"}
            else if(this.priority === '2'){return "Urgent"}
            else{return "No Priority"}
        },
        priorityTag(){
            if(this.priority === '1'){return "important button"}
            else if(this.priority === '2'){return "urgent button"}
            else{return "nopriority button"}
        },
        checkStatus(){
            return this.status === true ? "Completed":"Not Yet...";
        },
        statusTag(){
            return this.status === true ? "completed notbutton":"notyet notbutton";
        }
    },

};
</script>

<style scoped>


#previewcontent td {
  border: 1px solid #ddd;
  padding: 6px;
  overflow: hidden;
}
#previewcontent tr {
  text-align: left;
  color: rgb(3, 3, 3);
}
.checked{
  color: #c20232fc;
  font-size:medium;
}
.notchecked{
  color: rgb(85, 79, 79);
  font-size: medium;
}





</style>