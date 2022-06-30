import React from 'react'

const Usercontext=React.createContext();

const UserProvider = Usercontext.Provider;
const UserConsumer = Usercontext.Consumer;

export {
    UserProvider,
    UserConsumer
}