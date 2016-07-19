
var cheerio = require("cheerio");
var server = require("./curl.js");

var url = "http://open.163.com/special/opencourse/englishs1.html"




server.download(url, function(data) {
  if (data) {
    //console.log(data);

    var $ = cheerio.load(data);
    $("a.downbtn").each(function(i, e) {
        console.log(e);
        console.log($(e).attr("data-mid"));
    });

    console.log("done");
  } else {
      console.log("error");
  }
});
