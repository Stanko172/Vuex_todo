<template>
    <div class="container">
        <div class="row">
            <div class="card col-4" v-for="(todo, index) in getAllTodos" :key="index">
                <div class="card-body" @dblclick="handleComplete(todo)" :class="[todo.completed == true ? 'green' : 'grey']">
                    <h5>{{ todo.title }}</h5>
                    <a href="#" class="btn btn-primary" @click.prevent="deleteTodo(todo.id)">Delete</a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([ 'getAllTodos'])
    },
    methods:{
        ...mapActions([ 'fetchTodos','deleteTodo', 'updateTodo']),
        handleComplete(todo){
            const updatedTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updatedTodo)
        }
    },
    created(){
        this.fetchTodos()
    }
}
</script>

<style scoped>
    .green{
        background: green;
    }

    .grey{
        background: grey;
    }
</style>