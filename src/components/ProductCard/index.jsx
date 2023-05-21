import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Container from "./container.styled";
import { Img } from "./image.styled";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import * as Text from "./Text.styled";
import { useEffect, useState } from "react";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(API_URL);
      const result = await response.json();
      setProducts(result);
    }

    getProducts();
  }, []);

  const API_URL = "https://api.noroff.dev/api/v1/online-shop/";

  return (
    <>
      {products.map((product, index) => (
        <Container.CardLink
          key={index}
          href={`/ProductPage?title=${product.title}`}
        >
          <Container.Image>
            <Img src={product.imageUrl} />
            <Container.Rating>
              <p>{product.rating}</p>
              <FontAwesomeIcon icon={Icon.faStar} />
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
