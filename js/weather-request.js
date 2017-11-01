l = console.log;
const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST_DOM = document.getElementsByClassName('cube__town');
const CURRENT_CITY = document.getElementsByClassName('cube-forecast')[0];
var response;

/*очень странное действие, но не знаю, как иначе избежать названий городов с пробелами*/
var cityList = [];
for (var i = 0; i < 5; i++) {
	cityList[i] = CITY_LIST_DOM[i].innerHTML.split(' ');
	cityList[i].pop();
	cityList[i].pop();
	if (cityList[i].length > 1) {
		cityList[i] = cityList[i].join(' ');
	} else {
		cityList[i] = cityList[i][0];
	}
};


/*узнаем погоду для известных нам городов*/
for (var i = 0; i < 5; i++) {
	request(cityList[i], i);
	// CITY_LIST_DOM[i].innerHTML = cityList[i] + ' / ' + temp.list[0].main.temp + '°';
}

/*Повесим выбор города по клику на центральный виджет*/
CURRENT_CITY.onclick = function(e) {
	var target = e.target;
};

/*делаем запрос на сайт в соответствии с названием города*/
function request (city, num) {
	var api = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&cnt=1&APPID=' + API_KEY;
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
};
