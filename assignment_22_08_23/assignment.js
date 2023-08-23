"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Object.defineProperty(exports, "__esModule", { value: true });
var url = "http://api.weatherapi.com/v1/forecast.json?key=5b26d7e3099f48ddb65102247232208&q=londan&days=5&aqi=no&alerts=no";
// Standard variation
function api(obj) {
    return __awaiter(this, void 0, void 0, function () {
        var city;
        return __generator(this, function (_a) {
            city = obj.value;
            url = "http://api.weatherapi.com/v1/forecast.json?key=5b26d7e3099f48ddb65102247232208&q=" + city.toLowerCase() + "&days=5&aqi=no&alerts=no";
            return [2 /*return*/, fetch(url)
                    .then(function (response) {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                    .then(function (data) {
                    var today_weather = data.forecast.forecastday[0];
                    var current = "<h1>Today's Weather</h1><ul><li>Tempreature : ".concat(data.current.temp_c, "</li>\n                            <li>Humidity : ").concat(data.current.humidity, "</li>\n                            <li>Min tempreature : ").concat(today_weather.day.mintemp_c, "</li>\n                            <li>Max Tempreature : ").concat(today_weather.day.maxtemp_c, "</li>\n                        </ul>");
                    var future_5days_data = "<h1>Next 5days  weather report</h1>";
                    for (var x in data.forecast.forecastday) {
                        var day1 = "<h2>day".concat(x, "</h2><ul><li>Average Tempreature : ").concat(data.forecast.forecastday[x].day.avgtemp_c, "</li>\n                          <li>average Humidity : ").concat(data.forecast.forecastday[x].day.avghumidity, "</li>\n                          <li>Min tempreature : ").concat(data.forecast.forecastday[x].day.mintemp_c, "</li>\n                          <li>Max Tempreature : ").concat(data.forecast.forecastday[x].day.maxtemp_c, "</li>\n                      </ul>");
                        future_5days_data += day1;
                    }
                    var div1 = document.querySelector('div');
                    div1.innerHTML += current;
                    div1.innerHTML += future_5days_data;
                    console.log(data);
                }).catch(function (err) {
                    var div1 = document.querySelector('div');
                    div1.innerHTML = err;
                })];
        });
    });
}
// console.log(api(url).then((data)=>data));
// declare let obj : any;
// api(obj);
