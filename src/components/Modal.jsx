// @ts-nocheck
import React from 'react'
import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje.jsx'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState("");
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        if([ nombre, cantidad, categoria ].includes('')){
            setMensaje("Todos los campos son obligatorios");
            setTimeout(() => {
                setMensaje("")
            }, 3000)
            return
        }
        guardarGasto({nombre, cantidad, categoria});
    }

    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        },500)
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
            </div>
            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input type="text" id="nombre" placeholder="Añade el nombre del Gasto" value={nombre} onChange={event => setNombre(event.target.value)}/>
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id="cantidad" placeholder="Añade la cantidad del gasto" value={cantidad} onChange={event => setCantidad(Number(event.target.value))}/>
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria" value={categoria} onChange={event => setCategoria(event.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal