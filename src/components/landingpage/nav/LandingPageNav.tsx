import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONTSIZE, FONTWEIGHT, PADDING } from '../../../style/styles';

const LinkLogin = styled.div`
  a {
    color: ${COLORS.textDarkcolor};
    font-weight: ${FONTWEIGHT.fontBold};
    font-size: ${FONTSIZE.fontM};
    border: 2px solid ${COLORS.textDarkcolor};
    padding: 0.4rem 1.3rem;
    border-radius: 3px;
  }
`;

export const LandingPageNav = (): JSX.Element => {
  return (
    <LinkLogin>
      <Link to="/login">Login</Link>
    </LinkLogin>
  );
};
