const movie = {
 id:'43',
name:'Ryde 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/Ryde_2016.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Ryde_2016.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p web-dl",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Ryde.2016.720p.WEB-DL.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p web-dl",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Ryde.2016.1080p.WEB-DL.Film2Movie_CO.mkv"
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