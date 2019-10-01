/* wifi_proxy change (Made by Meeta)
文本编辑模式下复制粘贴,TG频道已发教程视频
PS:记得自己修改WIFI名称
event network-changed debug=1,script-path=wifi_proxy.js
TG频道:@meetashare
*/



var wifiname = $network.wifi.ssid;
var proxywifi = "大喊baba即可科学上网";
if (wifiname == proxywifi){
	$surge.setOutboundMode("direct");
	//$notification.post("Meeta_Remind","您目前处于WIFI-Proxy","Surge已自动变为直连模式");
	
}
else{
	$surge.setOutboundMode("rule");
	//$notification.post("Meeta_Remind","Surge已自动变为规则模式","");
}
$done();


