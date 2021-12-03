import React from "react";
//Create a new Context
const personContext = React.createContext();

const PersonProvider=personContext.Provider;

const PersonConsumer=personContext.Consumer;

export {PersonProvider,PersonConsumer};