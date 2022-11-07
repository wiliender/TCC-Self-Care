import React from "react";
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.png';
import './style.css'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img className= "logoImg" src={logoImg} alt="Self Care" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamento para encontrar pessoas que possam resolver ou auxiliar no seu caso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>


                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Tipo de diabetes" />
                    <input placeholder= "Valor em reais para o tratamento" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}