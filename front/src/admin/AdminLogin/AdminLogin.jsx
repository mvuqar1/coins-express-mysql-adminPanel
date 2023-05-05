import React, { useContext, useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import { postAcces } from '../../API/Api';
import { UserContext } from '../../Context/userContext';

export default function Admin() {
  const navigate = useNavigate();
  const { loginHandler } = useContext(UserContext);
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState()

  const handleInputChange = (event) => {

    // const formData = new FormData(e.target);      //1_ci cur
    // const payload = {
    //     email: formData.get('email'),
    //     password: formData.get('password')
    // }

    const { name, value } = event.target;            //2_ci cur
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault()

    const loginUser = await postAcces(user)

    if (loginUser.isAdmin) {
      loginHandler()
      navigate('/admin/list')
    }
    else {
      setError(loginUser.authError)
    }
  };


  return (
    <>
      <h1 className='admin'>Admin panel</h1>
      <div className='admin-container'>
        <form className='admin-form' onSubmit={handleSubmit}>
          <div className='admin-item'>
            <label htmlFor='login'>Login</label>
            <input type='email' name='email' value={user.login} onChange={handleInputChange} />
          </div>
          <div className='admin-item'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={user.password} onChange={handleInputChange} />
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