const movie = {
 id:'93',
name:'Heroes Dont Come Home 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/Heroes-Dont-Come-Home.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Heroes-Dont-Come-Home.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p web-dl x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Heroes.Dont.Come.Home.2016.720p.WEB-DL.x265.HEVC.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  480p web-dl",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Heroes.Dont.Come.Home.2016.480p.WEB-DL.Film2Movie_CO.mkv"
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