const Telegraf = require('../')
const { Extra, Markup } = require('../')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var querystring = require('querystring');
var http = require('http');
const cmd = require('node-cmd');
const request = require('request');
const cheerio = require('cheerio');
var id = 1;
var pages = new Array();
var page = 1;
var articles = new Array();
var dl = new Array();
var itm;
var splt = 1;
var cnt = 0;
var counter;
var text = new Array();
var results = new Array();
var dl_ser = new Array();
var inline;
var sn = 0;
var serial = new Array();
for (var ti = 0; ti < 999999; ti++) serial[ti] = { name: undefined, links: undefined };
results[0] = {
    type: 'article',
    id: '0',
    title: 'یافت نشد.',
    message_text: '404' + '\n\n@CIT_tech\n\n<a href="https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg">.</a>',
    parse_mode: 'html',
    description: '@CIT_tech',
    thumb_url: "https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg"
}
function searcher(input) {
    id = 1;
    page = 1;
    inputs = input;
    for (var j = 0; j < 3; j++) {
        pages[j] = 'http://www.film2movie.co/search/' + input + '/page/' + (j);
    };
    console.log(input);
};
function btnamer(fname) {
    qua = "دانلود ";
    lbl = fname.toLowerCase();
    if (lbl.search("trailer") > 0) {
        if (lbl.search('360p') > 0) return ' 360p تریلر';
        if (lbl.search('480p') > 0) return ' 480p تریلر';
        if (lbl.search('720p') > 0) return ' 720p تریلر';
    }
    if (lbl.search("/serial/") > 0) {
        strpos = lbl.search("s[/0-9/][/0-9/]e[/0-9/][/0-9/]");
        endpos = strpos + 6;
        qua += ' ';
        qua += lbl.slice(strpos, endpos);
        console.log(qua);
    }
    if (lbl.search("480p") > 0) {
        qua += ' 480p';
        if (lbl.search("webdl") > 0 || lbl.search("web-dl") > 0 || lbl.search("wbdl") > 0 || lbl.search("wb-dl") > 0) {
            qua += ' web-dl';
        }
        if (lbl.search("bluray") > 0 || lbl.search("blu-ray") > 0 || lbl.search("brrip") > 0) {
            qua += ' BluRay';
        }
        if (lbl.search("web-rip") > 0 || lbl.search("wrip") > 0 || lbl.search("webrip") > 0) {
            qua += 'web-rip';
        }
        if (lbl.search("hdtv") > 0) {
            qua += ' HDTV';
        }
        if (lbl.search("x265") > 0 || lbl.search("hvec") > 0) {
            qua += ' x265';
        }
        return qua;
    }
    if (lbl.search("720p") > 0) {
        qua += ' 720p';
        if (lbl.search("webdl") > 0 || lbl.search("web-dl") > 0 || lbl.search("wbdl") > 0 || lbl.search("wb-dl") > 0) {
            qua += ' web-dl';
        }
        if (lbl.search("bluray") > 0 || lbl.search("blu-ray") > 0 || lbl.search("brrip") > 0) {
            qua += ' BluRay';
        }
        if (lbl.search("web-rip") > 0 || lbl.search("wrip") > 0 || lbl.search("webrip") > 0) {
            qua += 'web-rip';
        }
        if (lbl.search("hdtv") > 0) {
            qua += ' HDTV';
        }
        if (lbl.search("x265") > 0 || lbl.search("hvec") > 0) {
            qua += ' x265';
        }
        return qua;
    }
    if (lbl.search("1080p") > 0) {
        qua += ' 1080p';
        if (lbl.search("webdl") > 0 || lbl.search("web-dl") > 0 || lbl.search("wbdl") > 0 || lbl.search("wb-dl") > 0) {
            qua += ' web-dl';
        }
        if (lbl.search("bluray") > 0 || lbl.search("blu-ray") > 0 || lbl.search("brrip") > 0) {
            qua += ' BluRay';
        }
        if (lbl.search("web-rip") > 0 || lbl.search("wrip") > 0 || lbl.search("webrip") > 0) {
            qua += 'web-rip';
        }
        if (lbl.search("hdtv") > 0) {
            qua += ' HDTV';
        }
        if (lbl.search("x265") > 0 || lbl.search("hvec") > 0) {
            qua += ' x265';
        }
        return qua;
    }
    if (qua == "دانلود با کیفیت ") {
        return qua;
    }
}
function scraper(page, inp) {
    counter = 0;
    results = results.slice(0, 1);
    results[0] = {
        type: 'article',
        id: '0',
        title: 'یافت نشد.',
        message_text: '404' + '\n\n@CIT_tech\n\n<a href="https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg">.</a>',
        parse_mode: 'html',
        description: '@CIT_tech',
        thumb_url: "https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg"
    }
    console.log('page:', pages[page]);
    request(pages[page], function (error, response, body) {
        if (error) {
            console.log('error:', error); // Print the error if one occurred
        }
        console.log('statusCode:', response && response.statusCode);
        const $ = cheerio.load(body);
        counter = 0;
        $('section.right-main section.main article.box div.content a.more-link').each(function (i, elem) {
            articles[i] = $(this).attr('href');
            counter++;
        });
        console.log('total-items: ', counter);
        itm = 0;
        if (counter == 0) {
            return 0;
        }
        else {
            engine(counter, page, inp);
        }
    });
}
function link_shrinker(codestring) {
    // Build the post string from an object
    var post_data = querystring.stringify({
        'username': 'uma2395@gmail.com',
        'warning_level': 'QUIET',
        'url': codestring
    });

    // An object of options to indicate where to post to
    var post_options = {
        host: 'opizo.com',
        port: '80',
        path: '/webservice/shrink',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();
};
function suffix_fs(id, naaddr, imaddr) {
    setTimeout(function () {
        inline += '[\n{\ntext: "زیرنویس",\nurl:"http://subf2m.co/subtitles/"\n},{\ntext: "share",\nswitch_inline_query: movie[i].name\n}\n]\n]\n}\n';
    }, 20);
    if (page < 2 && itm < counter - 1) {
        setTimeout(function () {
            engine(counter, page);
        }, 50);
        itm++;
    }
}
function result_maker(id_in, thumb, inline, name, shname, rname) {
    if (name == undefined) name = 'download';
    if (thumb == undefined) name = 'http://ideasdebabel.files.wordpress.com/2007/11/movie-city.jpg';
    results[id - 1] = {
        type: 'article',
        id: '"' + id_in + '"',
        title: rname,
        message_text: '\n\n@CIT_tech\n\n<a href="' + thumb + '">.</a>' + name,
        reply_markup: eval(inline),
        parse_mode: 'html',
        description: '@CIT_tech',
        thumb_url: thumb
    }
    if (results[id - 1].title == undefined) {
        results[id - 1] = {
            type: 'article',
            id: '"' + id_in + '"',
            title: 'غیر قابل پردازش',
            message_text: 'غیر قابل پردازش',
            description: '@CIT_tech',
        }
    }
};
function serial_gen(dl_ser, cnt, ser_name) {
    serial[sn].name = ser_name;
    serial[sn].links = dl_ser;
    strpos = dl_ser[cnt - 1].toLowerCase().search(".s[/0-9/][/0-9/]e[/0-9/][/0-9/].") + 1;
    console.log(dl_ser[cnt - 1] + strpos);
    endpos = strpos + 3;
    console.log(dl_ser[0].slice(strpos + 1, endpos));
    //	for (var eof = eval(dl_ser[0].slice(strpos+1  ,endpos))-1 ; eof < eval(dl_ser[cnt-1].slice(strpos +1 ,endpos)) ; eof++) {
    inline += '[\n	{\n		text:"' + ' فصل ' + (eval(dl_ser[cnt - 1].slice(strpos + 1, endpos))) + '",\n		callback_data:"' + (eval(dl_ser[cnt - 1].slice(strpos + 1, endpos))) + ser_name + '"\n	}],\n';
    //	};
    sn++;
    if (sn >= 999999) sn = 0;
};
function engine(counter, page, inp) {
    console.log(counter, ' item:', itm);
    request(articles[itm], function (error, response, body) {
        const $ = cheerio.load(body);
        var caddr = $('article.box.singlepost div.content p strong a');
        if (caddr.attr('href') == undefined || caddr.attr('href').toLowerCase().search(".mkv") < 0) {
            caddr = $('article.box.singlepost div.content p a');
        };
        var naaddr = $('article.box.singlepost div.titlehaver div.title h1 strong a').text();
        var clean_name = naaddr.replace(/[^\w\s!?]/g, '');
        var clean_title = naaddr;
        var imaddr = $('article.box.singlepost div.content p img#myimg.alignleft').attr('src');
        inline = 'inline = {inline_keyboard: [\n';
        cnt = 0;
        caddr.each(function (i, elem) {
            dl[itm] = $(this).attr('href');
            if (dl[itm].toLowerCase().search(".mkv") > 0 || dl[itm].toLowerCase().search(".mp4") > 0) {
                //			text[splt] += btnamer(dl[itm]) + '\n' + 'http://opizo.com/81105/?' + dl[itm] + '\n';
                if (dl[itm].toLowerCase().search("/film/") > 0 || dl[itm].toLowerCase().search("trailer") > 0) {
                    inline += '[\n	{\n		text:"' + btnamer(dl[itm]) + '",\n		url:"' + 'http://opizo.com/81105/?' + dl[itm] + '"\n	}],\n';
                }
                if (dl[itm].toLowerCase().search("/serial/") > 0 && dl[itm].toLowerCase().search("s[/0-9/][/0-9/]e[/0-9/][/0-9/]") > 0) {
                    //  	dl_ser[cnt] = dl[itm];
                    //    cnt++;
                    //  return (ctx) => ctx.telegram.sendMessage(ctx.from.id,'hello');
                    naaddr += '\n\n\n<a href="' + dl[itm] + '">' + btnamer(dl[itm]) + '</a>';
                };
            }
        });
        if (cnt > 0) {
            serial_gen(dl_ser, cnt, naaddr, naaddr.replace(/[^\w\s!?]/g, ''));
        };
        if (itm == counter - 1 && page < 1) {
            page++;
            scraper(page);
            itm = 0;
        }
        inline += '[\n{\ntext: "زیرنویس",\nurl:"http://subf2m.co/subtitles/"\n},{\ntext: "share",\nswitch_inline_query: shname\n}\n]\n]\n}';
        if (page < 2 && itm < counter - 1 && inputs != undefined) {
            setTimeout(function () {
                engine(counter, page, inp);
            }, 50);
            itm++;
        }
        if (imaddr == undefined) imaddr = 'http://ideasdebabel.files.wordpress.com/2007/11/movie-city.jpg';
        result_maker(id, imaddr, inline, naaddr, clean_name, clean_title);
        id++;
    });
};

const bot = new Telegraf('416337659:AAEPtdYATok1xrssZBirHVNwkoHETi-3RVQ');
bot.telegram.setWebhook('https://api.telegram.org/bot416337659:AAEPtdYATok1xrssZBirHVNwkoHETi-3RVQ/new-message');
bot.command('start', ({ reply }) => {
    return reply('خوش آمدید', Markup
        .keyboard([
            ['جست و جو', 'جدیدترین'],
            ['ارتباط با ما']
        ])
        .oneTime()
        .resize()
        .extra()
    )
})
bot.hears('جدیدترین', (ctx) => {
    return ctx.reply('دریافت جدیدترین فیلم ها وسریالهای روز دنیا در کانال ما\n\n@CIT_tech')
})
bot.hears('ارتباط با ما', (ctx) => {
    return ctx.reply('راه ارتباطی ما از طریق ایمیل uma2395@gmail.com')
})
bot.hears('جست و جو', (ctx) => {
    ctx.reply('پس از وارد کردن نام کاربری بات (@Moviecity98_bot) نام فیلم مورد نظر را وارد کنید.لازم به ذکراست که پس از وارد کردن برای اولین بار نام بات ذخیره شده و میتوانید از آن در گروه ها و چت های خصوصی نیز استفاده کنید.')
    ctx.reply('در نسخه جدید میتوانید پس از لمس گزینه زیر نام فیلم را وارد کنید',
        Markup.inlineKeyboard([
            Markup.switchToCurrentChatButton("search", '')]
        ).extra()
    )
    return console.log('search')
})
bot.action(/\d/g, (ctx, next) => {
    var sea_name = ctx.callbackQuery.data;
    var sea_num = sea_name.slice(0, 5).match(/^\d+/g);
    var num = 0;
    sea_name = ctx.callbackQuery.data.slice(1, 100)
    console.log(sea_num);
    //var strposn = dl_ser[cnt-1].toLowerCase().search("s[/0-9/][/0-9/]e[/0-9/][/0-9/]");
    var elementPos = serial.map(function (x) { return x.name; })
    var linentPos = serial.map(function (x) { return x.links; })
    //	console.log(elementPos.indexOf(sea_name));
    var serin = 'Markup.inlineKeyboard([';
    for (var num = 1; elementPos.indexOf(sea_name) >= 0 && serial[elementPos.indexOf(sea_name)].links[num] != undefined; num++) {
        serin += `[\nMarkup.urlButton("${btnamer(serial[elementPos.indexOf(sea_name)].links[num])}", "${serial[elementPos.indexOf(sea_name)].links[num]}")],`;
    };
    serin += '])';
    ctx.telegram.sendMessage(ctx.from.id, 'لینک ها دریافت شد!', eval(serin).extra()).then(next);
    ctx.answerCallbackQuery(`Links created for Season ${ctx.match[0]}`);
    return 0;
});
bot.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
    searcher(inlineQuery.query);
    id = 1;
    results = results.slice(0, 1);
    results[0] = {
        type: 'article',
        id: '0',
        title: 'یافت نشد.',
        message_text: '404' + '\n\n@CIT_tech\n\n<a href="https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg">.</a>',
        parse_mode: 'html',
        description: '@CIT_tech',
        thumb_url: "https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg"
    }
    if (inlineQuery.query) scraper(page);
    setTimeout(function () {
        console.log(id);
        console.log(id + ' files loaded');
        results = results.slice(0, 10);
        if (results[0].id) {
            //		for(var co=0 ; results[co] ; co++) console.log(results[co].thumb_url);
            return answerInlineQuery(results);
        }
    }, 2500);
});

bot.startWebhook('/new-message', null, 3000);
		cmd.run('Remove-item alias:curl');
		cmd.run('curl -F "url=https://my-movie-bot.now.sh/new-message"  https://api.telegram.org/bot416337659:AAEPtdYATok1xrssZBirHVNwkoHETi-3RVQ/setWebhook');
		console.log('started');