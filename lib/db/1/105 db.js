const movie = {
 id:'105',
name:'Kill Ratio 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/Kill-Ratio-2016.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Kill-Ratio-2016.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p web-dl x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Kill.Ratio.2016.720p.WEB-DL.x265.HEVC.Film2Movie_CO.mkv"
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