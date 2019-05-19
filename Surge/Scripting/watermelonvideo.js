var result = body
let path1 = "/api/user/get";
let path2 = "/api/user/getAdv";
if (url.indexOf(path1) != -1){
  var obj = JSON.parse(body);
  obj.content["level"] = "5";
  obj.content["vipType"] = "1";
  result = JSON.stringify(obj);
}
if (url.indexOf(path2) != -1){
  var obj = JSON.parse(body);
  obj.content["img"] = "http://ww1.sinaimg.cn/large/0076dY5Wgy1g36mmbdvv7j30gf0zkwf2.jpg";
  obj.content["url"] = "https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/README.md";
  result = JSON.stringify(obj);
}
  

result;

/* Made by Meeta(西瓜视频：www.xg1.app)
https?:\/\/api\.gkaorlz\.com\/api\/user\/get
hostname = api.gkaorlz.com
*/
