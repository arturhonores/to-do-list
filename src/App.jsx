import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header/Header';
import FormularioTareas from './FormularioTareas/FormularioTareas';
import ListaTareas from './ListaTareas/ListaTareas';

const App = () => {
  //obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = localStorage.getItem('tareas') ?
    JSON.parse(localStorage.getItem('tareas')) : [];

  //estalecemos el estado dentro de localstorage
  const [tareas, cambiarTareas] = useState(tareasGuardadas);


  //guardando el estado dentro de localstorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  //accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === "true";
  }


  //el estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}></Header>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}></FormularioTareas>
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}></ListaTareas>
    </div>
  )
}

export default App
