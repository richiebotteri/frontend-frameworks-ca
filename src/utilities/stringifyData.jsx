/**
 * Takes inn data and stringifies it.
 * @param {any} data
 * @returns stringified data
 */
export default function (data) {
  const stringifiedData = JSON.stringify(data);
  return stringifiedData;
}
