const randomInteger = (min, max) => {
  if (min > max ){
    return -1;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const isStringLengthNormal = (string, maxLength) => String.length(string) <= maxLength;


