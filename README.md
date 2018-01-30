# middle
慕课网------JavaScript深入浅出

### 数据类型
####    原始类型
    1.number
    2.string
    3.boolean
    4.null
    5.undefined
#### 对象类型
    1.Function
    2.Array
    3.Date
     ...


### 隐式转换
    + 字符串拼接
    - 减法运算
#### 严格等于(===)
    首先判断等号两边的类型，类型不同，直接返回false
#### 等于(==)
    类型相同，同===
    类型不同，尝试类型转换和比较
    null == undefined相等
    number == string转number 1=="1.0"    //true
    boolean == ? 转number 1==true    //true
    object == number | string尝试对象转为基本类型 new String('hi') == 'hi'    //true

### 包装对象
    隐藏机制
    ```javascript
        var a = "string";
        alert(str.length); //6
        a.t = 3;
        alert(a.t); //undefined
    ```
    'str'   ---> String Object
    123     ---> Number Object
    true    ---> Boolean Object
### 类型检测
    1.typeof 适合基本类型及function检测，遇到null失效
    2.instanceof 适合自定义对象，也可以用来检测原生对象，在不同iframe和window间检测时失效
    3.Object.prototype.toString
    4.constructor
    5.duck type

### 表达式和运算符
    表达式是指能计算出值得任何可用程序单元---wiki
    表达式是一种JavaScript短语，可使JavaScript解释器用来产生一个值。--JavaScript权威指南
#### 表达式
##### 1.原始表达式
    1.常量、直接量
    2.关键字
    3.变量
2.初始化表达式
3.函数表达式
4.属性访问表达式
5.调用表达式
6.对象创建表达式

        