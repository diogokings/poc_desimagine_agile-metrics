import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css'

class Login extends Component {

    state = {
        userLogin: 'teste',
        userPassword: '',
        autenticated: false,
        route: <Link to={'/'}>acessar</Link>

    }

    buttonClickHandler = () => {
        this.setState( {
            autenticated: true,
            route: <Link to={'/main'}>acessar</Link>
        } );
    }

    render() {
        return (
            <div className="div-login">
                <form>
                    <label htmlFor="userName" >Usuário:</label>
                    <input placeholder={this.state.userLogin} />
                    <label htmlFor="password" >Senha:</label>
                    <input placeholder={this.state.userPassword} />
                    <button htmlFor="login" onClick={this.buttonClickHandler}>Entrar</button>
                    {this.state.route}
                </form>
            </div>
        )
    }
}

/*
Login.PropsType = {
    userLogin: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired
}

Login.defaultProps = {
    userLogin: "Informe seu usuário",
    userPassword: "Informe sua senha"
}
*/
export default Login;