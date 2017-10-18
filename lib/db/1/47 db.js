const movie = {
 id:'47',
name:'In This Corner Of The World 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/In-This-Corner-Of-The-World.jpg"',
thumb:'http://www.film2movie.co/content/uploads/In-This-Corner-Of-The-World.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  480p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/I.n.Th.is.Co.r.nr.O.f.Th.e.Wo.rl.d.2016.480p.b.lu.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  1080p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/I.n.Th.is.Co.r.nr.O.f.Th.e.Wo.rl.d.2016.1080p.b.lu.ry.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/I.n.Th.is.Co.r.nr.O.f.Th.e.Wo.rl.d.2016.720p.b.lu.ry.x265.HEVC.Film2Movie_CO.mkv"
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