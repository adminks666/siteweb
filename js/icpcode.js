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
var div = document.querySelector('icpcode')

        btn.addEventListener('click', function () {

            // location.href = 'http://www.baidu.com';

            var timer = 5;

            setInterval(function () {

                if (timer == 0) {

                    location.href = 'http://www.php.cn';

                } else {

                    div.innerHTML = '你还有' + timer + '秒就可以跳转了';

                    timer--

                }

            },1000)

            /*  setInterval(function(){

                 div.innerHTML = '你还有' + timer + '秒就可以跳转了'

                 timer--;

             },1000) */

        });
