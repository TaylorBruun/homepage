import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTodos(){
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template
    // console.log('drawing!');
}

export class TodosController {
    constructor() {
        this.getTodos()
        ProxyState.on('todos', _drawTodos)
        _drawTodos()
    }
    async createTodo() {
        try {
            window.event.preventDefault()
            let input = window.event.target.todo.value
            console.log('input in controller is ', input);
            await todosService.createTodo(input)
            window.event.target.reset()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async getTodos(){
        try {
            await todosService.getTodos()
        } catch (error){
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async updateTodo(id, completed){
        console.log('here are the id and completed status passed to controller', id, completed);
        try {
            await todosService.updateTodo(id, completed)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async deleteTodo(id){
        try {
            await todosService.deleteTodo(id)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    testStrikethrough(id){
        console.log(document.getElementById(id));
        document.getElementById(id).classList.toggle('text-decoration-line-through')    
      }
}

