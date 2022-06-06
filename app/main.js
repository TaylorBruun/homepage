import { BackgroundsController } from "./Controllers/BackgroundsController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {

  todosController = new TodosController()
  backgroundsController = new BackgroundsController()
  timeController = new TimeController()
  quotesController = new QuotesController()
  weatherController = new WeatherController()


}


window["app"] = new App();



