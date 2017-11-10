'use strict'
var l = console.log;
const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST = {
	cities: ['Manchester', 'Liverpool', 'Bristol', 'Glasgow', 'Edinburgh', 'Cardiff'],
	direction: 'up'/*'down'*/
};
const CITIES_LENGTH = 6;
const TOP_POINT = $('.cities__li')[0].getBoundingClientRect().top;
const BOTTOM_POINT = $('.cities__li')[CITIES_LENGTH-1].getBoundingClientRect().top;
const LEFT_POINT = Math.round($('.cities__li')[0].getBoundingClientRect().left) + 200;
const left_shift = `${LEFT_POINT}px`;

$(document).ready(function() {
	$('.cities__li').ulPlugin();
});

(function ($) {
    $.fn.ulPlugin = function() {
        /*this.each(function(i, el){
        	setTemperature(el);
        });*/
        this.click(function(e) {
     		const DIR = CITY_LIST.direction;
     		let target = e.target;
		    target.animate({
		    	left: left_shift
		    }, 2000, function(){
		    	l('aaaa!');
		    });
		 });
    };

})(jQuery);

function animation(e) {
     
 };
function setTemperature(el) {
	var cityName = el;
	var cityNameInner = cityName.innerHTML;
	for(let i = 0; i < CITIES_LENGTH; i++) {
		if(~cityNameInner.indexOf(CITY_LIST.cities[i])) {

			request(CITY_LIST.cities[i], cityName);
		}
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
	li.innerHTML += `By the way, it's ${parsedResponse.list[0].main.temp}° in ${city} now!`;
};
