import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTodos(){
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template
    let todosLeft = 0
    ProxyState.todos.forEach(t => {
        if (!t.completed) {
            todosLeft++
        }
    })
    document.getElementById('count').innerText = `${todosLeft}/${ProxyState.todos.length}`
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
            
            // TODO figure out how to reset the form
            // window.event.target.todo.reset()
            
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
        if (await Pop.confirm("Are you sure you want to delete this task?")){

            try {
                await todosService.deleteTodo(id)
            } catch (error) {
                console.error(error)
                Pop.toast(error.message, 'error')
            }
        }
    }

    testStrikethrough(id){
        console.log(document.getElementById(id));
        document.getElementById(id).classList.toggle('text-decoration-line-through')    
      }
}

