var str = [
  {    "id": 707860,    "name": "Hurzuf",    "country": "UA"  },
  {    "id": 519188,    "name": "Novinki",    "country": "RU"  },
  {    "id": 1283378,    "name": "Gorkhā",    "country": "NP"  }
];
str.forEach(function(item, i) {
	if(item.name === "Novinki") {
		console.log(i)
	};
});
