# MeetaRules
## [查看TG频道](https://t.me/meetaclub)
## [TG交流群](https://t.me/joinchat/H0wr10TATOAQplouUXYNrQ)

***

# Surgescript 

***
//彩票开奖助手（Made by Meeta)

cron "0 22 * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/mlottery.js

***
// 每时天气(Made by Meeta)

cron "* * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/hourlyWeather.js


***
// M(酷我音乐SVIP)

http-response https?:\/\/.*\.kuwo\.cn script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/kuwovip.js,requires-body=true


***

//  M（网易漫画）

http-response https?:\/\/api-163\.biliapi\.net\/getUserProfile script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/wymh.js,requires-body=true



***


// M(西瓜视频:www.xg1.app)

http-response https?:\/\/api\.gkaorlz\.com\/api\/user\/get script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/watermelonvideo.js,requires-body=true

***

//  M(爱美剧:app.meiju2018.com)

http-response https?:\/\/mjappaz.yefu365.com\/index.php\/app\/ios\/ script-path= https://meetagit.github.io/MeetaRules/Surge/Scripting/aimeiju.js,requires-body=true

***
### 下面脚本未适配surge 4 
~~// M(微信读书)

http-response https?:\/\/i\.weread\.qq.com\/pay\/memberCardSummary\?pf script-path= https://meetagit.github.io/MeetaRules/Surge/Scripting/wechatread.js

***

~~//  M (石头阅读）

http-response https?:\/\/app\.stoneread\.com/api\/apiClient\/index\?data script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/StoneRead.js

***
~~//M(bilibili)

http-response https?:\/\/app\.bilibili\.com\/x\/ script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/bili.js
