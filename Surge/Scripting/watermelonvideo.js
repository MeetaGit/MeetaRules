const path1 = "/api/user/get";
const path2 = "/api/user/getAdv";
var body = $response.body;
var url = $request.url;
if (url.indexOf(path1) != -1){
  let obj = JSON.parse(body);
  obj.content["level"] = "5";
  obj.content["vipType"] = "1";
  body = JSON.stringify(obj);
}
if (url.indexOf(path2) != -1){
  let obj = JSON.parse(body);
  obj.content["img"] = "http://ww1.sinaimg.cn/large/0076dY5Wgy1g36mmbdvv7j30gf0zkwf2.jpg";
  obj.content["url"] = "";
  body = JSON.stringify(obj);
}
  
$done({body});

/* Made by Meeta(西瓜视频：www.xg1.app)
https?:\/\/api\.gkaorlz\.com\/api\/user\/get
hostname = api.gkaorlz.com
*/
