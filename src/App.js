import React from 'react';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';
import Card from './components/card.jsx';
import Cards from './components/cards.jsx';
import data from './data.js';
import {copy} from './data.js';
import {proyectos} from './data.js';
import {portfolio} from './data.js';

function App() {
    return(
        <div>
            <Header />
            <Main />
            

            {/* <Card 
                name={proyectos.laReservaApp.name}
                comitente={proyectos.laReservaApp.comitente}
                area={proyectos.laReservaApp.area}
                portada={proyectos.laReservaApp.portada}
            /> */}
            
            <div>
                <Cards 
                    proyectos={portfolio}
                /> 
                
            </div>
            
            <Footer 
                year={copy.year}
                name={copy.name}
            />
        </div>
        
    )
}

export default App;