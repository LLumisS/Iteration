'use strict';

const max = (matrix) => {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] > max) {
        max = row[j];
      }
    }
  }
  return max;
};

module.exports = { max };
