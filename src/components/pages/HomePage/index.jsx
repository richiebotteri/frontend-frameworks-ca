import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApi from "../../../hooks/useApi";
import Spinner from "../../../shared/Spinner";
import { CardGrid } from "../../Grid";
import * as s from "./styled";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// s = styled

export default function HomePage() {
  const API_URL = "https://api.noroff.dev/api/v1/online-shop/";

  const { data, isLoading } = useApi(API_URL);

  const products = data;

  return (
    <>
      <h1>See our Products!</h1>
      <CardGrid>
        <Spinner loadingState={isLoading} />
        {products.map((product, index) => (
          <s.LinkContainer
            key={index}
            href={`/ProductPage/${product.title.replace(/\s+/g, "-")}`}
          >
            <s.ImageContainer>
              <s.Img src={product.imageUrl} />
              <s.RatingContainer>
                <p>{product.rating}/5</p>
                <FontAwesomeIcon icon={faStar} />
              </s.RatingContainer>
            </s.ImageContainer>
            <s.ContentContainer>
              <s.Title>{product.title}</s.Title>
              <s.Description>{product.description}</s.Description>
              <s.RowContainer>
                <s.PriceContainer>
                  {product.price === product.discountedPrice ? (
                    <s.PriceText>{product.price}</s.PriceText>
                  ) : (
                    <>
                      <s.PriceText>
                        <s.Del>{product.price}</s.Del>
                      </s.PriceText>
                      <s.DiscountPrice>
                        {product.discountedPrice}
                      </s.DiscountPrice>
                    </>
                  )}
                </s.PriceContainer>
              </s.RowContainer>
            </s.ContentContainer>
          </s.LinkContainer>
        ))}
      </CardGrid>
    </>
  );
}
