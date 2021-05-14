import classes from "../cadastro/cadastro-usuario.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

function LogarUser() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
        const result = await signIn("credentials", {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
        });
  
        if (!result.error) {
          router.replace("/pagina-inicial");
        }
      }
  }

  return (
    <div className={classes.content}>
      <Image width={650} height={100} src="/images/draw.svg" />
      <section className={classes.style}>
        <h1 className={classes.h1}> LOGIN </h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email"> E-mail </label>
            <input type="email" id="email" required ref={emailInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password"> Senha </label>
            <input type="password" id="password" required ref={passwordInputRef}/>
          </div>
          <div className={classes.actions}>
            <button> Entrar </button>
          </div>
        </form>
        <hr />
        <div className={classes.actions}>
          <button>
            {" "}
            <Link href="/cadastro"> Cadastro </Link>{" "}
          </button>
        </div>
      </section>
    </div>
  );
}

export default LogarUser;
