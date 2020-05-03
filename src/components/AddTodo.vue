<template>
    <div class="container">
        <form class="mb-5">
            <div class="form-group">
                <label for="example">Add new Todo:</label>
                <input type="text" class="form-control" id="example" v-model="title">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="handleSubmit">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            title: ''
        }
    },
    methods: {
        ...mapActions(['addNewTodo']),
        handleSubmit(){
            this.addNewTodo(this.title)
        }
    },

}
</script>