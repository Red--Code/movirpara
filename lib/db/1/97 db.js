const movie = {
 id:'97',
name:'The Lost City Of Z 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/The-Lost_City-Of_Z.jpg"',
thumb:'http://www.film2movie.co/content/uploads/The-Lost_City-Of_Z.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Lost.City.Of.Z.2016.720p.BluRay.PaHe.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Lost.City.Of.Z.2016.720p.BluRay.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Lost.City.Of.Z.2016.1080p.BluRay.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Lost.City.Of.Z.2016.1080p.BluRay.GAN.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p BluRay x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Lost.City.Of.Z.2016.720p.BluRay.x265.HEVC.PaHe.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p BluRay x265",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Lost.City.Of.Z.2016.1080p.BluRay.x265.HEVC.PSA.Film2Movie_CO.mkv"
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