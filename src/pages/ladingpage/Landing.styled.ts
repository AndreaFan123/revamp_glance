import styled from 'styled-components';
import { COLORS, FONTSIZE, FONTWEIGHT, MARGIN } from '../../style/styles';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
`;

const HeaderContainer = styled.header`
  width: 100%;
  margin-top: ${MARGIN.marginXXL};
  text-align: center;
  h1 {
    font-size: 10rem;
  }

  p {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    font-size: ${FONTSIZE.fontL};
    color: ${COLORS.lightBrandColor};
    line-height: 1;
  }
`;

export { NavWrapper, NavRight, HeaderContainer };
