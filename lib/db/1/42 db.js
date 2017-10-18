const movie = {
 id:'42',
name:'Mr Pig 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/Sr_Pig.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Sr_Pig.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  1080p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/M.r.P.g.2016.1080p.bl.u.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/M.r.P.g.2016.1080p.bl.u.ry.x265.HEVC.Film2Movie_CO.mkv"
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