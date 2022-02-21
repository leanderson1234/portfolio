import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const InputText = styled.input`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorSubject ? `1px solid red` : "1px solid #f5f5f5"};
`;
const SpanErrorSubject = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: red;
  display: ${(props) => (props.error.errorSubject ? `block` : "none")};
`;
const InputName = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorName ? `1px solid red` : "1px solid #f5f5f5"};
`;
const SpanErrorName = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: red;
  display: ${(props) => (props.error.errorName ? `block` : "none")};
`;
const InputEmail = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorEmail ? "1px solid red" : "1px solid #f5f5f5"};
`;
const SpanErrorEmail = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: red;
  display: ${(props) => (props.error.errorEmail ? "block" : "none")};
`;

const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    width: 48%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: max(300px, 50vw);
`;

const TextareaMensage = styled.textarea`
  margin-top: 8px;
  height: 100px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: ${(props) =>
    props.error.errorMessage ? "1px solid red" : "1px solid #f5f5f5"};
  padding-left: 8px;
`;
const SpanErrorMensage = styled.span`
  font-size: 13px;
  white-space: nowrap;
  color: red;
  display: ${(props) => (props.error.errorMessage ? "block" : "none")};
`;

const Button = styled.button`
  padding: 8px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #334756;
  border-radius: 16px;
  color: #ff4c29;
  background: none;
  width: 50%;

  :hover {
    background: #ff4c29;
    color: #fff;
  }
`;

const DivIpunt = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FormEmail = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [erros, setErros] = useState({
    errorName: false,
    errorEmail: false,
    errorSubject: false,
    errorMessage: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) {
      setErros({ ...erros, errorName: true });
      return;
    }
    if (!email) {
      setErros({ ...erros, errorEmail: true });
      return;
    }
    if (!subject) {
      setErros({ ...erros, errorSubject: true });
      return;
    }
    if (!message) {
      setErros({ ...erros, errorMessage: true });
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setEmail("");
            setMessage("");
            setName("");
            setSubject("");
            return;
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Form ref={form} onSubmit={sendEmail}>
      <ContainerInput>
        <DivIpunt>
          <InputName
            type="text"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={({ target }) => {
              setName(target.value);
              setErros({ ...erros, errorName: false });
            }}
            error={erros}
          />
          <SpanErrorName error={erros}>
            Campo obrigatorio, insira seu Nome
          </SpanErrorName>
        </DivIpunt>
        <DivIpunt>
          <InputEmail
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
              setErros({ ...erros, errorEmail: false });
            }}
            error={erros}
          />
          <SpanErrorEmail error={erros}>
            Campo obrigatorio, insira seu Email
          </SpanErrorEmail>
        </DivIpunt>
      </ContainerInput>
      <DivIpunt>
        <InputText
          type="text"
          name="subject"
          placeholder="Assunto"
          value={subject}
          onChange={({ target }) => {
            setSubject(target.value);
            setErros({ ...erros, errorSubject: false });
          }}
          error={erros}
        />
        <SpanErrorSubject error={erros}>
          Campo obrigatorio, insira o assunto
        </SpanErrorSubject>
      </DivIpunt>
      <DivIpunt>
        <TextareaMensage
          name="message"
          placeholder="Mensagem "
          value={message}
          onChange={({ target }) => {
            setMessage(target.value);
            setErros({ ...erros, errorMessage: false });
          }}
          error={erros}
        />
        <SpanErrorMensage error={erros}>
          Campo obrigatorio, insira sua proposta
        </SpanErrorMensage>
      </DivIpunt>
      <Button>Enviar</Button>
    </Form>
  );
};
