var http = require("http")
var cheerio = require('../node_modules/cheerio/lib/cheerio.js')

url = "http://huobingli.github.io"

function filterChapters(html) {
  var $ = cheerio.load(html)
  var headline = $('.article-header')
  console.log(headline.text())
}
var urls
for(var i = 0;i < 4 ; i++){
  urls = 0
  if(i != 0) {
    urls = url + '/page/'+ i + '/'
    console.log(urls)
  }
  else {
    urls = url
    console.log(urls)
  }
  http.get(urls,function (res) {
    var html = ''
    res.on('data', function(data) {
      html += data
    })
    res.on('end', function() {
      var blogData = filterChapters(html)
      console.log('正在获取数据')
      //printCourseInfo(courseData)
    })
  }).on('error', function() {
    console.log('获取数据失败');
  })
}
