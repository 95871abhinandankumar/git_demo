import {Weather, Condition, Astro, Day, Forecast, Hour, Location, Forecastday, Current, Text} from "./dataFormat"

let url: string = `http://api.weatherapi.com/v1/forecast.json?key=5b26d7e3099f48ddb65102247232208&q=londan&days=5&aqi=no&alerts=no`;
// Standard variation
async function api(obj) {
    const city : string = obj.value;
    url = `http://api.weatherapi.com/v1/forecast.json?key=5b26d7e3099f48ddb65102247232208&q=` + city.toLowerCase() + `&days=5&aqi=no&alerts=no`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()})
        .then((data:Weather) => {
          const today_weather = data.forecast.forecastday[0];
          let current = `<h1>Today's Weather</h1><ul><li>Tempreature : ${data.current.temp_c}</li>
                            <li>Humidity : ${data.current.humidity}</li>
                            <li>Min tempreature : ${today_weather.day.mintemp_c}</li>
                            <li>Max Tempreature : ${today_weather.day.maxtemp_c}</li>
                        </ul>`
          let future_5days_data = `<h1>Next 5days  weather report</h1>`
          for(let x in data.forecast.forecastday){
              let day1=`<h2>day${x}</h2><ul><li>Average Tempreature : ${data.forecast.forecastday[x].day.avgtemp_c}</li>
                          <li>average Humidity : ${data.forecast.forecastday[x].day.avghumidity}</li>
                          <li>Min tempreature : ${data.forecast.forecastday[x].day.mintemp_c}</li>
                          <li>Max Tempreature : ${data.forecast.forecastday[x].day.maxtemp_c}</li>
                      </ul>`
                      future_5days_data += day1;
          }
          let div1 = document.querySelector('#result');
            div1.innerHTML += current;
            div1.innerHTML += future_5days_data;

          console.log(data);
        }

      ).catch((err)=>{
          let div1 = document.querySelector('#result');
          div1.innerHTML = err;
          
        
      });
  
}
// console.log(api(url).then((data)=>data));
// declare let obj : any;

// api(obj);
