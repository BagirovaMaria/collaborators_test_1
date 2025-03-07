function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function mostFrequent(arr) {
    const frequencyMap  ={};
    let mostFrequentElement;
    let maxFrequency = 0;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            mostFrequentElement = num;
            maxFrequency = frequencyMap[num];
        }
    }
    return mostFrequentElement;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));

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
}console.log(groupByParity([1, 2, 3, 4, 5, 6]));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}

console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}

function sortByDivisors(arr) {
    return arr.sort((a, b) => countDivisors(a) - countDivisors(b));
}

console.log(sortByDivisors([10, 15, 8, 3, 6]));