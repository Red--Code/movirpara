const movie = {
 id:'116',
name:'Miles 2016p Webdl',
cover:'"http://www.film2movie.co/content/uploads/Miles-2016.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Miles-2016.jpg'
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