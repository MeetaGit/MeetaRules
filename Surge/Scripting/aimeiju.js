var result = body
let path1 = "/app/ios/user/index";
let path2 = "/app/ios/vod/show";
let path3 = "/app/ios/ads/index";

if (url.indexOf(path1) != -1){
  var obj = JSON.parse(body);
  obj.data.user["viptime"] = "2066-01-01 08:00:00";
  obj.data.user["cion"] = "66666";
  obj.data.user["vip"] = "1";
  result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1){
  var obj = JSON.parse(body);
  obj.data["looktime"] = -1;
  obj.data["vip"] = "4";
  result = JSON.stringify(obj);
}

if (url.indexOf(path3) != -1){
  var obj = JSON.parse(body);
  obj.data["pic"] = "http://ww1.sinaimg.cn/large/0076dY5Wgy1g36mmbdvv7j30gf0zkwf2.jpg";
  obj.data["url"] = "https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/README.md";
  result = JSON.stringify(obj);
}

result;


// Made by Meeta(爱美剧)（官网下载：app.meiju2018.com）
// https?:\/\/mjappaz.yefu365.com\/index.php\/app\/ios\/
// hostname = mjappaz.yefu365.com
