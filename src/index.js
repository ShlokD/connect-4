import { checkWin } from "./Game";

const grid = new Array(7).fill(0).map(() => new Array(7).fill(0));
let activeNum = 1;

const drawBoard = grid => {
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; ++j) {
            if(grid[i][j] !== 0) {
                const activeButton = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                const activeClass = grid[i][j] === 1 ? "blue" : "yellow";
                activeButton.classList.add(activeClass);
            }
        }
    }
}

const handleClick = ev => {
    const { row, col } = ev.target.dataset;
    let activeRow = Number(row), activeCol = Number(col);
    let i;
    for(i = 0; i < grid.length - 1; ++i) {
        if(grid[i + 1][activeCol] !== 0) {
            activeRow = i;
            break;
        }
    }

    if(i === grid.length - 1) {
        activeRow = grid.length - 1;
    }

    grid[activeRow][activeCol] = activeNum;
    drawBoard(grid)
    if(checkWin({ grid, activeRow, activeCol })) {
        alert(`${activeNum} wins`)
    }

    activeNum = activeNum === 1 ? 2 : 1;

}

const start = () => {
    const app = document.querySelector("#app");
    const fragment = new DocumentFragment();

    for(let i = 0; i < grid.length; ++i) {
        const block = document.createElement("div");
        block.classList.add("grid");

        for(let j = 0; j < grid[0].length; ++j) {
            const button = document.createElement("button")
            button.dataset.row = i;
            button.dataset.col = j;
            button.classList.add("piece")
            block.appendChild(button)
        }
        fragment.appendChild(block);
    }

    app.addEventListener("click", handleClick);
    app.appendChild(fragment);

}

start();