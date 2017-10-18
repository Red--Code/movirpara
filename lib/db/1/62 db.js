const movie = {
 id:'62',
name:'LuckKey 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/Luck_Key_2016.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Luck_Key_2016.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p BluRay",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Luck.Key.2016.720p.BluRay.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  480p BluRay",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Luck.Key.2016.480p.BluRay.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p BluRay",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Luck.Key.2016.1080p.BluRay.Film2Movie_CO.mkv"
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