import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"



class BackgroundsService{
 async   getBackground() {
        const res = await sandboxApi.get('images')
        console.log(res.data.largeImgUrl);
        ProxyState.currBackground = res.data.largeImgUrl
    }

}

export const backgroundsService = new BackgroundsService()