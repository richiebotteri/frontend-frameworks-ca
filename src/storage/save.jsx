import stringifyData from "../utilities/stringifyData";

/**
 * Takes inn new cartItems and adds them to the shopping cart saved in localStorage.
 * @param {Array} newCartItems
 */
export default function (newCartItems) {
  const stringifiedArr = stringifyData(newCartItems);
  localStorage.setItem("cartArr", stringifiedArr);
}
