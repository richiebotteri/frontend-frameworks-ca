import { styled } from "styled-components";
import * as flex from "../../styles/flex.styles";

export const Form = styled.form`
  ${flex.column};
  gap: 20px;
  max-width: 400px;
  margin-top: 40px;
  padding: 40px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  background-color: #fafafa;
`;

export const FormGroup = styled.div`
  ${flex.column};
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const inputStyles = `
border-radius: 40px;
border: 1px solid lightgray;
height: 45px;
padding-left: 20px;
`;

export const Input = styled.input`
  height: 35px;
  ${inputStyles}
`;

