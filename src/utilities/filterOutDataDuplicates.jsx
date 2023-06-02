/**
 * It takes in an array and removes data duplicates
 * @param {Array} dataArray
 * @returns new array with unique data
 */
export default function (dataArray) {
  const uniqueDataArr = Array.from(new Set(dataArray.map(JSON.stringify))).map(
    JSON.parse
  );
  return uniqueDataArr;
}
