<template>
    <div>
        <form @submit.prevent="save">
            <div class="well">
                <h4>Sign Up</h4>
            </div>
     
            <div class="form-group"  >
                    <input type="text"   class="form-control" 
                    @blur="$v.input.username.$touch()" 
                    v-model="input.username" autocomplete="off"  
                    placeholder="Username">
                    <small v-if="$v.input.username.required" class="form-text text-danger">Bu alan zorunludur.</small>
                    <small v-if="!$v.input.username.minLength" class="form-text text-danger">kullanıcı adınız çok kısa {{ $v.username.$params.minLength.min }}</small>
                    
            </div>
           
                <div class="form-group">
                    <input  @blur="$v.input.email.$touch()" autocomplete="off"  
                     v-model="input.email"  :class="{'is-invalid': $v.input.email.$error}" 
                     class="form-control" placeholder="Email" />
                    <small v-if="!$v.input.email.required" class="form-text text-danger">Bu alan zorunludur.</small>
                    <small v-if="!$v.input.email.email" class="form-text text-danger">Lütfen geçerli bir posta adresi giriniz...</small>
                </div>
                <div class="form-group">
                    <input type="password" autocomplete="off" v-model="input.password" class="form-control" placeholder="Password" />
                    <small v-if="!$v.input.password.required" class="form-text text-danger">Bu alan zorunludur.</small>
                    <small v-if="!$v.input.password.minLength" class="form-text text-danger">Şifreniz en az {{ $v.input.password.$params.minLength.min }} rakam olmalı.</small>
            <small v-if="!$v.input.password.maxLength" class="form-text text-danger">Şifreniz en çok {{ $v.input.password.$params.maxLength.max }} rakam olmalı</small>
                </div>
            <button
                type="submit"
                class="btn btn-large btn-block btn-primary full-width">Sign Up</button>
        </form>
    </div>
</template>

<script>
import { required, email , minLength, maxLength,  } from "vuelidate/lib/validators";
export default {
    data() {
            return {
                input:{
                    username:null,
                    email: "",
                    password:"",

                }
                   
                 
            }
        },

        validations:{
            input:{
                username:{
                required,
                minLength:minLength(4),
            },

            email:{
                required,
                email,

            },
            password:{
                required,
                minLength:minLength(8),
                maxLength:maxLength(12),
            
            }

            },
            
        },
    methods: {
            save() {
               
                
                this.$store.commit("insertuser", this.input)
                console.log(this.$store.getters.getUserList);
            },
          
            clear() {
                this.input.username = "";
                this.input.email = "";
                this.input.password = "";
            }
        }
};
</script>

<style scoped>

</style>