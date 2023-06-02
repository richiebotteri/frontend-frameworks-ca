import { faStar } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../../hooks/useApi";
import { Del, DiscountPrice, PriceText } from "../HomePage/styled";
import * as s from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../../shared/Spinner";
import { useContext, useState } from "react";
import { CartContext } from "../../../context";

export default function ProductPage() {
  // FETCH API DATA

  const API_URL = "https://api.noroff.dev/api/v1/online-shop/";
  const { data, isLoading } = useApi(API_URL);
  const products = data;

  //FILTER API DATA BASED ON PRODUCT ID
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  const selectedProduct = products.filter((product) => product.id === id);

  // ADD PRODUCT TO CART ON CLICK
  const [active, setActive] = useState(false);

  const { state, dispatch } = useContext(CartContext);

  function onAddToClick(cartItem) {
    setActive(true);
    dispatch({ type: "ADD_TO_CART", payload: { cartItem } });
  }

  return (
    <>
      <Spinner loadingState={isLoading} />
      {selectedProduct.map(
        ({
          id,
          title,
          imageUrl,
          price,
          discountedPrice,
          description,
          reviews,
        }) => (
          <div key={id}>
            <h1>{title}</h1>
            <s.ProductContainer>
              <s.ImgContainer>
                <s.StyledImg src={imageUrl} />
              </s.ImgContainer>
              <s.ContentContainer>
                <s.PriceContainer>
                  {price === discountedPrice ? (
                    <PriceText>Kr {price},-</PriceText>
                  ) : (
                    <>
                      <div>
                        <Del>Kr {price}</Del>
                        <DiscountPrice>Kr {discountedPrice},-</DiscountPrice>
                      </div>
                      <s.DiscountPercentage>
                        - {parseInt(((price - discountedPrice) * 100) / price)}%
                      </s.DiscountPercentage>
                    </>
                  )}
                </s.PriceContainer>
                <s.ProductDescription>{description}</s.ProductDescription>
                {active === true ||
                state.items.find((item) => item.id === id) ? (
                  <s.CheckoutLink href="/CartPage">
                    Go to checkout
                  </s.CheckoutLink>
                ) : (
                  <>
                    <s.AddToCartButton
                      onClick={() =>
                        onAddToClick({
                          id,
                          count: 1,
                          title,
                          imageUrl,
                          price,
                          discountedPrice,
                        })
                      }
                    >
                      Add to Cart
                    </s.AddToCartButton>
                  </>
                )}
              </s.ContentContainer>
            </s.ProductContainer>
            <s.ReviewParentContainer>
              <h2>User Reviews</h2>
              {reviews.map(({ id, username, rating, description }) => (
                <s.ReviewContainer key={id}>
                  <s.ReviewTop>
                    <p>
                      <s.TextLabel>{username}</s.TextLabel>
                    </p>
                  </s.ReviewTop>
                  <p>{description}</p>
                  <p>
                    <s.TextLabel>Score:</s.TextLabel> {rating}/5{" "}
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </s.ReviewContainer>
              ))}
            </s.ReviewParentContainer>
          </div>
        )
      )}
    </>
  );
}

//
