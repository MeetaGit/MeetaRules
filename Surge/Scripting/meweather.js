const hfapi = "https://free-api.heweather.net/s6/weather/now?&location=auto_ip&key=5594d6910d9947e7a243c9f533a927f4"
function getwmatioin(data){
    var obj = JSON.parse(data);
    console.log(obj);
    let city = obj.HeWeather6[0].basic["location"];
    let updatetime = obj.HeWeather6[0].update["loc"];
    let wea = obj.HeWeather6[0].now["cond_txt"];
    let temp = obj.HeWeather6[0].now["fl"];
    let wind = obj.HeWeather6[0].now["wind_dir"];
    let hum = obj.HeWeather6[0].now["hum"];
    let vis = obj.HeWeather6[0].now["vis"];
    let mm = [city, wea, temp, wind, hum, vis, updatetime];
    return mm


}

$httpClient.get(hfapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var mm = getwmatioin(data);
        var title = "Meeta与您相伴"+"`"+mm[0];
        var subtitle = "天气状况："+mm[1]+"  "+mm[3];
        var mation = "体感温度："+mm[2]+"℃"+"  "+"空气湿度："+mm[4]+"%"+"  "+"能见度："+mm[5]+"㎞"+"\n更新时间："+mm[6];
        $notification.post(title, subtitle, mation);
        $done();
    }
}
);

/* Hourly weather(Made by Meeta)
文本编辑模式下复制粘贴
cron "0 0 8-20/1 * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/meweather.js
新采用了和风天气api,天气通知比前一个内容更丰富等等（由于免费接口限制每日访问量，清大家不要设置高频天气通知）
向通知中心发送通知，Surge iOS 上需开启通知总开关；
欢迎大家使用
欢迎关注TG频道:@meetashare
*/
