<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Son İşler</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="task in list">
        <div class="card-body">
          <h5 class="card-title">{{task.taskname}}</h5>
          <p class="card-text">{{task.taskcomment}}</p>
        </div>
      </div>
     
     
     <div class="container-fluid pt-5">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <p class="conduit"> conduit</p>
               <p class="palt">  An interactice learning project from  </p>  
               <p class="things">Thinkster.</p>
               <p class="palt">Code&design licensed under MIT</p> 
              
            </div>
        </nav>
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
.conduit{
    color:rgb(96, 143, 3);
    font-size: 10px;
    font-weight: bold;

}
.palt{
  color:grey;
    font-size: 10px;
    font-weight: bold;
    padding-left:1%;
}
.things{
    color:rgb(96, 143, 3);
    font-size: 10px;
    font-weight: bold;

}
</style>