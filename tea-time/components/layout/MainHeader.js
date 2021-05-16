import Link from "next/link";
import { Fragment } from "react";
import classes from "./MainHeader.module.css";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/client";
import Image from "next/image";

function MainHeader(props) {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <Fragment>
      <header className={classes.header}>
        {session && !loading && (
          <div className={classes.pad}>
            <a href="/perfil" className={classes.username}>
              <img
                src="../../images/profile-pic.png"
                className={classes.userprofile}
              />
              <p>Usuário</p>
            </a>
          </div>
        )}
        <div className={classes.logo}>
          <a href="/">Tea Time!</a>
        </div>
        <br />
        <br />
        {!session && !loading && <h3 className={classes.h3}>BEM-VINDO(A)!</h3>}
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
      <footer className={classes.foot}>
        <a href="https://github.com/Marcelaxz/2BMA">
          <Image
            className={classes.img}
            width={13}
            height={13}
            src="/images/heart.png"
          />
          Made by 2BMA
        </a>
      </footer>
    </Fragment>
  );
}

export default MainHeader;
