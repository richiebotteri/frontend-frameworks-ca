import { faStar } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../../hooks/useApi";
import { DiscountPrice, PriceText } from "../HomePage/styled";
import * as s from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../../shared/Spinner";

export default function ProductPage() {
  const API_URL = "https://api.noroff.dev/api/v1/online-shop/";

  const { data, isLoading } = useApi(API_URL);

  const products = data;

  const params = new URL(document.location).searchParams;
  const id = params.get("id");

  const selectedProduct = products.filter((product) => product.id === id);

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
                      <DiscountPrice>Kr {discountedPrice},-</DiscountPrice>
                      <s.DiscountPercentage>
                        - {parseInt(((price - discountedPrice) * 100) / price)}%
                      </s.DiscountPercentage>
                    </>
                  )}
                </s.PriceContainer>
                <s.ProductDescription>{description}</s.ProductDescription>
                <s.AddToCartButton>Add to Cart</s.AddToCartButton>
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
