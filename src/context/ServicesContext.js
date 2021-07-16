import React from 'react'
import { createContext, useReducer } from 'react';
import { initialState } from '../reducers/servicesReducer';
import servicesReducer from '../reducers/servicesReducer';

export const ServiceContext= createContext();


const ServicesContextProvider = (props) => {

    const [services,dispatch]= useReducer(servicesReducer,initialState);


    return (
        <ServiceContext.Provider value={{services,dispatch}}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServicesContextProvider;
