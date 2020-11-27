import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
    //Değişkenleri ve bu değişkenlere bağlı değerleri barındırdığımız alandır.
    state: {
    
    },
    //State içerisindeki bir değeri değiştirmek istediğimizde mutations objesi içerisindeki bir fonksiyonu çalıştırırız.
    //Mutations altındaki bir fonksiyonu çalıştırmak için ‘commit’ kullanırız. 
    mutations: {

    },
    //asenkron metodları buraya yazarız.
    //Dispatch komutu ile birlikte kullanırız. Örneğin; this.$store.dispatch(‘triggerChangeMessage’, ‘Vuex kullanımı’)
    actions: {
       
 
    },
    //component içerisinde kullanmak için fonksiyonu oluşturduktan sonra this.$store.getters.firstMessage şeklinde çağırabiliriz.
    getters: {

    }


});

 