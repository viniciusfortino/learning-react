import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ondId = '';
    const ongName = '';
    /*

    Primeiro parametro é  a função a ser executada e o segundo são as parametros que,
    quando atualizados irão fazer com que a função seja disparada, caso esteja vazio, ou seja, [], 
    a função a ser chamada será disparada no carregar da página.
    TOda variavel usada dentro do primeiro aprametro do useEffect, é interessante colocar como dependencia
    já que uma vez que ela mude, faraá novamente a chamada
    useEffect(() => {}, []);
*/
    useEffect(() => {
        api.get('profile',{
            headers:{
                Authorization: onpagehide,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
    }, [ondId]);

    function handleDleteIncident(id){

    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="be the hero" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#02041" />
                </button>
            </header>

            <h1> Casos cadastrados</h1>

            <ul>
                {incidents.map(indicent => (
                    <li key={indicent.id}>
                        <strong>CASO:</strong>
                        <p>{indicent.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{indicent.description}</p>

                        <strong>VALOR:</strong>
                        <p>{
                            Intl
                                .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                .format(indicent.value)
                        }</p>

                        {/* 
                        ao criar um botação que vai chamar uma função é interessante passar
                        a função que será chamada dentro de uma função, pois caso contrario, ela será
                        chamada assim que o componente renderizar, já que o componente estará esperand
                        o retorno desta                        
                        */}
                        <button type="button"
                        onClick={() => handleDleteIncident(indicent.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}