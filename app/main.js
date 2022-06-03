import { BackgroundsController } from "./Controllers/BackgroundsController.js";
import { TodosController } from "./Controllers/TodosController.js";


class App {

  todosController = new TodosController();
  backgroundsController = new BackgroundsController()


}


window["app"] = new App();



