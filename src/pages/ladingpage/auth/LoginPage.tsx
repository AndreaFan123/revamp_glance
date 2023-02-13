import React from 'react';
import formImg from '../../../assets/pages/loginForm.jpeg';
import { LoginWrapper, ImageContainer } from './Auth.styled';
import { useTranslation } from 'react-i18next';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation(['auth']);
  return (
    <LoginWrapper>
      <form>
        <h3>{t('login')}</h3>
        <div>
          <label htmlFor="email">{t('email')}</label>
          <input name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">{t('password')}</label>
          <input name="email" id="email" />
        </div>
      </form>
    </LoginWrapper>
  );
};
