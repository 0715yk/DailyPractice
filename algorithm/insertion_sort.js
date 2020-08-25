let arr3 = [5,6,3,1,10,2,9,7,8,111,2323,0,24,-1];

function insertion_sort(arr) {
    for (let i=1; i<arr.length; i++) {
        let max = arr[i];
        for (let j=i-1;j>=0;j--) {
            if(max<arr[j]) {
                let index = arr.indexOf(max);
                [arr[index], arr[j]] = [arr[j], arr[index]];
            }
        }
    }
    return arr;
}

console.log(insertion_sort(arr3));