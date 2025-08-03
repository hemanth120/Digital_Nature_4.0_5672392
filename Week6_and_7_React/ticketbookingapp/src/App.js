import React, { useState } from 'react';
import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="App" >
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
                <LogoutButton onClick={handleLogoutClick} />
            ) : (
                <LoginButton onClick={handleLoginClick} />
            )}
        </div>
    );
}

export default App;