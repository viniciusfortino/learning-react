import React from 'react';

import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewIncident() {

    return (
        <div className="new-incident-container">
            <section>
                <img src={logoImg} alt="dds" />
                <h1>Cadastrar noo caso</h1>
                <p>algum texto generico</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                </Link>
            </section>
            <form>
                <input placeholder="Título do caso" />
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em Reais" />

                <button className="button" type="submit">
                    Cancelar
                </button>
                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}