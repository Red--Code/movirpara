const movie = {
 id:'67',
name:'Manchester By The Sea 2016BluRay 720p',
cover:'"http://www.film2movie.co/content/uploads/Manchester_By_The_Sea.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Manchester_By_The_Sea.jpg'
}
movie.inline={inline_keyboard: [

[
	{
		text:"دانلود با کیفیت  1080p BluRay",
		url:"http://opizo.com/81105/?http://dl4.film2movie.co/film/Manchester.By.The.Sea.2016.1080p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv"
	}	],
[
	{
		text:"دانلود با کیفیت  720p BluRay x265",
		url:"http://opizo.com/81105/?http://dl3.film2movie.co/film/Manchester.By.The.Sea.2016.720p.BluRay.x265.HEVC.ShAaNiG.Film2Movie_BiZ.mkv"
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