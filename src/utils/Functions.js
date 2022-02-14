export function dateConverter(dateObj) {
  const year = dateObj.getFullYear().toString();
  const minusMonth = dateObj.getMonth() + 1;
  const month = minusMonth.toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');
  const result = `${year}-${month}-${day}`;
  return result;
}

export function clickBoolean(setState) {
  setState(prev => {
    return !prev;
  });
}

export function dataStringFormatter(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function convertKey(target, ref) {
  let result = {};

  for (let dataType in target) {
    result[dataType] = [];

    target[dataType].data.forEach((dataObj, idx) => {
      result[dataType][idx] = {};

      Object.keys(dataObj).forEach(keyName => {
        ref[keyName]
          ? (result[dataType][idx][ref[keyName]] = dataObj[keyName])
          : (result[dataType][idx][keyName] = dataObj[keyName]);
      });
    });
  }
  return result;
}
