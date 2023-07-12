import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponentB = ({contacto}) => {
    return (
        <div>
            <h2>
                Name: { contacto.name }
            </h2>
            <h3>
                Last Name: { contacto.lastName }
            </h3>
            <h4>
                Email: { contacto.email }
            </h4>
            <h5>
                Contacto: { contacto.conectado ? 'Contacto en Linea':'Contacto no Disponible'}
            </h5>
        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
