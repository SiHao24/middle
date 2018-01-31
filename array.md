## array类型
### 操作方法
#### 栈方法
    栈是一种LIFO(Last-In-First-Out)的数据结构，也就是最新添加的项被最早的移除。而栈中项的插入(叫做推入)和移除(叫做弹出)，  
    只是发生在一个位置——栈的顶部。ECMAScript维数组专门提供了push()和pop()方法，以便实现类似栈的问题。
    push()方法可以接受任意数量的参数，把它们逐个添加到数组末尾，并返回修改后的数组的长度。而pop()方法则从数组末尾移除最后一项，减少数组的length值，然后返回移除的项。
#### 队列方法
    队列数据结构的访问规则是FIFO(First-In-First-Out)。队列在列表的末端添加项，从列表的前端移除项。  
    由于push()是向数组末端添加项的方法，因此要模拟队列只需要一个从数组前端取得项的方法。实现这一操作的数组方法就是shift()，  
    它能够移除数组中的第一个项并返回项，同时将数组长度减1.unshift()能在数组前端添加任意个项并返回新数组的长度。
#### concat()方法
    可以基于当前数组中的所有想创建一个新数组。具体来说，这个方法会先创建当前数组的一个副本，  
    然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给concat()方法传递参数的情况下，  
    它只是复制当前数组并返回副本。如果传递给concat()方法的是一或多个数组，则该方法会将这些数组中的每一项添加到结果数组中。  
    如果传递的值不是数组，这些值就会被简单的添加到结果数组的末尾。
```javascript
    var colors = ['red', 'green', 'blue'];
    var colors2 = colors.concat('yellow', ['black', 'brown']);

    console.log(colors);    //red, green, blue
    console.log(colors2);   //red, green, blue, yellow, black, brown
```
#### slice()方法
    能够基于当前数组中的一或多个项创建一个新数组。slice()方法可以接受一或两个参数，既要返回项的起始和结束位置。  
    在只有一个参数的情况下，slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，  
    该方法返回起始和结束位置枝江的项——但不包括结束位置的项。slice()方法不会影响原始数组。
```javascript
    var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    var colors2 = colors.slice(1);
    var colors3 = colors.slice(1, 4);

    console.log(colors2);   //green, blue, yellow, purplr
    console.log(colors2);   //green, blue, yellow
```
    如果slice()方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置。例如：在一个包含5项的数组上调用slice(-2, -1)与调用slice(3, 4)得到的结果相同。如果结束位置小于起始位置，则返回空数组。

#### splice()方法
    splice()的主要用途是向数组的中部插入项。但使用这种方法的方式则有如下3种方式：     
    1.删除：可以删除任意数量的项，只需指定两个参数：要删除的第一项的位置和要删除的项数，例如：splice(0, 2)会删除数组中的前两项。
    2.插入：可以向指定位置插入任意数量的项，只需提供3个参数，起始位置、0(要删除的项数)和要插入的项。如果要插入多个项，可以在传入第四、第五，  
    以至任意多个项。例如：splice(2, 0, 'red', 'green')会从当前数组的位置2开始插入字符串'red'和'green'.
    3.替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定3个参数：起始位置、要删除的项数和要插入的任意数量的项。  
    插入的项数不必与删除的项数相等。例如：splice(2, 1, 'red', 'green')会删除=当前数组为止2的项，然后再从位置2开始插入字符串'red'和'green'。  
    splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项(如果没有删除任何项，则返回一个空数组)。
```javascript
    var colors = ['red', 'green', 'blue'];
    var removed = colors.splice(0, 1);  //删除第一项
    console.log(colors);    //green, blue
    console.log(removed);   //red,返回的数组中只包含一项


    removed = colors.splice(1, 0, 'yellow', 'orange');  //从位置1开始插入两项
    console.log(colors);    //green, yellow, orange, blue
    console.log(removed);   //返回的是一个空数组


    removed = colors.splice(1, 1, 'red', 'purple');     //插入两项，删除一项
    console.log(colors);    //green, red, purple, orange, blue
    console.log(removed);   //yellow,返回的数组中只包含一项
```

