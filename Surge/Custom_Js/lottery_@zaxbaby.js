// Made for @zaxbaby.js

const api = "http://vip.manycai.com/K25d41658517f18/xyft-1.json";
$httpClient.get(api, function(error, response, data){
  if(error){
    console.log(error);
    $done();
  }else{
    var obj = JSON.parse(data);
    //console.log(obj);
    let name = obj[0].lotterycode;
    let code = obj[0].code;
    let opendate = obj[0].opendate;
    let title = name+"-开奖信息";
    let subtitle = "中奖号码："+code;
    let mation = "开奖时间："+opendate+"\nMeeta wish you hit the jackpot !";
    $notification.post(title, subtitle, mation);
  }
  $done();
}
);
