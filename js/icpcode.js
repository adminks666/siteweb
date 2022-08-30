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


$('.icpcode').click(function(){

window.open('https://beian.miit.gov.cn/#/Integrated/index','_blank')
})
