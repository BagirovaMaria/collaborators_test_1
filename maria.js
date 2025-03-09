function filterPrimes(arr) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    return arr.filter(isPrime);
}
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 3, 5, 7]