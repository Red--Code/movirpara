const movie = {
 id:'89',
name:'The Levelling 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/The_Levelling_2016.jpg"',
thumb:'http://www.film2movie.co/content/uploads/The_Levelling_2016.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p BluRay x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Levelling.2016.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Levelling.2016.1080p.BluRay.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p BluRay x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Levelling.2016.1080p.BluRay.x265.HEVC.Film2Movie_CO.mkv"
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