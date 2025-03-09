
// Исходный массив для тестирования
const dataArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 10, 10];

// Удаление дубликатов
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(dataArray)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

