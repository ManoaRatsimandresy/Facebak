import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {makeRequest as axios} from '../../axios';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    joinedAt: '',
  });
  const [err, setErr] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/users', inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <form className="register" onSubmit={(e) => handleSubmit(e)}>
      <div className="registerBox">
        <h2>Inscription</h2>

        <div className="formulaire">
 
        <input
            type="text"
            className="registerInput"
            placeholder="Nom d'utilisateur"
            name="username"
            minLength="5"
            value={inputs.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="registerInput"
            placeholder="Adresse email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
          />
          
          <div className="passwordInputContainer">
            <input
              type={showPassword ? 'text' : 'password'}
              className="registerInputD"
              placeholder="Mot de passe"
              name="password"
              minLength="8"
              value={inputs.password}
              onChange={handleChange}
              required
            />
            <button
              className="passwordToggleButton"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>
          
          <div className="passwordInputContainer">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="registerInputD"
              placeholder="Confirmer le mot de passe"
              name="confirmPassword"
              minLength="8"
              value={inputs.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              className="passwordToggleButton"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
            </button>
          </div>

          <input
            type="datetime-local"
            className="registerInput"
            placeholder="Date d'inscription"
            name="joinedAt"
            value={inputs.joinedAt}
            onChange={handleChange}
          />
          
          <button type='submit' className="registerButton">
            S'inscrire
          </button>
          
          <div className="loginRegisterButton">
            <Link to="/">Déjà un compte ? Se connecter</Link>
          </div>
          
          {err && <div className="error">{err}</div>}
        </div>
      </div>
    </form>
  );
};

export default Register;
