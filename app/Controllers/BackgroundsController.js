import { ProxyState } from "../AppState.js";
import { backgroundsService } from "../Services/BackgroundsService.js";

function _drawBackground(){
    document.body.style.backgroundImage = `url(${ProxyState.currBackground})`
}

export class BackgroundsController{
    constructor(){
        this.getBackground()
        ProxyState.on('currBackground', _drawBackground)
    }

  async  getBackground(){
        await backgroundsService.getBackground()
    }

}