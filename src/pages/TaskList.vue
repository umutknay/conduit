<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="task in list">
        <div class="card-body">
          <h5 class="card-title">{{task.taskname}}</h5>
          <p class="card-text">{{task.taskcomment}}</p>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
    
     created(){
         console.log(this.$store.getters);
         this.list=this.$store.getters.getTaskList;
    },
     data() {
            return {
                list:[]
            }
        },
}
</script>

<style scoped>

</style>