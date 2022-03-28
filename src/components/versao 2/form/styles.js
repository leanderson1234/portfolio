import styled from "styled-components";

export const InputText = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorSubject ? `1px solid red` : "1px solid #f5f5f5"};
`;
export const SpanErrorSubject = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.danger};
  display: ${(props) => (props.error.errorSubject ? `block` : "none")};
`;
export const InputName = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorName ? `1px solid red` : "1px solid #f5f5f5"};
`;
export const SpanErrorName = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.danger};
  display: ${(props) => (props.error.errorName ? `block` : "none")};
`;
export const InputEmail = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorEmail ? "1px solid red" : "1px solid #f5f5f5"};
`;
export const SpanErrorEmail = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.danger};
  display: ${(props) => (props.error.errorEmail ? "block" : "none")};
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    width: 48%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextareaMensage = styled.textarea`
  height: 100px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorMessage ? "1px solid red" : "1px solid #f5f5f5"};
  padding-left: 8px;
`;
export const SpanErrorMensage = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.danger};
  display: ${(props) => (props.error.errorMessage ? "block" : "none")};
`;

export const DivIpunt = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
