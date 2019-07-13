/* // 小小影视(Made by Meeta)
使用方法：
1.小小视频下载地址：http://tinyurl.com/y4thsp99
2.注册登录小小影视
3.Surge文本编辑模式下复制粘贴
http-response https?:\/\/ios\.xiaoxiaoapps\.com\/  script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/smallvideo.js,requires-body=true
4.添加hostname = ios.xiaoxiaoapps.com
欢迎大家使用和反馈
欢迎关注TG频道:@meetashare
*/
const path1 = "/ucp/index?_t=";
const path2 = "/vod/reqplay/";
var body = $response.body;
var url = $request.url;
if (url.indexOf(path1) != -1){
	let obj = JSON.parse(body);
	obj.data.uinfo["down_daily_remainders"] = "988";
	obj.data.uinfo["play_daily_remainders"] = "988";
	obj.data.uinfo["goldcoin"] = "999";
	obj.data.uinfo["next_upgrade_need"] = "0";
	obj.data.uinfo.curr_group["gicon"] = "V5";
    obj.data.uinfo.curr_group["gid"] = "5";
    obj.data.uinfo.curr_group["gname"] = "至尊VIP";
	obj.data.user["isvip"] = "1";
	obj.data.user["nickname"] = "Meeta_share";
	obj.data.user["avatar_url"] = "https://img.sdxaly.com/C1/avatar/044/44414.jpeg?t=1563021092";
	obj.data.user["avatar"] = "044/44414.jpeg?t=1563021092"
	obj.data.user["goldcicon"] = "998";
	obj.data.user["gicon"] = "V5";
	body = JSON.stringify(obj);
}
if (url.indexOf(path2) != -1){
  let obj = JSON.parse(body);
  obj.retcode = "0";
  obj.data.lastplayindex = "1";
  
  body = JSON.stringify(obj);
}

$done({body});

