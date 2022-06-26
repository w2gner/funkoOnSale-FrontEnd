import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import './Login.css';

const Login = () => {
  return (
    <section className="logon-container">
      <section className="form">
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"
            value=""
          />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </section>
  );
}

export default Login;