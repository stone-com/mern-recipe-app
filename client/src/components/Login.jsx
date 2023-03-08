import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // initiate cookie with name 'access_token'
  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      });
      console.log(response.data);
      // Set cookie and local storage to store user id and jwt token
      setCookies('access_token', response.data.token);
      window.localStorage.setItem('userID', response.data._id);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='auth-container'>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default Login;
