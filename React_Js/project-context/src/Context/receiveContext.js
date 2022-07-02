import React from 'react'
const ReceiveContext=React.createContext();

const ReceiveProvider=ReceiveContext.Provider;
const ReceiveConsumer=ReceiveContext.Consumer;

export {
    ReceiveProvider,
    ReceiveConsumer
}