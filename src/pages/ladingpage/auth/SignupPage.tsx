import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  LoginWrapper,
  GreetingLeft,
  InputRight,
  EyeIconPassword,
  EyeIconConfirmPassword,
} from './Auth.styled';
import { FiEyeOff } from 'react-icons/fi';

export const SignupPage = (): JSX.Element => {
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
            Helo, <span>welcome On Board!</span>
          </h3>
          <label htmlFor="displayname">
            {t('display name')}
            <input name="displayname" id="displayname" />
          </label>
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
          <label htmlFor="confrimpassword">
            {t('confirm password')}
            <input name="confrimpassword" id="confrimpassword" />
            <EyeIconConfirmPassword>
              <FiEyeOff />
            </EyeIconConfirmPassword>
          </label>
          <button>Submit</button>
          <span>
            Are you a member? <Link to="/login">{t('login')}</Link> right now!
          </span>
        </InputRight>
      </form>
    </LoginWrapper>
  );
};
