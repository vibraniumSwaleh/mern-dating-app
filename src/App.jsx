import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
    return(<div className='app'>
        <Header />
        <DatingCards />
        <SwipeButtons />
    </div>);
};

export default App;