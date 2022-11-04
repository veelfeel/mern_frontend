export const endingWord = (num: number) => {
  const endingWordItems = ['', 'а', 'ов'];

  if (num % 10 === 1 && num % 100 !== 11) {
    return endingWordItems[0];
  } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    return endingWordItems[1];
  }
  return endingWordItems[2];
};
