function diagonalDifference(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                primaryDiagonalSum += matrix[i][j];
            }
            if (i + j === n - 1) {
                secondaryDiagonalSum += matrix[i][j];
            }
        }
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}
const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];


const result = diagonalDifference(matrix);
console.log("Maka hasilnya adalah: " + result);