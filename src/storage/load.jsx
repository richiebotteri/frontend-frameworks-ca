/**
 * Loads shopping cart from localStorage
 * @returns empty shoppingcart array or empty array if there is none
 */
export default function () {
  const loadCartArr = localStorage.getItem("cartArr");
  if (loadCartArr) {
    const parsedData = JSON.parse(loadCartArr);
    return parsedData;
  } else {
    return [];
  }
}
