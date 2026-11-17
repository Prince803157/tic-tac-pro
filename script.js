
// const cells = [...document.querySelectorAll(".cell")];
// const statusText = document.getElementById("status");
// const restartButton = document.getElementById("restart");
// const resetScoreButton = document.getElementById("resetScore");
// const twoPlayerButton = document.getElementById("twoPlayer");
// const computerButton = document.getElementById("computer");

// const xScoreText = document.getElementById("xScore");
// const oScoreText = document.getElementById("oScore");
// const drawScoreText = document.getElementById("drawScore");
// const xLabel = document.getElementById("xLabel");
// const oLabel = document.getElementById("oLabel");

// const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// let board = Array(9).fill("");
// let currentPlayer = "X";
// let gameActive = true;
// let playAgainstComputer = false;

// let scores = {
//     X: 0,
//     O: 0,
//     draws: 0
// };

// function getWinningCombination(state, player) {
//     return winningCombinations.find(combo =>
//         combo.every(index => state[index] === player)
//     );
// }

// function updateStatus(message) {
//     statusText.textContent = message;
// }

// function renderBoard() {
//     cells.forEach((cell, index) => {
//         cell.textContent = board[index];
//         cell.classList.toggle("x", board[index] === "X");
//         cell.classList.toggle("o", board[index] === "O");
//         cell.classList.remove("winner");

//         cell.disabled =
//             !gameActive ||
//             board[index] !== "" ||
//             (playAgainstComputer && currentPlayer === "O");

//         cell.setAttribute(
//             "aria-label",
//             `Cell ${index + 1}${board[index] ? ", " + board[index] : ", empty"}`
//         );
//     });
// }

// function updateScores() {
//     xScoreText.textContent = scores.X;
//     oScoreText.textContent = scores.O;
//     drawScoreText.textContent = scores.draws;
// }

// function finishRound(winner, combination = null) {
//     gameActive = false;

//     if (winner) {
//         scores[winner]++;
//         updateStatus(
//             winner === "X"
//                 ? "Player X wins! 🎉"
//                 : playAgainstComputer
//                     ? "Computer wins! 🤖"
//                     : "Player O wins! 🎉"
//         );

//         if (combination) {
//             combination.forEach(index => {
//                 cells[index].classList.add("winner");
//             });
//         }
//     } else {
//         scores.draws++;
//         updateStatus("It's a draw! 🤝");
//     }

//     updateScores();
//     renderBoard();
// }

// function makeMove(index) {
//     if (!gameActive || board[index] !== "") {
//         return;
//     }

//     board[index] = currentPlayer;

//     const combination = getWinningCombination(board, currentPlayer);

//     if (combination) {
//         renderBoard();
//         finishRound(currentPlayer, combination);
//         return;
//     }

//     if (board.every(cell => cell !== "")) {
//         renderBoard();
//         finishRound(null);
//         return;
//     }

//     currentPlayer = currentPlayer === "X" ? "O" : "X";

//     updateStatus(
//         playAgainstComputer && currentPlayer === "O"
//             ? "Computer is thinking..."
//             : `Player ${currentPlayer}'s turn`
//     );

//     renderBoard();

//     if (playAgainstComputer && currentPlayer === "O") {
//         computerMove();
//     }
// }

// function findBestComputerMove() {
//     // 1. Win if the computer can complete a line.
//     for (let i = 0; i < 9; i++) {
//         if (board[i] === "") {
//             board[i] = "O";
//             const canWin = Boolean(getWinningCombination(board, "O"));
//             board[i] = "";

//             if (canWin) return i;
//         }
//     }

//     // 2. Block the player's immediate win.
//     for (let i = 0; i < 9; i++) {
//         if (board[i] === "") {
//             board[i] = "X";
//             const playerCanWin = Boolean(getWinningCombination(board, "X"));
//             board[i] = "";

//             if (playerCanWin) return i;
//         }
//     }

//     // 3. Take the center if it is free.
//     if (board[4] === "") return 4;

//     // 4. Take a free corner.
//     const corners = [0, 2, 6, 8].filter(i => board[i] === "");
//     if (corners.length > 0) {
//         return corners[Math.floor(Math.random() * corners.length)];
//     }

