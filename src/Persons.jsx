import React, { Component } from 'react';
import personService from './services/personService';

class Persons extends Component {
    state = {  
        values : []
    };

    async componentDidMount() {
        const response = await personService.getPersons();
        console.log("Persons", response);
    }

    render() { 
        return ( 
            <div>
                Mi segundo Componente (Personas)
            </div>
        );
    }
}
 
export default Persons;