import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { SuccessCtnr } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CheckoutSuccessPage() {
  return (
    <SuccessCtnr>
      <FontAwesomeIcon icon={faCircleCheck} size="2xl"/>
      <h1>Checkout Success</h1>
      <a href="/">Return to homepage</a>
    </SuccessCtnr>
  );
}