### 位置方法
    ECMAScript5为数组实例添加了两个位置方法：indexOf()和lastIndexOf().这两个方法都接受两个参数：要查找的项和(可选的)表示查找起点位置的索引。  
    其中，indexOf()方法从数组的开头(位置是0)开始向后查找，lastIndexOf()方法则从数组末尾开始向前查找。  
    这两个方法都返回查找的项在数组中的位置，或者在没有找到的情况下返回-1。在比较第一个参数与数组中的每一项时，会使用全等操作符，也就是说，要求查找的项必须严格相等。(就像使用===一样)。
```javascript
    var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    console.log(numbers.indexOf(4));     //3
    console.log(numbers.lastIndexOf(4));    //5


    console.log(numbers.indexOf(4, 4)); //5
    console.log(numbers.lastIndexOf(4, 4)); //3

    var person = [ {name: 'Nicholas' } ];
    var people = [{name: 'Nicholas'}];
    var morePeople = [person];

    console.log(people.indexOf(person));    //-1
    console.log(morePeople.indexOf(person));    //0
```

#### 迭代方法
    ECMAScript5为数组定义了5个迭代方法。每个方法都接受两个参数：要在每一项上运行的函数和(可选的)运行函数的作用域对象——影响this的值。传入这些方法  
    中的函数会接受三个参数：数组项的值、该项在数组中的位置和数组对象本身。根据使用的方法不同，这个函数执行后的返回值可能会也可能不会影响方法返回值。
    1.every(): 对数组中的每一项给定函数，如果该函数对的每一项都返回true，则返回true。
    2.filter(): 对数组中的每一项给定函数，返回该函数会返回true的项组成的数组。
    3.forEach(): 对数组中的每一项运行给定函数，这个方法没有返回值。
    4.map(): 对数组的每一项运行给定函数，返回每次函数调用的结果组成的数组。
    5.some(): 对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。

    对于every()和some(),它们都用于查询数组中的项是否满足某个条件。对every()来说，传入的函数必须对每一项都返回true，这个方法才返回true；否则，它就返回false。而some()方法则是是要传入的函数对数组中的某一项返回true，就会返回true。
```javascript
    var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    var everyResult = numbers.every(function(item, index, array) {
        return (item > 2);
    });

    console.log(everyResult);   //false


    var someResult = numbers.some(function(item, index, array) {
        return (item > 2);
    });

    console.log(someResult);    //true
```
    filter()函数。利用指定的函数确定是否在返回的数组中包含某一项。
```javascript
    var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    var filterResult = numbers.filter(function(item, index, array) {
        return (item > 2);
    });

    console.log(filterResult);  //[3, 4, 5, 4, 3]
```
    map()也是返回一个数组，而这个数组的每一项都是在原始数组中的对应上运行传入函数的结果。例如：可以给数组中的每一项乘以2，  
    然后返回这些乘积组成的数组。
```javascript
    var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];  

    var mapResult = numbers.map(function() {
        return item * 2;
    });

    console.log(mapResult);     //[2, 4, 6, 8, 10, 8, 6, 4, 2]
```

### 归并方法
    ECMAScript5还新增了两个归并数组的方法：reduce()和reduceRight()。这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。其中，reduce()方法从数组的第一项开始，逐个遍历到最后。而reduceRight()则从数组的最后一项开始，向前遍历到第一项。  
    这两个方法都接受两个参数：一个在每一项上调用的函数和(可选的)作为归并基础的初始值。传给reduce()和reduceRight()的函数接受4个参数“前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一项迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。  

    使用reduce()方法可以执行求数组中的所有值之和的操作。
```javascript
    var values = [1, 2, 3, 4, 5];
    var sum = values.reduce(function(prev, cur, index, array) {
        return prev + cur;
    })

    console.log(sum);   //15
```

    第一次执行回调函数，prev是1，cur是2.第二次，prev是3(1加2的结果)，cur是3(数组的第三项)。这个过程会持续到把数组中的每一项都访问一遍，最后返回结果。

    reduceRight()的作用类似，只不过方向相反而已。
```javascript
    var values = [1, 2, 3, 4, 5];
    var sum = values.reduceRight(function(prev, cur, index, array) {
        return prev + cur;
    });

    console.log(sum);   //15
```

    第一次执行回调函数，prev是5，cur是4，当然，最终结果相同，因为执行的都是简单的相加操作。