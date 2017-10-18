const movie = {
 id:'102',
name:'Free Fire 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/Free-Fire-2017.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Free-Fire-2017.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  1080p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Free.Fire.2016.1080p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p BluRay x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Free.Fire.2016.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Free.Fire.2016.720p.BluRay.MkvCage.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p BluRay x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Free.Fire.2016.1080p.BluRay.x265.HEVC.Film2Movie_CO.mkv"
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