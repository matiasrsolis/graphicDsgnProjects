import React from 'react';

export default function Card(props){
    return( 
        <div>
            <figure> <img src={props.portada} alt={props.name}/> </figure>
            <div>
                <h3>{props.name}</h3>
                <ul>
                    <li>{props.comitente}</li>
                    <li>{props.area}</li>                
                 </ul>
            </div>
        </div>
    )
}