import React, { FormEvent, useState } from 'react';
import Button from '../components/Button';
import TextForm from '../components/TextForm';
import { t } from '../i18n';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="loginContainer">
      <div className="loginRoot">
        <div className="loginForm">
          <TextForm
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeHolder={t('username')}
          />
          <TextForm
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeHolder={t('password')}
          />
        </div>
        <div className="loginButton">
          <Button
            onClick={() => {
              console.log('basıldı');
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
