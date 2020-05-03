import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'First todo'
      },
      {
        id: 2,
        title: 'Second todo'
      },
      {
        id: 3,
        title: 'Third todo'
      }
    ]
  },
  mutations: {
    SET_TODOS: (state, todos) => state.todos = todos,
    NEW_TODO:  (state, response) => state.todos.unshift(response),
    REMOVE_TODO: (state, id) => state.todos = state.todos.filter( todo => todo.id !== id),
    UPDATE_TODO: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id)
      if(index !== -1){
        state.todos.splice(index, 1, updTodo)
      }
    }
  },
  actions: {
    fetchTodos({ commit }){
      axios.get('https://jsonplaceholder.typicode.com/todos')

      .then( response => {
        commit('SET_TODOS', response.data)
      })
      
    },
    addNewTodo({ commit }, title){
      axios.post('https://jsonplaceholder.typicode.com/todos', { title: title, completed: false })

      .then(response => {
        commit('NEW_TODO', response.data)
      })
    },
    deleteTodo({ commit }, id){
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

      commit('REMOVE_TODO', id)
    },
    filterTodos({ commit }, option){
      axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${option}`)

      .then( response => commit('SET_TODOS', response.data))
    },
    updateTodo({ commit }, todo){
      axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)

      .then( response => {
        commit('UPDATE_TODO', response.data)
      })
    }
  },
  getters: {
    getAllTodos: state =>  state.todos
    
  }
})
