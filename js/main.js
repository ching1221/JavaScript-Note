/**
 * Created by qing on 10/14/15.
 */
//  config the path or deps(for the one not writted in AMD)
//  shim:{ 'backbone' : deps['jquery', 'underscore'], exports:'Backbone'}
require.config({
    paths:{
        "jquery" : "jquery-2.1.4"
    }
});
require(['math', 'jquery'], function(math, $){
    alert(math.add(2,3));
    $("#wrapper").text("hello");
});