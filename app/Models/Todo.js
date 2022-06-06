
export class Todo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed ?? false
        this.description = data.description
    }




    get Template(){
        return`
        <h5 id="${this.id}" class="p-1 text ${this.completed ? 'text-decoration-line-through' : ''}"><span class='selectable' onclick="app.todosController.updateTodo('${this.id}', ${this.completed})">${this.description}</span><button onclick="app.todosController.deleteTodo('${this.id}')" class="m-2 mdi mdi-delete btn btn-danger"></button></h5>
        `
    }
}