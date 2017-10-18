const movie = {
 id:'98',
name:'The Journey 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/The-Journey-2017.jpg"',
thumb:'http://www.film2movie.co/content/uploads/The-Journey-2017.jpg'
}
movie.inline={inline_keyboard: [
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