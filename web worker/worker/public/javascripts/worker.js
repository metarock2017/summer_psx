self.addEventListener('message', function(e) {
    var _data = e.data;
    var _arr = _data.split(",");
    console.log(_arr);
    function selectSort(arr) {
        var len = arr.length;
        var minIndex, temp;
        for (var i = 0; i < len - 1; i++) {
            minIndex = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) { 
                    minIndex = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
        console.log(arr);
    }
    selectSort(_arr);
    self.postMessage(_arr);
}, false);