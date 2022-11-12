export const addSpaces = (value: string) => {
  return value.replace(/[\D\s]/g, '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

export const removeSpaces = (value: string) => {
  return value.replace(/\s/g, '');
};
