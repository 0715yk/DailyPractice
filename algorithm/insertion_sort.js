let arr3 = [5, 6, 3, 1, 10, 2, 9, 7, 8, 111, 2323, 0, 24, -1];

function insertion_sort(arr) {
    for (let idx = 0; idx < arr.length; idx++) {
        let x = idx;
        for (let compare = idx - 1; compare >= 0; compare--) {
            if (arr[idx] >= arr[compare]) {
            } else {
                let spare = arr[idx];
                arr[idx] = arr[compare];
                arr[compare] = spare;
                idx = compare;
            }
        }
        idx = x;
    }
    return arr;
}



console.log(insertion_sort(arr3));