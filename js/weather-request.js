l = console.log;
const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST_DOM = document.getElementsByClassName('cube__town');
const FORECAST_ITEM_DATE = document.getElementsByClassName('forecast__item-date');
const FORECAST_ITEM_TEMP = document.getElementsByClassName('forecast__item-temp');
const CURRENT_CITY = document.getElementsByClassName('cube-forecast')[0];
var response;

/*http://api.openweathermap.org/data/2.5/forecast?q=chicago&units=metric&cnt=7&APPID=afe096a642b6dde980dedc455ac4daf6*/

/*очень странное действие, но не знаю, как иначе обрабатывать названия городов с пробелами*/
var cityList = [];
for (var i = 0; i < 6; i++) {
	cityList[i] = CITY_LIST_DOM[i].innerHTML.split(' ');
	cityList[i].pop();
	cityList[i].pop();
	if (cityList[i].length > 1) {
		cityList[i] = cityList[i].join(' ');
	} else {
		cityList[i] = cityList[i][0];
	}
};

/*узнаем погоду для известных нам городов раз в 10 минут*/
var timerID = setInterval(function() {
	for (var i = 0; i < 6; i++) {
		request(cityList[i], i);
	}
}, 600000);


/*Повесим выбор города по клику на центральный виджет*/
CURRENT_CITY.onclick = function(e) {
	var target = e.target;
};

/*делаем запрос на сайт в соответствии с названием города*/
function request (city, num) {
	var api = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + API_KEY;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', api);
	xhr.send();
	xhr.onload = function (){
		if (xhr.status != 200) {
			l(xhr.status + ': ' + xhr.statusText);
		} else {
			response = xhr.responseText;
			requestHandling(city, num, response);
		};

	};
};
/*обработаем ответ, как только его получим*/
function requestHandling(city, num, response){
	CITY_LIST_DOM[num].innerHTML = city + ' / ' + JSON.parse(response).list[0].main.temp + '°';
	if (num == 4) {
		var index = 0;
		JSON.parse(response).list.forEach(function(item) {
			if(item.dt_txt.split(' ')[1] == '15:00:00') {
				var dateValue = item.dt_txt.split(' ')[0].split('-');
				FORECAST_ITEM_DATE[index].innerHTML = dateValue[2] + '.' + dateValue[1];
				FORECAST_ITEM_TEMP[index].innerHTML = item.main.temp + '°';
				index++;
			};
		});
	};
};
