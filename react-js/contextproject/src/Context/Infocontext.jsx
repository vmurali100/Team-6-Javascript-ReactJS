import React from 'react'
 
const Infocontext=React.createContext();

const InfoProvider = Infocontext.Provider;
const InfoConsumer = Infocontext.Consumer;

export {
    InfoProvider,
    InfoConsumer
}