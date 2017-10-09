(function (arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) == -1) {
           newarr.push(arr[i])
        }
    }
    console.log(newarr.sort(function (a, b) {
        return a-b
    }))
})([1, 2, 3, 4, 56, 2, 1, 345, 3]);
(function (arr) {
    var newarr=[]
    for(var i=arr.length-1;i>=0;i--){
        if(newarr.indexOf(arr[i]) == -1){
            newarr.unshift(arr[i])
        }
    }
    console.log(newarr.sort(function (a, b) {
        return a-b
    }))
})([1, 2, 3, 4, 56, 2, 1, 345, 3])

