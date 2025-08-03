import React from 'react';

function LoginButton({ onClick }) {
    return (
        <div>
            <button onClick={onClick}>Login</button>
        </div>
    );
}

export default LoginButton;