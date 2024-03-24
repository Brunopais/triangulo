const container = document.getElementById('container');
const numRows = 15; // Número de linhas
const numCols = 15; // Número de colunas
const centerRow = Math.floor(numRows / 2); // Linha central
const centerCol = Math.floor(numCols / 2); // Coluna central

for (let i = 1; i <= numRows; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = 1; j <= numCols; j++) {
        const triangle = document.createElement('div');
        triangle.className = 'triangle';
        const distanceToCenter = Math.max(Math.abs(centerRow - i), Math.abs(centerCol - j));
        const scaleFactor = 1 - (0.1 * distanceToCenter); // Reduz o tamanho dos triângulos no centro
        triangle.style.transform = `scale(${scaleFactor})`;
        row.appendChild(triangle);
    }

    container.appendChild(row);
}
