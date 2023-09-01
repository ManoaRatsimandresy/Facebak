import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext}  from "../../context/AuthContext"; 
import '../login/login.css';
import '../../Style.css';
import {makeRequest as axios} from '../../axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "", // Corrected property name
    password: "",
  });
  const [err, setErr] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post('users/login', inputs)
      .then((response) => { 
        dispatch({type: "LOGIN_SUCCESS", payload: response.data});
        navigate("/home");
      }).catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className="login">
      <div className="loginBox">
        <h2>Connexion</h2>
        <form className="formulaire" onSubmit={(e) => handleLogin(e)}>
          <input
            type="text"
            className="loginInput"
            placeholder="Nom d'utilisateur"
            name="username"
            required
            onChange={handleChange}
            value={inputs.username}
          />
          <input
            type="email"
            className="loginInput"
            placeholder="Adresse email"
            name="email"
            required
            onChange={handleChange}
            value={inputs.email}
          />
          <div className="passwordInputContainer">
            <input
              type={showPassword ? 'text' : 'password'}
              className="loginInputD"
              placeholder="Mot de passe"
              name="password"
              required
              onChange={handleChange}
              value={inputs.password}
            />
            <button
              className="passwordToggleButton"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>
          {err && <div className="error">{err}</div>}
          <button className="loginButton">
            Se connecter
          </button>
          <div className="loginForgot">
            <Link to="/">Mot de passe oublié ?</Link>
          </div>
          <div className="loginRegisterButton">
            <Link to="/register">Créer un compte</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
