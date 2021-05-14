import classes from "./cadastro-usuario.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

async function createUser(nome, dataN, estado, cidade, email, user, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      nome,
      dataN,
      estado,
      cidade,
      email,
      user,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Algo deu errado.");
  }

  return data;
}

function CadastroUser() {
  const nomeInputRef = useRef();
  const dataNInputRef = useRef();
  const estadoInputRef = useRef();
  const cidadeInputRef = useRef();
  const emailInputRef = useRef();
  const userInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredNome = nomeInputRef.current.value;
    const enteredDataN = dataNInputRef.current.value;
    const enteredEstado = estadoInputRef.current.value;
    const enteredCidade = cidadeInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredUser = userInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const result = await createUser(
        enteredNome,
        enteredDataN,
        enteredCidade,
        enteredEstado,
        enteredEmail,
        enteredUser,
        enteredPassword
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.content}>
      <Image width={650} height={100} src="/images/relaxing.svg" />
      <section className={classes.style}>
        <h1 className={classes.h1}> CADASTRO </h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="nome"> Nome Completo </label>
            <input type="text" id="nome" required ref={nomeInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="dataN"> Data de Nascimento </label>
            <input type="date" id="dataN" required ref={dataNInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="estado"> Estado </label>
            <input type="text" id="estado" required ref={estadoInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="cidade"> Cidade </label>
            <input type="text" id="cidade" required ref={cidadeInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="email"> E-mail </label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="user"> Usuário </label>
            <input type="text" id="user" required ref={userInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password"> Senha </label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button> Cadastrar </button>
          </div>
          <hr />
          <div className={classes.actions}>
            <button>
              {" "}
              <Link href="/"> Já Possui Conta? </Link>{" "}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CadastroUser;
