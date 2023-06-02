import { useState } from "react";
import * as s from "./styled";

// s = Styled components

export default function Form() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputData = new FormData(form);
    const formInputObject = Object.fromEntries(formInputData);
    console.log(formInputObject);
  }

  function onNameChange(event) {
    const formNameValue = event.target.value;
    setName(formNameValue);
  }

  function onSubjectChange(event) {
    const formSubjectValue = event.target.value;
    setSubject(formSubjectValue);
  }

  function onEmailChange(event) {
    const formEmailValue = event.target.value;
    setEmail(formEmailValue);
  }

  function onBodyChange(event) {
    const formBodyValue = event.target.value;
    setBody(formBodyValue);
  }

  return (
    <s.Form onSubmit={onFormSubmit}>
      <s.FormGroup>
        <s.Label htmlFor="name">Full name</s.Label>
        <s.Input
          type="text"
          id="name"
          name="name"
          placeholder="ex: John Dow"
          value={name}
          onChange={onNameChange}
          minLength={3}
          required
        />
      </s.FormGroup>
      <s.FormGroup>
        <s.Label htmlFor="subject">Subject</s.Label>
        <s.Input
          type="text"
          id="subject"
          name="subject"
          placeholder="ex: Billing"
          value={subject}
          onChange={onSubjectChange}
          minLength={3}
          required
        />
      </s.FormGroup>
      <s.FormGroup>
        <s.Label htmlFor="email">Email</s.Label>
        <s.Input
          type="email"
          id="email"
          name="email"
          placeholder="ex: john.dow@email.com"
          value={email}
          onChange={onEmailChange}
          required
        />
      </s.FormGroup>
      <s.FormGroup>
        <s.Label htmlFor="body">Body</s.Label>
        <s.TextArea
          type="text"
          id="body"
          name="body"
          placeholder="ex: I was billed for a product i refunded. please help"
          rows="5"
          cols="33"
          value={body}
          onChange={onBodyChange}
          minLength={3}
          required
        ></s.TextArea>
      </s.FormGroup>
      <s.Input type="submit" value="submit" />
    </s.Form>
  );
}
