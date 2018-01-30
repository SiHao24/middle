function arraySimilar(arr1, arr2) {
    //判断边界
    if(!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
        return false;
    }

    //判断长度
    if(arr1.length !== arr2.length) return false;

    var i = 0,
        n = arr1.length,
        countMap1 = {},
        countMap2 = {},
        t1, t2,
        TYPES = ['string', 'boolean', 'number', 'undefined', 'null', 'function'
    ,'date', 'window'];

    for(; i < n; i++) {
        t1 = typeof(arr1[i]);
        t2 = typeof(arr2[i]);
        if(countMap1[t1]) {
            countMap1[t1]++;
        }else {
            countMap1[t1] = 1;
        }

        if(countMap2[t2]) {
            countMap2[t2]++;
        } else {
            countMap2[t2] = 1;
        }
    }


    function typeOf(ele) {
        var r;
        if(ele === null) r = 'null';
        else if(ele instanceof Array) r = 'array';
        else if(ele === window) r = 'window';
        else if(ele instanceof Date) r = 'date';
        else r = typeof ele;
        return r;
    }

    for(i = n, n = TYPES.length; i < n; i++) {
        if(countMap1[TYPES[i]] !== countMap2[TYPES[i]]) {
            return false;
        }
    }
    return true;
}