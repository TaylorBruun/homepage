import { BackgroundsController } from "./Controllers/BackgroundsController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodosController } from "./Controllers/TodosController.js";


class App {

  todosController = new TodosController();
  backgroundsController = new BackgroundsController()
  timeController = new TimeController()


}


window["app"] = new App();



