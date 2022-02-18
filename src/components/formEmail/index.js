import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const InputText = styled.input`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #f5f5f5")};
`;
const InputName = styled.input`
  width: 48%;
  padding: 8px;
  border-radius: 8px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #f5f5f5")};
`;
const InputEmail = styled.input`
  width: 48%;
  padding: 8px;
  border-radius: 8px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #f5f5f5")};
`;

const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: max(300px, 50vw);
`;

const TextareaMensage = styled.textarea`
  height: 100px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #f5f5f5")};
  padding-left: 8px;
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
      setErros({
        errorName: true,
        errorEmail: false,
        errorSubject: false,
        errorMessage: false,
      });
      return;
    }
    if (!email) {
      setErros({
        errorName: false,
        errorEmail: true,
        errorSubject: false,
        errorMessage: false,
      });
      return;
    }
    if (!subject) {
      setErros({
        errorName: false,
        errorEmail: false,
        errorSubject: true,
        errorMessage: false,
      });
      return;
    }
    if (!message) {
      setErros({
        errorName: false,
        errorEmail: false,
        errorSubject: false,
        errorMessage: true,
      });
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
        <InputName
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={({ target }) => {
            setName(target.value);
            setErros({ ...erros, errorName: false });
          }}
          error={erros.errorName}
        />
        <InputEmail
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
            setErros({ ...erros, errorEmail: false });
          }}
          error={erros.errorEmail}
        />
      </ContainerInput>
      <InputText
        type="text"
        name="subject"
        placeholder="Assunto"
        value={subject}
        onChange={({ target }) => {
          setSubject(target.value);
          setErros({ ...erros, errorSubject: false });
        }}
        error={erros.errorSubject}
      />
      <TextareaMensage
        name="message"
        placeholder="Menssagem"
        value={message}
        onChange={({ target }) => {
          setMessage(target.value);
          setErros({ ...erros, errorMessage: false });
        }}
        error={erros.errorMessage}
      />
      <Button>Enviar</Button>
    </Form>
  );
};
