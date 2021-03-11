// Pair programming with Chelsea Wagner, Mathieu Rousseau

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
  
    const verticalJoin = letters[0].map((col, i) => letters.map(row => row[i])).map(ls => ls.join(''));
    for (const l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
  }
  
  module.exports = wordSearch;