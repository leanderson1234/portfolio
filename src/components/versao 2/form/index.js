import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContainerButton,
  ContainerInput,
  DivIpunt,
  Form,
  InputEmail,
  InputName,
  InputText,
  SpanErrorEmail,
  SpanErrorMensage,
  SpanErrorName,
  SpanErrorSubject,
  TextareaMensage,
} from "./styles";
import { ButtonPrimary } from "../buttonPrimario";

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
    <Form ref={form} onSubmit={sendEmail} id="contatos">
      {/* <ContainerInput> */}
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
      {/* </ContainerInput> */}
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
      <ContainerButton>
        <ButtonPrimary id="contact">Enviar</ButtonPrimary>
      </ContainerButton>
    </Form>
  );
};
