import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";



function _drawWeather(){
    document.getElementById('weather').innerHTML = `<h4 onclick='app.weatherController.toggleWeather()' class="no-select weather-text text" >${ProxyState.currTemp.toFixed(1)}°${ProxyState.weatherToggled? 'F' : 'C'}</h4>`


}

export class WeatherController{
    constructor(){
        console.log('weather controller loaded');
        this.getWeather()
        ProxyState.on('currTemp', _drawWeather)
        ProxyState.on('weatherToggled', _drawWeather)
    }


    async getWeather(){
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
            
        }
    }

    toggleWeather(){
        weatherService.toggleWeather()
    }

}