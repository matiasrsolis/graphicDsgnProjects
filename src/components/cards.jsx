import React from 'react';
import { render } from 'react-dom';
import { proyectos } from '../data.js';
import Card from './card.jsx';

export default function Cards(props) {
    return(
        <div>
            {props.proyectos.map (proyecto => {
                return <Card 
                    name = {proyecto.name}
                    comitente = {proyecto.comitente}
                    area = {proyecto.area}
                    portada = {proyecto.portada}
                />
            })}
        </div>
    )
}