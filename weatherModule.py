import json
import urllib2

#temperature conversions
def kelvinToCelsius(kelvin):
    c = kelvin - 273.15
    return str(round(c, 1))

def kelvinToFahrenheit(kelvin):
    f = ((kelvin - 273.15) * 1.8) + 32
    return str(int(f))
    
#speed conversions
def msTokmhr(speed):
    return str(int(speed * 3.6))

def msTomihr(speed):
    return str(int(speed * 2.23694))
    
def main():
    with open('client_secret.json') as data_file:    
        data = json.load(data_file)
        
    zip = '35402'
        
    weatherData = json.loads(urllib2.urlopen("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + data["openWeatherMap"]).read())
    
    """
    temperatures are in Kelvin
    wind speed is in m/s
    """
    loc = weatherData['name']
    temp = weatherData['main']['temp']
    minTemp = weatherData['main']['temp_min']
    maxTemp = weatherData['main']['temp_max']
    humidity = weatherData['main']['humidity']
    weather = weatherData['weather'][0]['main']
    weatherDesc = weatherData['weather'][0]['description']
    windSpeed = weatherData['wind']['speed']

if __name__ == '__main__':
    main()