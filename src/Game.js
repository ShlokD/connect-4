const checkHorizontal = ({ grid, activeRow, activeCol }) => {
  const play = grid[activeRow][activeCol];

  let count = 0;

  for (let i = -3; i < 0; ++i) {
    const piece = grid?.[activeRow]?.[activeCol + i] || 0;

    if (!piece || piece !== play) continue;

    count++;
  }

  for (let i = 3; i > 0; --i) {
    const piece = grid?.[activeRow]?.[activeCol + i] || 0;

    if (!piece || piece !== play) continue;

    count++;
  }

  return count >= 3;
};

const checkVertical = ({ grid, activeRow, activeCol }) => {
  const play = grid[activeRow][activeCol];

  let count = 0;

  for (let i = -3; i < 0; ++i) {
    const piece = grid?.[activeRow + i]?.[activeCol] || 0;
    if (!piece || piece !== play) continue;

    count++;
  }

  for (let i = 3; i > 0; --i) {
    const piece = grid?.[activeRow + i]?.[activeCol] || 0;

    if (!piece || piece !== play) continue;

    count++;
  }

  return count === 3;
};

const checkDiagonal = ({ grid, activeRow, activeCol }) => {
  const play = grid[activeRow][activeCol];

  let count = 0;

  for (let i = -3; i < 0; ++i) {
    const piece = grid?.[activeRow + i]?.[activeCol + i] || 0;

    if (!piece || piece !== play) continue;

    count++;
  }

  for (let i = 3; i > 0; --i) {
    const piece = grid?.[activeRow + i]?.[activeCol + i] || 0;

    if (!piece || piece !== play) continue;

    count++;
  }

  if (count >= 3) return true;

  count = 0;

  for (let i = -3; i < 0; ++i) {
    const piece = grid?.[activeRow - i]?.[activeCol + i] || 0;

    if (!piece || piece !== play) continue;

    count++;
  }

  if (count >= 3) return true;

  count = 0;

  for (let i = 3; i > 0; --i) {
    const piece = grid?.[activeRow + i]?.[activeCol - i] || 0;

    if (!piece || piece !== play) continue;

    count++;
  }

  return count >= 3;
};

export const checkWin = (game) => {
  return checkHorizontal(game) || checkVertical(game) || checkDiagonal(game);
};
