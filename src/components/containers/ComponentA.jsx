import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponentB from '../pure/componentB';

const ComponentA = () => {

    const defaultContacto = new Contacto('Josue', 'Martinez', 'josueMartinez@gmail.com', false)

    return (
        <div>
            <div>
                <h1>Info del Contacto</h1>
            </div>
            <ComponentB contacto={defaultContacto}></ComponentB>
        </div>
    );
}

export default ComponentA;
