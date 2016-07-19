var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
  'token':'ee90aaae3cc7525503204cfa1a70e762',
  'roomid':'45449',
  'type':1,
  'content':'...',
  'hostid':5470054,
  '_':1468746930,
})

var options = {
  hostname: 'www.panda.tv',
  port: 80,
  path: '/ajax_send_group_msg?token=ee90aaae3cc7525503204cfa1a70e762&roomid=45449&type=1&content=gua&hostid=5470054&_=1468746930',
  method: 'post',
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en,zh;q=0.8,zh-CN;q=0.6,en-US;q=0.4',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'text/html; charset=UTF-8',
    'Cookie': '__guid=96554777.404519684256675600.1460726547189.7275; R=r%3D6141560%26u%3DCnaqnGi6141560%26n%3D%25R8%25OS%2599%25R9%25N2%2598%25R7%259O%25NR%25R7%259P%259S%25R9%259N%25OR%26le%3D%26m%3DZGH3ZwtjAQH3AmH%3D%26im%3DnUE0pPHmDFHlEvHlEzxmYaOxnJ0hM3ZyZxM0ZQSxAzZkMwR4BTR5AQyyAwWzYzcjMj%3D%3D; M=t%3D1466842764%26v%3D1.0%26mt%3D1466842764%26s%3D910c299bd234568f3646c7dfe729baba; aliyungf_tc=AQAAAJeva2eT0Q4AJcPjegVSW1GDbyDG; monitor_count=2; Hm_lvt_204071a8b1d0b2a04c782c44b88eb996=1468469617,1468487712,1468507327,1468742425; Hm_lpvt_204071a8b1d0b2a04c782c44b88eb996=1468742540',
    'Host': 'www.panda.tv',
    'Referer': 'http://www.panda.tv/cate/dota2',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
  }
}

var req = http.request(options, function(res) {
  console.log('status: ' + res.statusCode)
  console.log('headers: ' + JSON.stringify(res.headers))

  res.on('data', function(chunk) {
    console.log(Buffer.isBuffer(chunk))
    console.log(typeof chunk)
  })

  res.on('end', function() {
    console.log('评论完毕')
  })
})

req.on('error', function(e) {
  console.log('Error:' +e.message)
})

req.write(postData)
req.end()
