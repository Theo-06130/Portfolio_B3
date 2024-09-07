import React from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import ScrollHandler from './components/ScrollHandler';
import Zone1 from './components/Zone1.jsx';
import Zone2 from './components/Zone2.jsx';
import Zone3 from './components/Zone3.jsx';

function App() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Théo Cerkownik</title>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
            </Helmet>
            <ScrollHandler>
                <Zone1 />
                <Zone2 />
                <Zone3 />
            </ScrollHandler>
        </>
    );
}

export default App;
