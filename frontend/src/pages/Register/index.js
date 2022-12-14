import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';

import logoImg from '../../assets/logo.png'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsApp,
            city,
            uf,
        };

        try {
            const res = await api.post('/ongs', data)

            alert(`Seu ID de acesso: ${res.data.id}`);
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
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


                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome do Grupo"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        placeholder= "WhatsApp" 
                        value={whatsApp}
                        onChange={e => setWhatsApp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)} 
                        />
                        <input 
                            placeholder="UF"
                            style={{ width:80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)} 
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}