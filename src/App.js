import React from 'react';
import './App.css';
import CounterApp from "./containers/CounterContainers";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CounterApp/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App
