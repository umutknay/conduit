<template>
 
    <div class="container-fluid pt-5">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link class="nav-link" to="/tasklist">Home</router-link> </li>
                    <li class="nav-item"><router-link class="nav-link" to="/">Sign In</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/signup">Sign Up</router-link></li>
                     <li class="nav-item"><router-link class="nav-link" to="/task">Task</router-link></li>
                </ul>
            </div>
            <p class="conduit"> conduit </p>  
        </nav>
        
        <div class="mavi">
               <p class="headertext"> Epsilam </p>  
               <p class="headtext"> Create Future </p>       
        </div> 
            
    </div>
     
               
</template>
 
<script>
export default {
    
}
</script>

<style scoped>
.mavi{
    background-color: blue;
    padding: 10px;
}
.headertext{
    color: white;
    font-size: 40px;
    font-weight: bold;
    padding-left: 45%;

}
.headtext{
    color: white;
    font-size: 20px;
    padding-left: 46%;
    margin-bottom: 20px;

}
.conduit{
    color:rgb(96, 143, 3);
    font-size: 20px;
    padding-left: 46%;
     
    font-weight: bold;

}
</style>