const body = document.body;
const contain = document.querySelector('#container');
function generateGrid() {
    let num = parseInt(prompt("Enter the number of squares per side (max 100):"));
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');
            squareDiv.style.width = `${(750 / num) - 3}px`;
            squareDiv.style.height = `${(750 / num) - 3}px`;
            squareDiv.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = 'red';
            })
            contain.appendChild(squareDiv);
        }
    }
}

generateGrid();