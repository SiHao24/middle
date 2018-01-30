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
        