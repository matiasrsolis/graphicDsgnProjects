import React from 'react';

export default function Footer(props){
    return( 
        <footer>
            <p>Copyright {props.year}. Web desarrollada por {props.name}.</p>
        </footer>
    )
}