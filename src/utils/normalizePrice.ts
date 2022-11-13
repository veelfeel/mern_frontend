export const addSpaces = (value: string | number) => {
  // if (typeof value === 'number') value = String(value)
  return String(value)
    .replace(/[\D\s]/g, '')
    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

export const removeSpaces = (value: string) => {
  return Number(value.replace(/\s/g, ''));
};
