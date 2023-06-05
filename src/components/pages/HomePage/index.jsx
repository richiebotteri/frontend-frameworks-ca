import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApi from "../../../hooks/useApi";
import Spinner from "../../../shared/Spinner";
import * as s from "./styled";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { DiscountPercentage } from "../ProductPage/styled";
import { useEffect } from "react";

// s = styled

export default function HomePage() {
  const API_URL = "https://api.noroff.dev/api/v1/online-shop/";

  const { data, isLoading } = useApi(API_URL);

  const products = data;

  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  return (
    <>
      <h1>See our Products!</h1>
      <s.CardGrid>
        <Spinner loadingState={isLoading} />
        {products.map(
          (
            {
              id,
              title,
              imageUrl,
              price,
              discountedPrice,
              rating,
              description,
            },
            index
          ) => (
            <s.LinkContainer
              key={index}
              href={`/ProductPage/${title.replace(/\s+/g, "-")}?id=${id}`}
            >
              <s.ImageContainer>
                <s.Img src={imageUrl} />
                <s.RatingContainer>
                  <p>{rating}/5</p>
                  <FontAwesomeIcon icon={faStar} />
                </s.RatingContainer>
              </s.ImageContainer>
              <s.ContentContainer>
                <s.Title>{title}</s.Title>
                <s.Description>{description}</s.Description>
                <s.RowContainer>
                  <s.PriceContainer>
                    {price === discountedPrice ? (
                      <s.PriceText>Kr {price},-</s.PriceText>
                    ) : (
                      <>
                        <div>
                          <s.Del>Kr {price}</s.Del>
                          <s.DiscountPrice>
                            Kr {discountedPrice},-
                          </s.DiscountPrice>
                        </div>
                        <DiscountPercentage>
                          {parseInt(((price - discountedPrice) * 100) / price)}%
                        </DiscountPercentage>
                      </>
                    )}
                  </s.PriceContainer>
                </s.RowContainer>
              </s.ContentContainer>
            </s.LinkContainer>
          )
        )}
      </s.CardGrid>
    </>
  );
}
