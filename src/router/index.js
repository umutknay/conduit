import VueRouter from 'vue-router';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import TaskList from '../pages/TaskList';
import Task from '../pages/Task';


export const routes= [
    
        { path : "/", component : Signin },
        { path : "/signup", component : Signup },
        { path : "/tasklist", component : TaskList },
        { path : "/task", component : Task },
    ];
export default new VueRouter({routes});

 

//https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
//https://cli.vuejs.org/guide/creating-a-project.html#vue-create
//vue add bootstrap-vue
//npm add vuelidate
//https://developer.aliyun.com/mirror/npm/package/vue-confirm-dialog/v/0.1.3
//http://bilgisayaci.org/category/vue/
