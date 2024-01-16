//Multi dimensional array

let arr = [
    [67,45,63,45,57],
    [67,98,76,45,54],
    [78,54,97,56,89],
    [78,98,56,45,34]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log('Index number '+i+ ':'+ arr[i][j]);

    }
}

console.log(arr[3]);
console.log(arr[0],arr[1],arr[2],arr[3]);