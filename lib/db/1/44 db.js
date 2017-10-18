const movie = {
 id:'44',
name:'Message From The King 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/Message-From-The-King.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Message-From-The-King.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  1080p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Me.sge.Fr.om.Th.e.Ki.ng.2016.1080p.b.lu.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  480p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Me.sge.Fr.om.Th.e.Ki.ng.2016.480p.b.lu.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/Me.sge.Fr.om.Th.e.Ki.ng.2016.720p.b.lu.ry.x265.HEVC.Film2Movie_CO.mkv"
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