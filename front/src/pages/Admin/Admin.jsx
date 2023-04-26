import React, { useState } from 'react';
import "./Admin.css";
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/admin/list")
    
    console.log(`Login: ${login}, Password: ${password}`);
  };

  return (
    <>
      <h1 className='admin'>Admin panel</h1>
      <div className="admin-container">
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="admin-item">
            <label htmlFor="login">Login</label>
            <input type="text" id="login" value={login} onChange={handleLoginChange} />
          </div>
          <div className="admin-item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>

          <button className='blue-button' type="submit">Sign in</button>

        </form>
      </div>
    </>
  );
}
