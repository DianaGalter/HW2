l = console.log;
var temp = {
    "cod":"200",
    "message":0.0042,
    "cnt":1,
    "list": [{
        "dt":1509494400,
        "main": {
            "temp":3.42,
            "temp_min":3.42,
            "temp_max":4.64,
            "pressure":1011.17,
            "sea_level":1034.45,
            "grnd_level":1011.17,
            "humidity":100,
            "temp_kf":-1.22
        },
        "weather":[{
            "id":804,
            "main":"Clouds",
            "description":
            "overcast clouds",
            "icon":"04n"
        }],
    "clouds":{
        "all":92
    },
    "wind":{
        "speed":4.67,
        "deg":247.504
    },
    "sys":{
        "pod":"n"
    },
    "dt_txt":"2017-11-01 00:00:00"
}],
    "city":{
        "id":4887398,
        "name":"Chicago",
        "coord":{
            "lat":41.85,
            "lon":-87.6501
        },
        "country":"US"
}};
//l(temp.list[0].main.temp + '°');
