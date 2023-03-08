import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='auth-container'>
      <form>
        <h2>Register</h2>
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
            type='text'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.password)}
          />
        </div>
      </form>
    </div>
  );
};
export default Register;
