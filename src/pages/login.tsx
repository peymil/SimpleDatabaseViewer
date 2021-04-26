import React, { FormEvent, useState } from 'react';
import TextForm from '../components/TextForm';
import Button from '../components/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div
      style={{
        flexDirection: 'column',
        flex: 1,
        display: 'flex',
        alignContent: 'center',
      }}
    >
      <TextForm
        value={username}
        style={{ height: 10 }}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextForm
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button>ssadf</Button>
    </div>
  );
};
export default Login;
