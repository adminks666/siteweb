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
        $('.icpcode').html(currentObj.key)
    })

注意：
    // Object.keys(currentObj) 可以得到当前域名下的id1  id2  id3
    $(key)最好使用#拼接一下，获取DOM，它与上面的id1  id2 相对应，循环设置每个id应该对应的文本内容，避免像第一种方法对每个div设置内容。
