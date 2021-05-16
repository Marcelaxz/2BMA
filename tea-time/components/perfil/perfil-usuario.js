import classes from "./perfil-usuario.module.css";
import Link from "next/link";

function UsuarioPage(){
    return (
    <div>
        <div className = {classes.editar}>
            <Link href = '/editar-perfil'><a><h2>Editar Perfil</h2></a></Link>
        </div>
        <div className = {classes.inicio}>
        <h1>MEU PERFIL</h1>
            <h2>Suas Avaliações:</h2>
        </div>
        
        <div className = {classes.megadiv}>
            <div className = {classes.esquerda}>
                <div className = {classes.filmes}>
                <div className = {classes.box1}>
                    <h1>FILMES</h1>
                    </div>
                    <div className = {classes.box2}>
                    <br/>
                    <p>Você não possui nenhuma avaliação ainda :( </p>
                    <br/>
                    </div>
                </div>

                <div className = {classes.livros}>
                <div className = {classes.box1}>
                    <h1>LIVROS</h1>
                    </div>
                    <div className = {classes.box2}>
                    <br/>
                    <p>Você não possui nenhuma avaliação ainda :( </p>
                    <br/>
                    </div>
                </div>

                <div className = {classes.series}>
                    <div className = {classes.box1}>
                    <h1>SÉRIES</h1>
                    </div>
                    <div className = {classes.box2}>
                    <br/>
                    <p>Você não possui nenhuma avaliação ainda :( </p>
                    <br/>
                    </div>
                    
                </div>

                <div className = {classes.recomendacoes}>
                        <div className = {classes.box1}>
                        <h1>RECOMENDAÇÕES</h1>
                        </div>
                        <br/>
                        <p>Faça uma avaliação para receber recomendações :)</p>
                        <br/>
                </div>
            </div>

            <div className = {classes.direita}>
                <div className = {classes.amigos} className = {classes.box1}>
                        <h1>AMIGOS</h1>
                        <br/>
                    <ul>
                        <li># amigo 1</li>
                        <br/>
                        <li># amigo 2</li>
                        <br/>
                        <li># amigo 3</li>
                        <br/>
                        <li># amigo 4</li>
                        <br/>
                        <li># amigo 5</li>
                        <br/>
                        <li># amigo 6</li>
                        <br/>
                        <li># amigo 7</li>
                        <br/>
                        <li># amigo 8</li>
                        <br/>
                        <li># amigo 9</li>
                        <br/>
                        <li># amigo 10</li>
                        <br/>
                    </ul>
                </div>
                <div className = {classes.sugestoes} className = {classes.box1}>
                            <h1>SUGESTÃO DE AMIGOS</h1>
                        <ul>
                                <li># Membro 1</li>
                                <br/>
                                <li># Membro 2</li>
                                <br/>
                                <li># Membro 3</li>
                                <br/>
                                <li># Membro 4</li>
                                <br/>
                                <li># Membro 5</li>
                                <br/>
                                <li># Membro 6</li>
                                <br/>
                                <li># Membro 7</li>
                                <br/>
                                <li># Membro 8</li>
                                <br/>
                                <li># Membro 9</li>
                                <br/>
                            </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UsuarioPage;