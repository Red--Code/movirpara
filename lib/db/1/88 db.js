const movie = {
 id:'88',
name:'Birth Of The Dragon 2016HD',
cover:'"http://www.film2movie.co/content/uploads/Birth-Of-The_Dragon.jpg"',
thumb:'http://www.film2movie.co/content/uploads/Birth-Of-The_Dragon.jpg'
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