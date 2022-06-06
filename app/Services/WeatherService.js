import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"




class WeatherService{
    toggleWeather() {
        ProxyState.currTemp = ProxyState.weatherToggled? ((ProxyState.currTemp - 32) * 5/9) : ((ProxyState.currTemp * 9/5) + 32)
        ProxyState.weatherToggled = !ProxyState.weatherToggled

    }
    async getWeather() {
        const res = await sandboxApi.get('weather')
        // console.log(res.data, 'here is the weather res');
        ProxyState.currTemp = (res.data.main.temp - 273.15)
        console.log(ProxyState.currTemp);
    }

}

export const weatherService = new WeatherService()