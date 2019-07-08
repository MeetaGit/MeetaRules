/*
彩票助手（Made by Meeta)


cron "* * 22 * * *" script-path=/mlottery.js

向通知中心发送通知，Surge iOS 上需开启通知总开关；
欢迎大家使用,要中大奖哟！
欢迎关注TG频道:@meetashare
*/


for(var i=0;i<k.length;i++){
	var cpapi = "http://api.1888kuai.com/"+k[i];
	$httpClient.get(cpapi, function(error, response, data){
		if (error){
			console.log(error);
			$done();
			} else {
				var obj = JSON.parse(data);
				console.log(obj);
				let opentime = obj.returnResult.currentTime;
				let opencode = obj.returnResult.lotNumber;
				let name = obj.returnResult.lotName;
				let title = name+"-开奖信息";
				let subtitle = "中奖号码："+opencode;
				let mation = "开奖时间："+opentime+"\nMeeta wish you hit the jackpot !"
				$notification.post(title, subtitle, mation);
				$done();
			}
		}
		)
}

