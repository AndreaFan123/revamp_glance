import React from 'react';
import formImg from '../../../assets/pages/loginForm.jpeg';
import {
  Wrapper,
  LoginWrapper,
  GreetingContainer,
  FormInputContainer,
  InputsContainer,
} from './Auth.styled';
import { useTranslation } from 'react-i18next';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation(['auth']);
  return (
    <Wrapper>
      <LoginWrapper>
        <GreetingContainer>
          <h2>Glance</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button type="buttton">{t('signup')}</button>
        </GreetingContainer>
        <FormInputContainer>
          <InputsContainer>
            <h3>Helo, welcome back</h3>
            <div>
              <label htmlFor="email">{t('email')}</label>
              <input name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">{t('password')}</label>
              <input name="email" id="email" />
            </div>

            <button>Submit</button>
          </InputsContainer>
        </FormInputContainer>
      </LoginWrapper>
    </Wrapper>
  );
};
