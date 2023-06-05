import { styled } from "styled-components";
import { CheckoutContainer } from "../CartPage/styled";
import { alignItemsCenter } from "../../../styles/flex.styles";

export const SuccessCtnr = styled(CheckoutContainer)`
${alignItemsCenter}
> * {
  text-align: center;
}
`;