import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Container from "./container.styled";
import { Img } from "./image.styled";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import { AddToCart } from "./AddToCart.styled";
import * as Text from "./Text.styled";

export default function ProductCard() {
  return (
    <Container.CardLink href="#">
      <Container.Image>
        <Img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        <Container.Discount>
          <p>50%</p>
        </Container.Discount>
      </Container.Image>
      <Container.Content>
        <Text.Title>Nike Air</Text.Title>
        <Container.Rating>
          <FontAwesomeIcon icon={Icon.faStar} />
          <FontAwesomeIcon icon={Icon.faStar} />
          <FontAwesomeIcon icon={Icon.faStar} />
          <FontAwesomeIcon icon={Icon.faStar} />
        </Container.Rating>
        <Text.Description>
          Nike Air is the lighest shoe in the world!
        </Text.Description>
        <Container.Row>
          <Container.Price>
            <Text.Price>250,-</Text.Price>
          </Container.Price>
          <AddToCart>
            <FontAwesomeIcon icon={Icon.faCartPlus} />
          </AddToCart>
        </Container.Row>
      </Container.Content>
    </Container.CardLink>
  );
}
