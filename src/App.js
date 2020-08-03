import React from 'react';
import './App.css';
import CounterGroup from "./Componets/CounterGroup";
import {createStore} from "redux";
import changeValue from "./Reducers/reducer";
import Provider from "react-redux/lib/components/Provider";
import CounterApp from "./containers/CounterContainers";

const store = createStore(changeValue)

function App() {
    return (
        <Provider store={store}>
            <CounterApp/>
        </Provider>
    );
}

export default App