//     // 5. Take any remaining free cell.
//     const available = board
//         .map((value, index) => value === "" ? index : -1)
//         .filter(index => index !== -1);

//     if (available.length === 0) return -1;

//     return available[Math.floor(Math.random() * available.length)];
// }

// function computerMove() {
//     const index = findBestComputerMove();

//     if (index !== -1 && gameActive) {
//         makeMove(index);
//     }
// }

// function startNewRound() {
//     board = Array(9).fill("");
//     currentPlayer = "X";
//     gameActive = true;

//     updateStatus("Player X's turn");
//     renderBoard();
// }

// function setMode(computerMode) {
//     playAgainstComputer = computerMode;

//     twoPlayerButton.classList.toggle("active", !computerMode);
//     computerButton.classList.toggle("active", computerMode);

//     xLabel.textContent = computerMode ? "You (X)" : "Player X";
//     oLabel.textContent = computerMode ? "Computer (O)" : "Player O";

//     startNewRound();
// }

// function resetScores() {
//     scores = { X: 0, O: 0, draws: 0 };
//     updateScores();
//     startNewRound();
// }

// cells.forEach((cell, index) => {
//     cell.addEventListener("click", () => makeMove(index));
// });

// restartButton.addEventListener("click", startNewRound);
// resetScoreButton.addEventListener("click", resetScores);

// twoPlayerButton.addEventListener("click", () => setMode(false));
// computerButton.addEventListener("click", () => setMode(true));

// updateScores();
// renderBoard();



const cells = [...document.querySelectorAll(".cell")];
const statusText = document.getElementById("status");
const restartButton = document.getElementById("restart");
const resetScoreButton = document.getElementById("resetScore");
const twoPlayerButton = document.getElementById("twoPlayer");
const computerButton = document.getElementById("computer");
const difficultySelect = document.getElementById("difficulty");
const difficultySettings = document.getElementById("difficultySettings");

const xScoreText = document.getElementById("xScore");
const oScoreText = document.getElementById("oScore");
const drawScoreText = document.getElementById("drawScore");
const xLabel = document.getElementById("xLabel");
const oLabel = document.getElementById("oLabel");

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let board = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;
let playAgainstComputer = false;

let scores = { X: 0, O: 0, draws: 0 };

function getWinningCombination(state, player) {
    return winningCombinations.find(combo =>
        combo.every(index => state[index] === player)
    );
}

function updateStatus(message) {
    statusText.textContent = message;
}

function renderBoard() {
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
        cell.classList.toggle("x", board[index] === "X");
        cell.classList.toggle("o", board[index] === "O");
        cell.classList.remove("winner");

        cell.disabled =
            !gameActive ||
            board[index] !== "" ||
            (playAgainstComputer && currentPlayer === "O");

        cell.setAttribute(
            "aria-label",
            `Cell ${index + 1}${board[index] ? ", " + board[index] : ", empty"}`
        );
    });
}

function updateScores() {
    xScoreText.textContent = scores.X;
    oScoreText.textContent = scores.O;
    drawScoreText.textContent = scores.draws;
}

function finishRound(winner, combination = null) {
    gameActive = false;

    if (winner) {
        scores[winner]++;

        updateStatus(
            winner === "X"
                ? (playAgainstComputer ? "You win! 🎉" : "Player X wins! 🎉")
                : (playAgainstComputer ? "Computer wins! 🤖" : "Player O wins! 🎉")
        );

        if (combination) {
            combination.forEach(index =>
                cells[index].classList.add("winner")
            );
        }
    } else {
        scores.draws++;
        updateStatus("It's a draw! 🤝");
    }

    updateScores();
    renderBoard();

    if (combination) {
        combination.forEach(index =>
            cells[index].classList.add("winner")
        );
    }
}

