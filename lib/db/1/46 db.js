const movie = {
 id:'46',
name:'Distance Between Dreams 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/Distance_Between_Dreams.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Distance_Between_Dreams.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  720p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Dis.tn.ce.Be.tw.en.Dre.ms.2016.720p.bl.u.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  480p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Dis.tn.ce.Be.tw.en.Dre.ms.2016.480p.bl.u.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Dis.tn.ce.Be.tw.en.Dre.ms.2016.1080p.bl.u.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Dis.tn.ce.Be.tw.en.Dre.ms.2016.720p.bl.u.ry.x265.HEVC.Film2Movie_CO.mkv"
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