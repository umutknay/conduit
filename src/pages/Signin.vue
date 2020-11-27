<template>
    <div>
      <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label>E-posta Adresiniz</label>
                        <input v-model="email" type="email" class="form-control"
                               placeholder="E-posta adresinizi giriniz">
                    </div>
                    <div class="form-group">
                        <label>Şifre</label>
                        <input v-model="password" type="password" class="form-control" placeholder="Şifreniz...">
                    </div>
                    <div class="button-container d-flex  flex-column align-items-center">
                        <button type="submit" 
                                class="btn btn-block mb-2 btn-primary">
                            Giriş Yap
                        </button>
                        <!-- <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
                            {{ isUser ? 'Üye değilim' : 'Üyeliğim var'}}
                        </a> -->
                    </div>
                </form>
    </div>
</template>

<script>
export default {
      data() {
            return {
                 
                    
                    email: "",
                    password:""
                
            }
        },
}
</script>

<style scoped>

</style>