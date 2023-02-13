import styled from 'styled-components';
import { COLORS, FONTSIZE, PADDING } from '../../../style/styles';

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.form`
  width: 100%;
  max-width: 50%;
  height: 500px;
  display: flex;
  /* border: 1px solid ${COLORS.textDarkcolor}; */
  background-color: ${COLORS.mainBrandColor};
  border-radius: 3px;
  box-shadow: 10px 14px 38px 0px rgba(151, 149, 149, 0.73);
  -webkit-box-shadow: 10px 14px 38px 0px rgba(151, 149, 149, 0.73);
  -moz-box-shadow: 10px 14px 38px 0px rgba(151, 149, 149, 0.73);
`;

const GreetingContainer = styled.div`
  width: 40%;
  padding: ${PADDING.paddingXXL};

  h2 {
    color: ${COLORS.textLightColor};
    font-size: 4rem;
  }

  p {
    color: ${COLORS.superLightBrandColor};
    padding-bottom: ${PADDING.paddingS};
  }
`;

const FormInputContainer = styled.div`
  width: 50%;
  background-color: ${COLORS.white};
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-left: ${PADDING.paddingS};
  padding-right: ${PADDING.paddingL};
  gap: 1rem;

  input {
    width: 96%;
    display: block;
    padding: 5px;
    border: none;
    border-bottom: 1px solid ${COLORS.mainBrandColor};
  }
`;

export {
  Wrapper,
  LoginWrapper,
  GreetingContainer,
  FormInputContainer,
  InputsContainer,
};
