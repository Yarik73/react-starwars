import React from "react";


const {
    Provider : SwapiServiceProvaider,
    Consumer : SwapiServiceConsumer
} = React.createContext();

export {
    SwapiServiceConsumer,
    SwapiServiceProvaider
};