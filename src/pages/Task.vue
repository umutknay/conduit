<template>
     
     <form @submit.prevent="onSubmit">
            <div class="well">
                <h4>task ekleme</h4>
            </div>
                <div class="form-group">
                    <input v-model="input.taskname" class="form-control" placeholder="taskname" />
                </div>
                <div class="form-group">
                    <input v-model="input.taskcomment" class="form-control" placeholder="taskcomment" />
                </div>
                
            <button
                type="submit"
                class="btn btn-large btn-block btn-primary full-width">kaydet</button>
        </form>
</template>


<script>
export default {
     data() {
            return {
                input: {
                    taskname:"",
                    taskcomment:"",
                    
                }
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
                this.input.taskname = "";
                this.input.taskcomment = "";
                 
            }
        }
};
    

</script>

<style  scoped>

</style>