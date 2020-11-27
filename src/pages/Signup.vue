<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="well">
                <h4>Sign Up</h4>
            </div>
     
            <div class="form-group"  >
                    <input type="text"   class="form-control" 
                    @blur="$v.username.$touch()" 
                    v-model="username" autocomplete="off"  
                    placeholder="Username">
                    <small v-if="$v.username.required" class="form-text text-danger">Bu alan zorunludur.</small>
                    <small v-if="!$v.username.minLength" class="form-text text-danger">kullanıcı adınız çok kısa {{ $v.username.$params.minLength.min }}</small>
                    <p>{{$v}}</p>
            </div>
           
                <div class="form-group">
                    <input  @blur="$v.email.$touch()" autocomplete="off"  
                     v-model="email"  :class="{'is-invalid': $v.email.$error}" 
                     class="form-control" placeholder="Email" />
                    <small v-if="!$v.email.required" class="form-text text-danger">Bu alan zorunludur.</small>
            <small v-if="!$v.email.email" class="form-text text-danger">Lütfen geçerli bir posta adresi giriniz...</small>
                </div>
                <div class="form-group">
                    <input type="password" autocomplete="off" v-model="password" class="form-control" placeholder="Password" />
                    <small v-if="!$v.password.required" class="form-text text-danger">Bu alan zorunludur.</small>
                    <small v-if="!$v.password.minLength" class="form-text text-danger">Şifreniz en az {{ $v.password.$params.minLength.min }} rakam olmalı.</small>
            <small v-if="!$v.password.maxLength" class="form-text text-danger">Şifreniz en çok {{ $v.password.$params.maxLength.max }} rakam olmalı</small>
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
                 
                    username:null,
                    email: "",
                    password:""
                
            }
        },

        validations:{
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
    methods: {
            save() {
                this.$store.dispatch("insert", this.input);
            },
            load() {
                this.$store.dispatch("query");
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