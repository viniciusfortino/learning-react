import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'
import logoImg from '../../assets/logo.svg'

import { handleRegister } from '../../services/register'

export default function Register() {
    return (
        <div className="register-container">
            <section>
                <img src={logoImg} alt="dds" />
                <h1>Cadastro</h1>
                <p>algum texto generico</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input placeholder="nome da ONG" />
                <input type="email" placeholder="e-mail" />
                <input placeholder="whatsapp" />
                <div className="input-group">
                    <input placeholder="cidade" />
                    <input placeholder="UF" style={{ width: 80 }} />
                </div>
                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}