import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img className= "logoImg" src={logoImg} alt="Self Care" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas com Diabetes.</p>

                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>


                <form>
                    <input placeholder="Nome do Grupo" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder= "WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width:80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}