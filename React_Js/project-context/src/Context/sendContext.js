import React from 'react'

const SendContext = React.createContext();

const SendProvider = SendContext.Provider;
const SendConsumer = SendContext.Consumer;

export{
    SendProvider,
    SendConsumer
}