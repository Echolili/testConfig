/**
 * 严格模式：是一种特殊的执行模式，修复了部分语言上的不足，提供更强的错误检查，提高安全性
 */
function Foo(){
    'use strict';
};
//or
'use strict';
function Foo(){
    
};
/**
 * 严格模式与普通模式的区别：1、不能使用with(SyntaxError)；
 * 2、不允许未声明的变量被赋值(ReferenceError)
 *3、arguments
 4、八进制
 5、数组重复命名
 6、eval独立作用域
 7、eval、arguments是关键字
 8、不能使用delete删除参数或者函数名(SyntaxError),delete不可配置的属性报错(TypeError)
 9、使用apply、call，当传入null或者undefined时，this指向null或undefined，而不是全局对象
 10、修改不可写属性(writable = false),在不可写的对象属性里添加属性会报TypeError,而不是忽略
 11、不是对象方法的调用，也没有用apply、call修改this，this指向null，而不是全局对象
 12、arguments.caller、arguments.callee被禁用
 */
!function() {
    'use strict';
    with({x:1}) {
        console.log(x);  
    }
}();//报SyntaxError语法错误

//浏览器内，不声明变量，相当于声明了一个全局变量
!function(){
    x=1;
    console.log(window.x);//打印1,若严格模式，则报ReferenceError
}();

//arguments变为参数的静态副本
!function(){
    arguments[0] = 100;
    console.log(a);//函数传1的话，a打印出来100,函数不传的话,a打印出来是undefined;严格模式下，参数传不传，a都打印1
}(1);
!function(){
    'use strict';
    arguments[0].x = 100;//注意：严格模式下，如果参数是一个对象(js中是共享传递)，改变对象里面的属性arguments仍会改变，a打印100
}({x:1}); 
!function(){
    var obj = {};
    Object.defineProperty(obj,'a',{configurable:false});
    console.log(delete obj.a);//打印false，严格模式下，报TypeError
}(1);
!function(){
    var obj = {x:1,x:2}; 
    console.log(obj.x);//打印2,严格模式下，不能有重复属性名，报SyntaxError
}();
!function(){
    console.log(0123);//打印83,严格模式下，没有八进制写法，报SyntaxError
}();
!function(){
    function eval(){}
    console.log(eval);//打印function eval(){},严格模式下，eval,arguments是关键字，不能作为变量，函数名，报SyntaxError
}();
!function(){
    eval('var evalVal = 2;')
    console.log(typeof evalVal);//打印number,严格模式下，eval为独立作用域，所以拿不到里面的东西，打印undefined 
}();
