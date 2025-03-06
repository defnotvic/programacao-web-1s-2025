function transporMatriz(A) {
    console.log("Matriz Original:");
    A.forEach(row => console.log(row.join(" ")));

    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));

    console.log("\nMatriz Transposta:");
    transposta.forEach(row => console.log(row.join(" ")));
}

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);
