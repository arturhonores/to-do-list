import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({ tareas, cambiarTareas }) => {
    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputTarea.trim() !== "") {
            cambiarTareas([
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]);
        }
        cambiarInputTarea("")

    }

    return (
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input
                type="text"
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                value={inputTarea}
                onChange={(e) => handleInput(e)}
            >
            </input>
            <button
                type="submit"
                className='formulario-tareas__btn'
            >
                <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn"></FontAwesomeIcon>
            </button>

        </form>
    );
}

export default FormularioTareas