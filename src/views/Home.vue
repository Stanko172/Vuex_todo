<template>
  <div class="home">
    <div class="container">
      <form>
        <div class="form-group d-flex justify-content-end">
          <select v-model.lazy="option" @change="handleChange">
            <option>200</option>
            <option>100</option>
            <option>50</option>
            <option>20</option>
            <option>10</option>
            <option>5</option>
          </select>
        </div>
      </form>
    </div>
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from '../components/Todos.vue'
import AddTodo from '../components/AddTodo.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data(){
    return{
      option: null
    }
  },
  methods: {
    ...mapActions(['filterTodos']),
    handleChange(){
      this.filterTodos(this.option)
    }
  }
}
</script>
