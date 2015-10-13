/**
 * Created by qing on 10/14/15.
 */
// 如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。
define(function(){
    var add = function(x, y){
       return x + y;
    };
    return{
        add: add
    };
});