import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../../../shared/IconLink/styled";
import { Del, DiscountPrice, Img, PriceText } from "../HomePage/styled";
import { DiscountPercentage } from "../ProductPage/styled";
import * as s from "./styled";
import { CartContext } from "../../../context/cartContext";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartItems = state.items;

  function decreaseItemOnClick(id, count) {
    count--;
    if (count > 0) {
      dispatch({ type: "UPDATE_CART_ITEM_COUNT", payload: { id, count } });
    } else {
      dispatch({ type: "REMOVE_CART_ITEM", payload: { id } });
    }
  }

  function incrementItemOnClick(id, count) {
    count++;
    dispatch({ type: "UPDATE_CART_ITEM_COUNT", payload: { id, count } });
  }

  function removeItemOnClick(id) {
    dispatch({ type: "REMOVE_CART_ITEM", payload: { id } });
  }

  useEffect(() => {
    const initialValue = 0;

    const totalArray = state.items.map(({ count, price }) => {
      const itemPrice = count * price;
      return itemPrice;
    });

    const cartPriceSum = totalArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    setTotalPrice(cartPriceSum);
  }, [state.items]);

  return (
    <>
      <h1>Cart</h1>
      <s.CartParentContainer>
        <s.CartContainer>
          {cartItems.length === 0 ? (
            <s.emptyCartCtnr>
              <h2>Cart is Empty</h2>
            </s.emptyCartCtnr>
          ) : (
            <>
              {cartItems.map(
                ({ id, title, imageUrl, price, discountedPrice, count }) => (
                  <s.CartItemCntr key={id}>
                    <s.CartItemImgCntr>
                      <Img src={imageUrl} />
                    </s.CartItemImgCntr>
                    <s.CartItemContent>
                      <s.TitleLinkCtnr>
                        <s.Title>{title}</s.Title>
                        <a
                          href={`/ProductPage/${title.replace(
                            /\s+/g,
                            "-"
                          )}?id=${id}`}
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                      </s.TitleLinkCtnr>
                      {price === discountedPrice ? (
                        <PriceText>Kr {price},-</PriceText>
                      ) : (
                        <s.QuantityTrashCtnr>
                          <div>
                            <Del>Kr {price}</Del>
                            <DiscountPrice>
                              Kr {discountedPrice},-
                            </DiscountPrice>
                          </div>
                          <DiscountPercentage>
                            -{" "}
                            {parseInt(
                              ((price - discountedPrice) * 100) / price
                            )}
                            %
                          </DiscountPercentage>
                        </s.QuantityTrashCtnr>
                      )}
                      <s.QuantityTrashCtnr>
                        <s.QuantityContainer>
                          <IconButton
                            onClick={() => incrementItemOnClick(id, count)}
                          >
                            +
                          </IconButton>
                          <s.QuantityCounter>{count}</s.QuantityCounter>
                          <IconButton
                            onClick={() => decreaseItemOnClick(id, count)}
                          >
                            -
                          </IconButton>
                        </s.QuantityContainer>
                        <IconButton
                          onClick={() => removeItemOnClick(id, count)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </IconButton>
                      </s.QuantityTrashCtnr>
                    </s.CartItemContent>
                  </s.CartItemCntr>
                )
              )}
            </>
          )}
        </s.CartContainer>
        <s.CheckoutContainer>
          <s.CheckoutPriceCtnr>
            <h2>Total</h2>
            <p>{parseFloat(totalPrice).toFixed(2)},- Kr</p>
          </s.CheckoutPriceCtnr>
          <s.CheckoutButton>Checkout</s.CheckoutButton>
        </s.CheckoutContainer>
      </s.CartParentContainer>
    </>
  );
}