function makeMove(index) {
    if (!gameActive || board[index] !== "") return;
    if (playAgainstComputer && currentPlayer === "O") return;

    board[index] = currentPlayer;

    const combination = getWinningCombination(board, currentPlayer);

    if (combination) {
        renderBoard();
        finishRound(currentPlayer, combination);
        return;
    }

    if (board.every(cell => cell !== "")) {
        renderBoard();
        finishRound(null);
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    updateStatus(
        playAgainstComputer && currentPlayer === "O"
            ? "Computer is thinking..."
            : `Player ${currentPlayer}'s turn`
    );

    renderBoard();

    if (playAgainstComputer && currentPlayer === "O") {
        computerMove();
    }
}

function getAvailableMoves(state) {
    return state
        .map((value, index) => value === "" ? index : -1)
        .filter(index => index !== -1);
}

// Medium and Impossible use these strategic helpers.
function findImmediateMove(state, player) {
    for (const index of getAvailableMoves(state)) {
        state[index] = player;
        const wins = Boolean(getWinningCombination(state, player));
        state[index] = "";

        if (wins) return index;
    }

    return -1;
}

function findBestStrategicMove() {
    const winMove = findImmediateMove(board, "O");
    if (winMove !== -1) return winMove;

    const blockMove = findImmediateMove(board, "X");
    if (blockMove !== -1) return blockMove;

    if (board[4] === "") return 4;

    const corners = [0, 2, 6, 8].filter(i => board[i] === "");
    if (corners.length) {
        return corners[Math.floor(Math.random() * corners.length)];
    }

    const available = getAvailableMoves(board);
    return available.length
        ? available[Math.floor(Math.random() * available.length)]
        : -1;
}

// Minimax explores possible future moves.
// The computer maximizes its score; the player minimizes it.
function minimax(state, isComputerTurn, depth) {
    if (getWinningCombination(state, "O")) return 10 - depth;
    if (getWinningCombination(state, "X")) return depth - 10;

    const available = getAvailableMoves(state);
    if (available.length === 0) return 0;

    if (isComputerTurn) {
        let bestScore = -Infinity;

        for (const index of available) {
            state[index] = "O";
            const score = minimax(state, false, depth + 1);
            state[index] = "";
            bestScore = Math.max(bestScore, score);
        }

        return bestScore;
    }

    let bestScore = Infinity;

    for (const index of available) {
        state[index] = "X";
        const score = minimax(state, true, depth + 1);
        state[index] = "";
        bestScore = Math.min(bestScore, score);
    }

    return bestScore;
}

function findImpossibleMove() {
    let bestScore = -Infinity;
    let bestMoves = [];

    for (const index of getAvailableMoves(board)) {
        board[index] = "O";
        const score = minimax(board, false, 1);
        board[index] = "";

        if (score > bestScore) {
            bestScore = score;
            bestMoves = [index];
        } else if (score === bestScore) {
            bestMoves.push(index);
        }
    }

    return bestMoves.length
        ? bestMoves[Math.floor(Math.random() * bestMoves.length)]
        : -1;
}

function computerMove() {
    if (!gameActive || currentPlayer !== "O") return;

    const difficulty = difficultySelect.value;
    let index;

    if (difficulty === "easy") {
        const available = getAvailableMoves(board);
        index = available.length
            ? available[Math.floor(Math.random() * available.length)]
            : -1;
    } else if (difficulty === "medium") {
        // Usually play strategically, but occasionally choose randomly.
        index = Math.random() < 0.35
            ? getAvailableMoves(board)[
                Math.floor(Math.random() * getAvailableMoves(board).length)
              ]
            : findBestStrategicMove();
    } else {
        index = findImpossibleMove();
    }

    if (index !== -1 && gameActive) {
        makeMove(index);
    }
}

function startNewRound() {
    board = Array(9).fill("");
    currentPlayer = "X";
    gameActive = true;

    updateStatus("Player X's turn");
    renderBoard();
}

function setMode(computerMode) {
    playAgainstComputer = computerMode;

    twoPlayerButton.classList.toggle("active", !computerMode);
    computerButton.classList.toggle("active", computerMode);

    difficultySettings.hidden = !computerMode;

    xLabel.textContent = computerMode ? "You (X)" : "Player X";
    oLabel.textContent = computerMode ? "Computer (O)" : "Player O";

    startNewRound();
}

function resetScores() {
    scores = { X: 0, O: 0, draws: 0 };
    updateScores();
    startNewRound();
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => makeMove(index));
});

restartButton.addEventListener("click", startNewRound);
resetScoreButton.addEventListener("click", resetScores);

twoPlayerButton.addEventListener("click", () => setMode(false));
computerButton.addEventListener("click", () => setMode(true));

difficultySelect.addEventListener("change", startNewRound);

difficultySettings.hidden = true;

updateScores();
renderBoard();
