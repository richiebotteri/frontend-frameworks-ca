import { faStar } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../hooks/useApi";
import Spinner from "../Spinner";
import * as Container from "./container.styled";
import { Img } from "./image.styled";
import * as Text from "./Text.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard() {
  const API_URL = "https://api.noroff.dev/api/v1/online-shop/";

  const { data, isLoading } = useApi(API_URL);

  const products = data;

  return (
    <>
      <Spinner loadingState={isLoading} />
      {products.map((product, index) => (
        <Container.CardLink
          key={index}
          href={`/ProductPage?title=${product.title}`}
        >
          <Container.Image>
            <Img src={product.imageUrl} />
            <Container.Rating>
              <p>{product.rating}/5</p>
              <FontAwesomeIcon icon={faStar} />
            </Container.Rating>
          </Container.Image>
          <Container.Content>
            <Text.Title>{product.title}</Text.Title>
            <Text.Description>{product.description}</Text.Description>
            <Container.Row>
              <Container.Price>
                <Text.Price>
                  <Text.Del>{product.price}</Text.Del>
                </Text.Price>
                <Text.DiscountPrice>
                  {product.discountedPrice}
                </Text.DiscountPrice>
              </Container.Price>
            </Container.Row>
          </Container.Content>
        </Container.CardLink>
      ))}
    </>
  );
}
