import React from 'react';
import { createContext, useReducer } from 'react';
import roomsReducer from '../reducers/roomsReducer';
import { initialState } from '../reducers/roomsReducer';

export const RoomsContext= createContext();




const RoomsContextProvider = (props) => {
    const [roominfo,dispatch]= useReducer(roomsReducer,initialState);

    return (
        <RoomsContext.Provider value={{roominfo,dispatch}}>
            {props.children}
        </RoomsContext.Provider>
    )
};


export default RoomsContextProvider;
