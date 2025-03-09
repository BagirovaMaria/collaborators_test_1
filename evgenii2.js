function groupByParity(arr) {
    const result = { even: [], odd: [] };

    for (const num of arr) {
        if (num % 2 === 0) {
            result.even.push(num);
        } else {
            result.odd.push(num);
        }
    }
    return result;
}

console.log(groupByParity([1, 2, 3, 4, 5, 6]));

//12