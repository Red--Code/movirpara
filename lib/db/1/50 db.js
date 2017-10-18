const movie = {
 id:'50',
name:'Anti Matter 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/Anti-Matter-2016.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Anti-Matter-2016.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  480p web-dl",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Anti.Matter.2016.480p.WEB-DL.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p web-dl",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Anti.Matter.2016.1080p.WEB-DL.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p web-dl x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Anti.Matter.2016.720p.WEB-DL.x265.HEVC.Film2Movie_CO.mkv"
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