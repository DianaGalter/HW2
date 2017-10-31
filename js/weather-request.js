l = console.log;
const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST = document.getElementsByClassName('cube__town');
const CURRENT_CITY = document.getElementsByClassName('cube-forecast')[0];

/*очень странное действие, но не знаю, как иначе избежать названий городов с пробелами*/
var cityList = [];
for (var i = 0; i < 5; i++) {
	cityList[i] = CITY_LIST[i].innerHTML.split(' ');
	cityList[i].pop();
	cityList[i].pop();
	if (cityList[i].length > 1) {
		cityList[i] = cityList[i].join(' ');
	} else {
		cityList[i] = cityList[i][0];
	}
};


/*узнаем погоду для известных нам городов*/
for (var i = 0; i < 1; i++) {
	l(cityList[i]);
	request(cityList[i])
}

/*Повесим выбор города по клику на центральный виджет*/
CURRENT_CITY.onclick = function(e) {
	var target = e.target;
};

/*делаем запрос на сайт в соответствии с названием города*/
function request (city) {
	var api = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + API_KEY;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', api);
	xhr.send();
	xhr.onreadystatechange = function() {
	  if (xhr.readyState != 4) return;
	  if (xhr.status != 200) {
	    l(xhr.status + ': ' + xhr.statusText);
	  } else {
	    return xhr.responseText;
	  }
  };
};
