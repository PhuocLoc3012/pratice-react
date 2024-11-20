import React from 'react';
import PropTypes, { object } from 'prop-types';
import RegisterForm from '../RegisterForm';
import { ostring } from 'zod';

import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';


Register.propTypes = {
  
};

function Register(props) {

    const dispatch = useDispatch()



    const handleSubmit = async (values) => {

        try {
            //auto set username = email để thỏa cái api mẫu
            values.username = values.email

            console.log('Form submit: ', values);
            const action = register(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)   
            console.log("new user: ", user);
        } catch (error){
            console.log('Failed to register: ', error);
            
        }
        
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;