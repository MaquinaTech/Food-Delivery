import React from 'react';
import styles from "../styles/styles.module.scss";

function Home() {
  return (
    <div>
      <div className="login-box">
        <img
          src="../public/logo.png"
          className="avatar"
          alt="Logo"
        />
        <h1>Iniciar sesión</h1>
        <form action="LoginServlet.do" method="POST">
          <label className="inputRed" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingrese su nombre de usuario"
            required
          />
          <label className="inputGreen" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            required
          />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <br />
          <input className="inputSubmit" type="submit" value="Ingresar" />
        </form>
        <div style={{ display: 'grid' }}>
          <a href="RegisterServlet.do">
            ¿Nuevo en Foodie? Crear cuenta
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

