import React, { useState } from "react";



const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfir, setPasswordConfir] = useState("");

  const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  function mostrar(valor) {
    if(valor.length > 0){
      return valor;
    }
}
  return (
    <>
      <h1>Más Formularios</h1>

      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            onChange={(evento) => setNombre(evento.target.value)}
            type="text"
            className="form-control"
          />
        {(nombre.length < 3 && nombre !== "" ) ? <p className='text-danger'>Nombre debe tener mas de 3 caracteres</p> : null}
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            onChange={(evento) => setApellido(evento.target.value)}
            type="text"
            className="form-control"
          />
          {(apellido.length < 3 && apellido  !== "" ) ? <p className='text-danger'>Apellido debe tener mas de 3 caracteres</p> : null}
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            id="email"
            className="form-control"
          />
          {(!emailRegexp.test(email)) ? <p className='text-danger'>No es un email valido</p> : null}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(evento) => setPassword(evento.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar Password</label>
          <input
            onChange={(evento) => setPasswordConfir(evento.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        {(password !== passwordConfir) ? <p className='text-danger'>Las contraseñas no coinciden</p> : null}
        {(password === passwordConfir && password.length !== 0 && password.length < 5) ? <p className='text-danger'>Las contraseñas deben tener al menos 5 caracteres</p> : null}
      </form>
      <div>
        <h2>Contenido del Formulario</h2>
        <p>Nombre: {mostrar(nombre)}</p>
        <p>Apellido: {apellido}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Pasword: {passwordConfir}</p>
      </div>
    </>
  );
};

export default Formulario;
