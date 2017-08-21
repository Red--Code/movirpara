const movie = {
	id : '32',
	name : 'kung fu yoga 2017',
	cover : '"http://timesofindia.indiatimes.com/img/56335049/Master.jpg"',
	thumb : "http://timesofindia.indiatimes.com/img/56335049/Master.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kung.Fu.Yoga.2017.480p.BluRay.PaHe.Film2Movie_BiZ.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kung.Fu.Yoga.2017.720p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kung.Fu.Yoga.2017.1080p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kung.Fu.Yoga.2017.720p.BluRay.x265.HEVC.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/kung-fu-yoga'
          }],[
          {
            text: 'share',
            switch_inline_query: 'kung fu yoga'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'lastone'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
