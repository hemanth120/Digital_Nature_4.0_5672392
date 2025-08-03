import React from 'react';

function LogoutButton({ onClick }) {
    return (
        <div>
            <button onClick={onClick} >Logout</button>
        </div>
    );
}

export default LogoutButton;