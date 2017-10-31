l = console.log;
const API_KEY = 'afe096a642b6dde980dedc455ac4daf6';
const CITY_LIST = document.getElementsByClassName('cube__town');
const CITY_OF_CHOICE = document.getElementsByClassName('cube-forecast')[0];
/*cityList.forEach(function(item, i) {
	if(item.name === "Urbania") {
		console.log(i)
	};
});*/

/*Повесим выбор города по клику на центральный виджет*/
CITY_OF_CHOICE.onclick = function(e) {
	var target = e.target;
};