import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"



class TodosService{
    async deleteTodo(id) {
        const res = await sandboxApi.delete(`tay/todos/${id}`)
        console.log('deleting ', res.data);
        this.getTodos()
    }
   async updateTodo(id, compl) {
       const res = await sandboxApi.put(`tay/todos/${id}`, {completed: !compl})
       console.log(res.data, 'here is the updated object');
       this.getTodos()
    }
  async getTodos() {
      const res = await sandboxApi.get('tay/todos')
    //   console.log(res.data, 'here is the res from the get ');
      ProxyState.todos = res.data.map(t => new Todo(t))
    //   console.log(ProxyState.todos, 'here are the objectified todos')
   }
   async createTodo(input) {
        const res = await sandboxApi.post('tay/todos', {description:input})
        console.log(res.data, 'here is the res from the post todo');
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
        console.log('here is the todos array after a create',ProxyState.todos);
    }

}


export const todosService = new TodosService()