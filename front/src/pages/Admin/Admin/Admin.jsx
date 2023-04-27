import React, { useState } from 'react';
import "./Admin.css";
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate=useNavigate()
  const [coin, setCoin] = useState([])
  
  const handleInputChange = (event) => {
       const { name, value } = event.target;
       setCoin((coin) => ({
         ...coin,
         [name]: value,
       }));
     };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/admin/list")
  
    console.log(`Login: ${coin.login}, Password: ${coin.password}`);
  };

  return (
    <>
      <h1 className='admin'>Admin panel</h1>
      <div className="admin-container">
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="admin-item">
            <label htmlFor="login">Login</label>
            <input type="text" name="login" value={coin.login} onChange={handleInputChange} />
          </div>
          <div className="admin-item">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={coin.password} onChange={handleInputChange} />
          </div>

          <button className='blue-button' type="submit">Sign in</button>

        </form>
      </div>
    </>
  );
}
