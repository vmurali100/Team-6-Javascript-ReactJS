import React from 'react'

const Datacontext=React.createContext();

const DataProvider=Datacontext.Provider;
const DataConsumer=Datacontext.Consumer;

export {
    DataProvider,
    DataConsumer
}

