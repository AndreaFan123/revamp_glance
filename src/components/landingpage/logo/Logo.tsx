import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FONTSIZE, FONTWEIGHT, COLORS } from '../../../style/styles';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-size: ${FONTSIZE.fontXL};
    font-weight: ${FONTWEIGHT.fontBold};
    color: ${COLORS.textDarkcolor};
  }
`;

export const Logo = (): JSX.Element => {
  return (
    <LogoWrapper>
      <Link to="/">Glance</Link>
    </LogoWrapper>
  );
};
