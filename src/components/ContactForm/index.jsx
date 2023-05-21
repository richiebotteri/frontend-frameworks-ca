import { styled } from "styled-components";
import * as flex from "../../styles/flex.styles";
import { useState } from "react";

const Form = styled.form`
  ${flex.column};
  gap: 20px;
  max-width: 400px;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  background-color: #fafafa;
`;

const FormGroup = styled.div`
  ${flex.column};
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const inputStyles = `
border: 1px solid #c4c4c4;
border-radius: 4px;
padding: 2px 0 2px 10px;
`;

const Input = styled.input`
  height: 35px;
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
`;

export default function ContactForm() {
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

    // form.reset();
    // location.reload();
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
    <Form onSubmit={onFormSubmit}>
      <FormGroup>
        <Label htmlFor="name">Full name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="ex: John Dow"
          value={name}
          onChange={onNameChange}
          minLength={3}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          placeholder="ex: Billing"
          value={subject}
          onChange={onSubjectChange}
          minLength={3}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="ex: john.dow@email.com"
          value={email}
          onChange={onEmailChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="body">Body</Label>
        <TextArea
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
        ></TextArea>
      </FormGroup>
      <Input type="submit" value="submit" />
    </Form>
  );
}
