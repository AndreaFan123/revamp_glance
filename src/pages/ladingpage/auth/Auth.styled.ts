import styled from 'styled-components';
import {
  COLORS,
  FONTSIZE,
  FONTWEIGHT,
  MARGIN,
  PADDING,
} from '../../../style/styles';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.section`
  max-width: 800px;
  height: 650px;
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
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 5rem;
  }

  p {
    font-size: ${FONTSIZE.fontS};
    color: ${COLORS.superLightBrandColor};
    margin-bottom: ${MARGIN.marginM};
  }
`;

const HomeLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: white;
  border: 2px solid ${COLORS.superLightBrandColor};
  padding: 10px 20px;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: ${COLORS.textDarkcolor};
    transition: all 0.3s ease-in-out;
    background-color: ${COLORS.superLightBrandColor};
  }
  &:active {
    color: red;
  }
`;

const InputRight = styled.div`
  height: 70%;
  flex: 1;
  padding: ${PADDING.paddingXL};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;

  h3 {
    color: ${COLORS.mainBrandColor};
    font-size: ${FONTSIZE.fontM};
    margin-top: ${MARGIN.marginM};
    padding-bottom: ${PADDING.paddingS};
    position: relative;

    span {
      background: hsla(179, 100%, 83%, 1);

      background: linear-gradient(
        90deg,
        hsla(179, 100%, 83%, 1) 0%,
        hsla(238, 100%, 84%, 1) 100%
      );

      background: -moz-linear-gradient(
        90deg,
        hsla(179, 100%, 83%, 1) 0%,
        hsla(238, 100%, 84%, 1) 100%
      );

      background: -webkit-linear-gradient(
        90deg,
        hsla(179, 100%, 83%, 1) 0%,
        hsla(238, 100%, 84%, 1) 100%
      );

      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#AAFFFE", endColorstr="#AEB1FF", GradientType=1 );
    }
  }

  label {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    color: ${COLORS.mainBrandColor};

    input {
      padding: 5px 5px;
      border: none;
      border-bottom: 1px solid ${COLORS.mainBrandColor};
      margin-bottom: 10px;
      position: relative;
    }
  }

  div {
    position: absolute;
  }

  button {
    background-color: ${COLORS.mainBrandColor};
    color: ${COLORS.textLightColor};
    margin-top: ${MARGIN.marginS};

    :hover,
    :active {
      transition: all 0.3s ease-in-out;
      color: ${COLORS.mainBrandColor};
      background-color: ${COLORS.superLightBrandColor};
    }
  }

  span {
    color: ${COLORS.mainBrandColor};

    a {
      text-align: center;
      color: ${COLORS.mainBrandColor};
      text-transform: uppercase;
      font-weight: ${FONTWEIGHT.fontBolder};

      :hover {
        border-bottom: 2px solid hsl(339, 56%, 50%);
      }
    }
  }
`;

const EyeIconPassword = styled.div`
  position: absolute;
  bottom: 335px;
  right: 40px;
  cursor: pointer;
`;

const EyeIconConfirmPassword = styled.div`
  position: absolute;
  bottom: 265px;
  right: 40px;
  cursor: pointer;
`;

export {
  LoginWrapper,
  GreetingLeft,
  InputRight,
  EyeIconPassword,
  EyeIconConfirmPassword,
  HomeLink,
};