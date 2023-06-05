import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { SuccessCtnr } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context";

export default function CheckoutSuccessPage() {
  const {dispatch} = useContext(CartContext);
  
  useEffect(()=>{
    dispatch({type: "CLEAR_CART"});
  }, [])

  return (
    <SuccessCtnr>
      <FontAwesomeIcon icon={faCircleCheck} size="2xl"/>
      <h1>Checkout Success</h1>
      <a href="/">Return to homepage</a>
    </SuccessCtnr>
  );
}
