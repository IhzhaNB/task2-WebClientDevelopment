function convertLength(value) {
  if (value >= 100000) {
    return `${value / 100000} km`;
  } else {
    return `${value * 100000} cm`;
  }
}

export default convertLength;
