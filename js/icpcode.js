  var wordObj = {
        'www.siteweb.cn': {
            'icpcode': '豫ICP备2022019867号-1',
        },
        'www.ipv1.cn': {
            'icpcode': '萌ICP备2022019867号',
        }
    }
    var host = location.host;
    var currentObj = wordObj[host]  //获取到当前域名下的内容
    Object.keys(currentObj).map(function (key) {
        $('.icpcode').html(currentObj[key])
    })


var obj = document.getElementById('icpcode');

obj.οnclick=function(){

window.location.href="www.gov.cn";

}
