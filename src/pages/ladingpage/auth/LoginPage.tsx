import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  LoginWrapper,
  GreetingLeft,
  InputRight,
  EyeIconPassword,
} from './Auth.styled';
import { FiEyeOff } from 'react-icons/fi';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation(['auth']);
  return (
    <LoginWrapper>
      <form>
        <GreetingLeft>
          <h2>Glance</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, book.
          </p>
        </GreetingLeft>
        <InputRight>
          <h3>
            Helo, <span>Welcome Back!</span>
          </h3>
          <label htmlFor="email">
            {t('email')}
            <input name="email" id="email" />
          </label>
          <label htmlFor="password">
            {t('password')}
            <input name="password" id="password" />
            <EyeIconPassword>
              <FiEyeOff />
            </EyeIconPassword>
          </label>
          <button>Submit</button>
          <span>
            Not a member? <Link to="/signup">{t('signup')}</Link> right now!
          </span>
        </InputRight>
      </form>
    </LoginWrapper>
  );
};
