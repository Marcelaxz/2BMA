import classes from './editar-perfil.module.css';

function EditPerfil(){
    return (
        <div>
            <div className = {classes.editar}>
            <h1>Editar Perfil do Usuário:</h1>
            </div>
            <div className = {classes.style}>
                <div className={classes.control}>
                    <h1>Alterar dados:</h1>
                </div>
                <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="nome"> Nome Completo: </label>
                    <input type="text" id="nome" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="dataN"> Data de Nascimento: </label>
                    <input type="date" id="dataN" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="estado"> Estado:  </label>
                    <input type="text" id="estado" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="cidade"> Cidade: </label>
                    <input type="text" id="cidade" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="user"> Usuário: </label>
                    <input type="text" id="user" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email"> Alterar E-mail: </label>
                    <input type="email" id="email" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password"> Senha: </label>
                    <input type="password" id="password" required />
                </div>
                <br/>
                <div className={classes.actions}>
                    <button> Alterar </button>
                    </div>
            </form>
            <br/>
        </div>
        <div className = {classes.style}>
                <div className={classes.control}>
                    <h1>Alterar senha:</h1>
                </div>
                <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="password">Senha Antiga: </label>
                    <input type="password" id="password" required />
                </div>
                <br/>
                <div className={classes.control}>
                    <label htmlFor="password"> Senha Nova: </label>
                    <input type="password" id="password" required />
                </div>
                <br/>
                <div className={classes.control}>
                    <label htmlFor="password"> Confirme Senha Nova: </label>
                    <input type="password" id="password" required />
                </div>
                <br/>
                <div className={classes.actions}>
                    <button> Alterar </button>
                    </div>
            </form>
            <br/>
        </div>
    </div>
    );
}

export default EditPerfil;
