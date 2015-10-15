require.config({
    paths:{
        "template" : "template"
    }
});
require(['template'], function(template){
    var data = {
        title: '我的爱好',
        list: ['篮球', '码代码']
    };
    var html = template('test', data);
    document.getElementById('content').innerHTML = html;
});