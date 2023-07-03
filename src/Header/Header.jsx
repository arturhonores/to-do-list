import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/checklist2.svg'

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  }

  return (
    <header className='header'>
      <div className='wrapper'>
        <img style={{ width: "25px", padding: "0" }} src={logo} alt="" /><h1 className='header__titulo'>Lista de Tareas</h1>
      </div>
      {mostrarCompletadas ?
        <button className='header__boton' onClick={() => toggleCompletadas()}>
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton'></FontAwesomeIcon>
        </button>
        :
        <button className='header__boton' onClick={() => toggleCompletadas()}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className='header__icono-boton'></FontAwesomeIcon>
        </button>
      }
    </header>
  )
}

export default Header