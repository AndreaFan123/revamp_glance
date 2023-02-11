import styled from 'styled-components';
import { COLORS } from '../../../style/styles';

const LoginWrapper = styled.section`
  width: 100%;
  max-width: 40%;
  display: flex;
  justify-content: center;
  border: 1px solid ${COLORS.textDarkcolor};
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-right: 1px solid ${COLORS.textDarkcolor};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { LoginWrapper, ImageContainer };
