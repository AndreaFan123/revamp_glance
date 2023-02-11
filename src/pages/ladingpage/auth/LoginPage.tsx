import React from 'react';
import formImg from '../../../assets/pages/loginForm.jpeg';
import { LoginWrapper, ImageContainer } from './Auth.styled';

export const LoginPage = (): JSX.Element => {
  return (
    <LoginWrapper>
      <form>
        <h3>Login</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="email" id="email" />
        </div>
      </form>
    </LoginWrapper>
  );
};
