const movie = {
 id:'119',
name:'Hulk Where Monsters Dwell 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/Hulk-Where-Monsters-Dwell.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Hulk-Where-Monsters-Dwell.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p web-dl x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Hulk.Where.Monsters.Dwell.2016.720p.WEB-DL.x265.HEVC.PSA.Film2Movie_CO.mkv"
	}	],
[
{
text: "زیرنویس",
url:"http://subf2m.co/subtitles/"
}
],[
{
text: "share",
switch_inline_query: movie.name
}
]
]
}
module.exports = movie;
module.exports.prop = "middle";
module.exports.path = "../examples/" + movie.id + " db.js";