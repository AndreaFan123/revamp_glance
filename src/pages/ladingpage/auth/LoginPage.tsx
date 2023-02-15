import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginWrapper, GreetingLeft, InputRight } from './Auth.styled';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation(['auth']);
  return (
    <LoginWrapper>
      <form>
        <GreetingLeft>
          <h2>Glance</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button type="button">{t('signup')}</button>
        </GreetingLeft>
        <InputRight>
          <h3>Helo, welcome back!</h3>
          <label htmlFor="email">{t('email')}</label>
          <input name="email" id="email" />
          <label htmlFor="password">{t('password')}</label>
          <input name="email" id="email" />
          <button>Submit</button>
        </InputRight>
      </form>
    </LoginWrapper>
  );
};
