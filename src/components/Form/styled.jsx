import { styled } from "styled-components";
import * as flex from "../../styles/flex.styles";

export const Form = styled.form`
  ${flex.column};
  gap: 20px;
  max-width: 400px;
  margin-top: 40px;
  padding: 20px;
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
border: 1px solid #c4c4c4;
border-radius: 4px;
padding: 2px 0 2px 10px;
`;

export const Input = styled.input`
  height: 35px;
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
`;
