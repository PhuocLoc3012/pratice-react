import React from 'react';
import PropTypes, { object } from 'prop-types';
import RegisterForm from '../RegisterForm';
import { ostring } from 'zod';

Register.propTypes = {
  
};

function Register(props) {

    const handleSubmit = (values) => {
        console.log('Form submit: ', values);   
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;