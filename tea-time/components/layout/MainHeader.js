import Link from "next/link";
import classes from './MainHeader.module.css';


function MainHeader() {
  return (
    <header className = {classes.header}>
      <div className = {classes.pad}>
      <a href="/perfil" className = {classes.username}>
          <img src = '../../images/profile-pic.png' className = {classes.userprofile}/>
        <p>Usuário</p></a>
        <div className = {classes.logo}><a href = '/'>Tea Time!</a></div>
      </div>

      <br />
      <br />
      <nav>
        <ul className = {classes.navbar}>
          <li>
            <Link href="/"> PÁGINA INICIAL </Link>
          </li>
          <li>
            <Link href="/perfil"> MEU PERFIL </Link>
          </li>
          <li>
            <Link href="/filmes"> FILMES </Link>
          </li>
          <li>
            <Link href="/livros"> LIVROS </Link>
          </li>
          <li>
            <Link href="/series"> SÉRIES </Link>
          </li>
        </ul>
        {/* <form className = {classes.input}>
          <input type="search" id="busc" name="busc" placeholder="Buscar" />
        </form> */}
      </nav>
    </header>
  );
}

export default MainHeader;
