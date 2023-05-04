import React, { useContext, useState } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
import { postAcces } from '../../../API/Api';
import { UserContext } from '../../../Context/userContext';
// import { UseAuth } from '../../../Hoc/UseAuth';

export default function Admin() {
  const navigate = useNavigate();
  const { loginHandler} = useContext(UserContext);
  const [coin, setCoin] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCoin((coin) => ({
      ...coin,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const loginUser=await postAcces(coin)



    if (loginUser.isAdmin) {
      console.log(loginHandler)

      loginHandler()
      navigate('/admin/list')
    }
  };

  
  return (
    <>
      <h1 className='admin'>Admin panel</h1>
      <div className='admin-container'>
        <form className='admin-form' onSubmit={handleSubmit}>
          <div className='admin-item'>
            <label htmlFor='login'>Login</label>
            <input type='email' name='email' value={coin.login} onChange={handleInputChange} />
          </div>
          <div className='admin-item'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={coin.password} onChange={handleInputChange} />
          </div>

          {/* {error && <div className='admin-error'>{error}</div>} */}

          <button className='blue-button' type='submit'>
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}








// if (!coin.email || !coin.password) {
//   setError('Please enter email and password');
//   return;
// }
// if (coin.email !== access.email || coin.password !== access.password) {
//   setError('Incorrect login or password');
//   return;
// }