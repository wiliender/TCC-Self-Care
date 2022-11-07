import React from "react";
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.png'
import diabetesImg from '../../assets/diabetes.png'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img className= "logoImg" src={logoImg} alt="Self Care" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={diabetesImg} alt="Diabetes" />
        </div>
    );
}