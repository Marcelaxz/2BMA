import Link from "next/link";
import { Fragment } from "react";
import classes from "./MainHeader.module.css";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/client";

function MainHeader(props) {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <Fragment>
      <header className={classes.header}>
        {session && !loading && <div className = {classes.pad}>
      <a href="/perfil" className = {classes.username}>
          <img src = '../../images/profile-pic.png' className = {classes.userprofile}/>
        <p>Usuário</p></a>
      </div>}
      <div className = {classes.logo}><a href = '/'>Tea Time!</a></div>
        <br />
        <br />
        {!session && !loading && <h3 className={classes.h3}>Bem-Vindo(a)!</h3>}
        <nav>
          <ul className={classes.navbar}>
            {session && (
              <li>
                <Link href="/pagina-inicial"> PÁGINA INICIAL </Link>
              </li>
            )}
            {session && (
              <li>
                <Link href="/perfil"> MEU PERFIL </Link>
              </li>
            )}
            {session && (
              <li>
                <Link href="/filmes"> FILMES </Link>
              </li>
            )}
            {session && (
              <li>
                <Link href="/livros"> LIVROS </Link>
              </li>
            )}
            {session && (
              <li>
                <Link href="/series"> SÉRIES </Link>
              </li>
            )}
            {session && (
              <li>
                <a onClick={logoutHandler}>SAIR </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainHeader;
