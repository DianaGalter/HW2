'use strict'
var l = console.log;
const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST = {
	cities: ['Manchester', 'Liverpool', 'Bristol', 'Glasgow', 'Edinburgh', 'Cardiff']
};
const CITIES_LENGTH = 6;
const TOP_POINT = $('.cities__ul')[0].getBoundingClientRect().top;
const BOTTOM_POINT = $('.cities__ul')[0].getBoundingClientRect().bottom;
const INSERT_POINT = $('.cities__ul')[0];

/*ulPlugin' arguments: 'up'(default) or 'down'*/
$(document).ready(function() {
	$('.cities__li').ulPlugin('up');
});

(function ($) {
    $.fn.ulPlugin = function(dir) {
    	let direction;
        this.each(function(i, el){
        	setTemperature(el);
        });
        
	    this.click(function(e) {
	 		let target = e.target;
	 		if (dir == 'down') {
	        	direction = BOTTOM_POINT - target.getBoundingClientRect().bottom;
	        	
	        } else {
	        	direction = TOP_POINT - target.getBoundingClientRect().top;
	        };
		    jQuery(target).animate({
		    	top: direction
		    }, 2000, function(){
		    	jQuery(target).css('position', 'inherit');
		    	if(dir == 'down') {
		    		INSERT_POINT.appendChild(target);
		    	} else {
		    		INSERT_POINT.insertBefore(target, INSERT_POINT.children[0]);
		    	};
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
