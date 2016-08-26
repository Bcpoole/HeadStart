//import {computedFrom} from 'aurelia-framework';

export class Weather {
    constructor() {
        this.today = this.getToday();
        
        this.time = this.getTime();
        setInterval(() => {
            this.time = this.getTime();
        }, 1000) //update time every second
        
        this.getData();
        setInterval(() => {
          this.getData();  
        }, 300000) //5min weather updates
    }
    
    getToday() {
        let today = new Date();
        var dd = today.getDate();

        if(dd<10) {
            dd='0'+dd
        } 
        
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        let monthName = month[today.getMonth()];
        
        var weekday = new Array(7);
        weekday[0]=  "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thurs";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        let dayOfWeek = weekday[today.getDay()];
        
        return dayOfWeek + ", " + dd + " " + monthName;
    }
    
    getTime() {
        let currentdate = new Date();
        let postfix = "";
        if (currentdate.getHours() >= 12) {
            postfix = "pm"
        } else {
            postfix = "am"
        }
        
        let mins = String(currentdate.getMinutes());
        if (mins.length == 1) {
            mins = "0" + mins;
        }
        
        return (currentdate.getHours() % 12) + ":" + mins + " " + postfix;
    }
    
    getData() {
        this.err = null;
        let reader = new FileReader();
        
        //let file = 'client_secret.json';

        let apiKey = "insert weather key here"; //sorry for the crude handling of this
        
        let zip = '35402';
        let weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + apiKey;
        var weatherData = JSON.parse(this.Get(weatherURL));
        
        /*
        temperatures are in Kelvin
        wind speed is in m/s
        */
        this.loc = weatherData.name;
        this.tempK = weatherData.main.temp;
        this.minTempK = weatherData.main.temp_min;
        this.maxTempK = weatherData.main.temp_max;
        this.humidity = weatherData.main.humidity;
        this.weather = weatherData.weather[0].main;
        this.weatherDesc = weatherData.weather[0].description;
        this.windSpeedms = weatherData.wind.speed;
        
        let icon = weatherData.weather[0].icon;
        this.weatherIcon = "http://openweathermap.org/img/w/" + icon + ".png"
        
        this.minTemp = this.kelvinToFahrenheit(this.minTempK);
        this.maxTemp = this.kelvinToFahrenheit(this.maxTempK);
        this.temp = this.kelvinToFahrenheit(this.tempK);
    }
    
    Get(Url){
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",Url,false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }
    
    //temperature conversions
    kelvinToCelsius(kelvin) {
        let c = kelvin - 273.15
        return String(Math.round(c, 1)) + "°C"
    }

    kelvinToFahrenheit(kelvin) {
        let f = ((kelvin - 273.15) * 1.8) + 32
        return String(parseInt(f)) + "°F"
    }
        
    //speed conversions
    msTokmhr(speed) {
        return str(int(speed * 3.6))
    }

    msTomihr(speed) {
        return str(int(speed * 2.23694))
    }
}
