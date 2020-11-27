import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
    //Değişkenleri ve bu değişkenlere bağlı değerleri barındırdığımız alandır.
    state: {

        taskList:[
            {taskname:"Learn javascript",taskcomment:"learn javascirp details"},
           {taskname:"Learn vue",taskcomment:"learn vue details"},
            {taskname:"Learn bigdata",taskcomment:"learn bigdata details"}
        ],
        userList:[
            {id:1,username:"önsel.aydin",email:"önsel.aydin@gmail.com",password:"12345"},
            {id:2,taskname:"Learn umut.kinay",email:"umut.kinay@gmail.com",password:"321654"},
            
        ]
    },
    //State içerisindeki bir değeri değiştirmek istediğimizde mutations objesi içerisindeki bir fonksiyonu çalıştırırız.
    //Mutations altındaki bir fonksiyonu çalıştırmak için ‘commit’ kullanırız. 
    mutations: {
        inserttask(state,data){
            //console.log(data)
            state.taskList.push(data);
            
        },
        insertuser(data){
            store.state.userList.push(data);
        }

    },
    //asenkron metodları buraya yazarız.
    //Dispatch komutu ile birlikte kullanırız. Örneğin; this.$store.dispatch(‘triggerChangeMessage’, ‘Vuex kullanımı’)
    actions: {
        
    },
    //component içerisinde kullanmak için fonksiyonu oluşturduktan sonra this.$store.getters.firstMessage şeklinde çağırabiliriz.
    getters: {
            getTaskList(){
                return store.state.taskList
            },
            getUserList(){
                return store.state.userList
            }

    }


});

 