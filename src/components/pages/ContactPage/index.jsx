import { useEffect } from "react";
import Form from "../../Form";

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Page';
  }, []);

  return (
    <>
      <h1>Contact Page</h1>
      <p>Do you have any issues?</p>
      <p>
        Please contact us through the form below and we will contact you within
        1-2 business days!
      </p>
      <Form />
    </>
  );
}
