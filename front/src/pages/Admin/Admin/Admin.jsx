import React, { useState } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
// import { UseAuth } from '../../../Hoc/UseAuth';

export default function Admin() {
  const navigate = useNavigate();
  // const location=useLocation()
  // const{signin}=UseAuth()

  // const fromPage=location.state?.from?.pathname ||"/admin"
  const access = {
    login: 'admin',
    password: 'admin',
  };
  const [coin, setCoin] = useState({ login: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCoin((coin) => ({
      ...coin,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!coin.login || !coin.password) {
      setError('Please enter login and password');
      return;
    }
    if (coin.login !== access.login || coin.password !== access.password) {
      setError('Incorrect login or password');
      return;
    }
    console.log("kecid")
      // const form=event.target
      // const user=form.login.value
      // signin(user, ()=>navigate(fromPage,{replace:true}))
    navigate('/admin/list' );    //1
  };

  return (
    <>
      <h1 className='admin'>Admin panel</h1>
      <div className='admin-container'>
        <form className='admin-form' onSubmit={handleSubmit}>
          <div className='admin-item'>
            <label htmlFor='login'>Login</label>
            <input type='text' name='login' value={coin.login} onChange={handleInputChange} />
          </div>
          <div className='admin-item'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={coin.password} onChange={handleInputChange} />
          </div>

          {error && <div className='admin-error'>{error}</div>}

          <button className='blue-button' type='submit'>
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
