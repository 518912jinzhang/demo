var baseUrl = "http://192.168.0.104:9089/gxpt-dscyy/";
// 获取url的方法
function getQueryString(name) {
    const url = 'http://www.abc.com/test.php?token=1213132123&from=index';
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    // var r = window.location.search.substr(1).match(reg);
    var r = url.substr(1).match(reg);
    alert(r);
    if (r != null) return unescape(r[2]); return null;
} 

function GetRequest(name) {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("?");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
} 
