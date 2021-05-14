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
        <div className={classes.logo}> Tea Time! </div>
        <br />
        <br />
        {!session && !loading && <h3 className={classes.h3}>WELCOME!</h3>}
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
