## JavaScript语句
    块语句常用于0~多个语句。夸一语句用一对花括号定义。
    JavaScript没有块级作用域。
```javascript
    for(var i = 0; i < 10; i++){
        var str = 'hi';
        console.log(str);
    }

    var i = 0;
    for(; i < 10; i++ ){
        var str = 'hi';
        console.log(str);
    }
```
    有函数作用域，在函数里面定义的变量在函数外部是获取不到的，试图得到这个值的时候会报错。
### try-catch
    try-catch提供了异常捕获的机制，执行的流程是首先执行try块中的代码，如果抛出异常，会有catch语句去捕获，并执行。如果没有发生异常， catch语句就会被忽略。不管有没有异常，都会执行finally语句。
```javascript
    //三种形式
    try{
        //...
    }catch(ex) {
        //...
    }

    try{

    }finally {

    }

    try{

    }catch(ex) {

    }finally{

    }
```

### 函数、switch、循环
#### 函数声明
```javascript
    fd(); //true
    function fd() {
        //do sth
        return true
    }
```
#### 函数表达式
```javascript
    fe(); //TypeError
    var fe = function() {
        // do sth
    };
```
函数声明会被预先处理，或者叫函数前置。在函数声明的前面调用这个函数是可以的，但是在函数表达式前面调用，会出错。
### for...in
    1.顺序不确定，具体的顺序依赖于引擎的实现
    2.enumerable为false时不会出现
    3.for in对象属性时受原型链影响
### switch语句
```javascript
    switch(val) {
        case 1:
            console.log(1);
            break;
        case 2:
            console.log(2);
            break;
        default: 
            console.log(0);
            break;
    }
```

### 严格模式
    严格模式是一种特殊的执行模式，它修复了部分语言上的不足，提供更强的错误检查，并曾倩安全性。
    1.不允许使用with(SyntaxError)
    2.不允许为声明的变量被赋值(ReferenceError)
    3.arguments变为参数的静态副本
    4.delete参数，函数名报错(SyntaxError)   
    5.delete不可配置的属性报错(TypeError)
    6.对象字面量重复属性名报错(SyntaxError)
    7.禁止八进制字面量(SyntaxError)
    8.eval,arguments变为关键字，不能作为变量、函数名(SyntaxError)
    9.eval独立作用域
    
