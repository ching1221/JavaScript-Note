require.config({
    paths:{
        "jquery" : "jquery-2.1.4",
        "subscribe" : "jquery.subscribe"
    },
    shim: {
        'jquery' : {
            exports: "$"
        },
        'subscribe': {
            deps: ['jquery']
        }
    }
});
require(['jquery', 'subscribe'], function($){
    $.subscribe('done', f4);
    function f3(){
        //
        $.publish("done");
    }
    function f4(){
        alert("callback-2");
        $(".head").text("hello");
        $.unsubscribe("done", f4);
    }
    f3();

});