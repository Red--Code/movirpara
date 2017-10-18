const movie = {
 id:'45',
name:'Infinity Chamber 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/Infinity-Chamber-2016.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Infinity-Chamber-2016.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  480p web-dl",
		url:"http://opizo.com/81105/?http://dl5.film2movie.co/film/In.fn.ty.Ch.am.br.2016.480p.wb-dl.Film2Movie_CO.mkv"
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