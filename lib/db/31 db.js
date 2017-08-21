const movie = {
	id : '31',
	name : 'john wick 2',
	cover : '"http://blitz.arc.unsw.edu.au/wp-content/uploads/2017/04/john-wick-2-guns.jpg"',
	thumb : "http://blitz.arc.unsw.edu.au/wp-content/uploads/2017/04/john-wick-2-guns.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/John.Wick.Chapter.2.2017.480p.BluRay.PaHe.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/John.Wick.Chapter.2.2017.720p.BluRay.NEW.Farsi.Dubbed.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/John.Wick.Chapter.2.2017.1080p.BluRay.NEW.Farsi.Dubbed.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/John.Wick.Chapter.2.2017.720p.BluRay.x265.HEVC.ShAaNiG.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/john-wick-chapter-2-2017'
          }],[
          {
            text: 'share',
            switch_inline_query: 'john wick 2'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
