// PAIR PROGRAMMED WITH LUKE PENNER & ADRIAN WONG

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let checkHorizontal = searchJoined(horizontalJoin, word);
  let newLetters = [];
  for (let i = 0; i < letters[0].length; i++) {
    newLetters[i] = [];
    for (let j = 0; j < letters.length; j++) {
      newLetters[i][j] = letters[j][i];
    }
  }
  const verticalJoin = newLetters.map(ls => ls.join(''));
  let checkVertical = searchJoined(verticalJoin, word);
  return (checkHorizontal || checkVertical);
};

const searchJoined = (array, word) => {
  for (const l of array) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;