import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"
import { Pop } from "../Utils/Pop.js"


function _drawQuote(){
    document.getElementById('quotes').innerHTML = `<h4 class="quote text">${ProxyState.currQuote.content}
    <span class="author text">-${ProxyState.currQuote.author}</span></h4>`
}

export class QuotesController{
    constructor(){
        this.getQuote()
        _drawQuote()
        ProxyState.on('currQuote', _drawQuote)
    }

    async getQuote(){
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    

}