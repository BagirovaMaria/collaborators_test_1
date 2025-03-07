function sortByDivisors(arr) {
    function countDivisors(num) {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }
        return count;
    }
    
    return arr.sort((a, b) => countDivisors(a) - countDivisors(b));
}

// Пример вызова:
console.log(sortByDivisors([10, 15, 8, 3, 6])); // [3, 8, 6, 10, 15]
