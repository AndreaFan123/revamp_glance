import styled from 'styled-components';
import { COLORS, FONTSIZE, MARGIN, PADDING } from '../../../style/styles';

const LoginWrapper = styled.section`
  max-width: 800px;
  height: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 0 5px 5px 0;
  /* border: 1px solid ${COLORS.mainBrandColor}; */
  box-shadow: 11px 3px 46px -9px rgba(77, 74, 74, 0.75);
  -webkit-box-shadow: 11px 3px 46px -9px rgba(77, 74, 74, 0.75);
  -moz-box-shadow: 11px 3px 46px -9px rgba(77, 74, 74, 0.75);

  form {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const GreetingLeft = styled.div`
  flex: 1;
  background-color: ${COLORS.mainBrandColor};
  color: ${COLORS.textLightColor};
  padding: ${PADDING.paddingXL};
  border-radius: 5px 0 0 5px;

  h2 {
    font-size: 5rem;
  }

  p {
    font-size: ${FONTSIZE.fontS};
    color: ${COLORS.superLightBrandColor};
  }

  button {
    margin-top: ${MARGIN.marginM};
    background-color: ${COLORS.textLightColor};

    :hover,
    :active {
      background-color: ${COLORS.superLightBrandColor};
    }
  }
`;

const InputRight = styled.div`
  height: 50%;
  flex: 1;
  padding: ${PADDING.paddingXL};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;

  h3 {
    font-size: ${FONTSIZE.fontM};
    padding-top: ${PADDING.paddingXXL};
    padding-bottom: ${PADDING.paddingS};
  }

  label {
  }

  input {
    padding: 5px 5px;
    border: none;
    border-bottom: 1px solid ${COLORS.mainBrandColor};
  }

  button {
    background-color: ${COLORS.mainBrandColor};
    color: ${COLORS.textLightColor};
    margin-top: ${MARGIN.marginS};

    :hover,
    :active {
      color: ${COLORS.mainBrandColor};
      background-color: ${COLORS.superLightBrandColor};
    }
  }
`;

export { LoginWrapper, GreetingLeft, InputRight };