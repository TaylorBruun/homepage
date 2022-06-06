import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"



class QuotesService{
    async getQuote() {
       const res = await sandboxApi.get('quotes')
    //    console.log('here is the quotes service res', res.data)
       let data = {
           author: res.data.author,
           content: res.data.content
       }
        ProxyState.currQuote = data
        // console.log(ProxyState.currQuote);
    }

}


export const quotesService = new QuotesService