l = console.log;
const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST = document.getElementsByClassName('cube__town');
const CITY_OF_CHOICE = document.getElementsByClassName('cube-forecast')[0];
for (var i = 0; i < 5; i++) {
	l(CITY_LIST[i].innerHTML);
};

/*cityList.forEach(function(item, i) {
	if(item.name === "Urbania") {
		console.log(i)
	};
});*/

/*Повесим выбор города по клику на центральный виджет*/
CITY_OF_CHOICE.onclick = function(e) {
	var target = e.target;
};

function request (city) {
	var api = 'http://api.openweathermap.org/data/2.5/forecast?q' + city + '&APPID=' + API_KEY;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', api);
	xhr.send();
	if (xhr.status != 200) {
		l(error);
	} else {
		l(xhr.responseText);
	}
}
