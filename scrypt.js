'use strict'

const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST = {
	cities: ['Manchester', 'Liverpool', 'Bristol', 'Glasgow', 'Edinburgh', 'Cardiff'],
	direction: 'up'/*'down'*/
};
const CITIES_LENGTH = 6;

$(document).ready(function() {
	$('.cities__li').ulPlagin();
});

(function ($) {
    $.fn.ulPlagin = function() {
        this.each(setTemperature(this));
        //this.on('click', animation);
    };

})(jQuery);

// function animation(e) {
//     const TARGET = e.target;
//     const DIR = CITY_LIST.direction;
//     $(TARGET).animate({
//         position: absolute;
//
//     });
// };
function setTemperature(li) {
	var cityName = li.innerHTML;
	for(let i = 0; i < CITIES_LENGTH; i++) {
		console.log(li);
		if(~cityName.indexOf(CITY_LIST.cities[i])) {

			request(CITY_LIST.cities[i], li);
		};
	};

};

function request (city, li) {
	var api = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + API_KEY;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', api);
	xhr.send();
	xhr.onload = function (){
		if (xhr.status != 200) {
			l(xhr.status + ': ' + xhr.statusText);
		} else {
			requestHandling(city, xhr.responseText, li);
		};

	};
};

function requestHandling(city, response, li){
	var parsedResponse = JSON.parse(response);
	li.innerHTML += `By the way, it's ${parsedResponse.list[0].main.temp}° in ${city} now`;
};
