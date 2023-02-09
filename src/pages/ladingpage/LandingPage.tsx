import styled from 'styled-components';
import { Logo } from '../../components/landingpage/logo/Logo';
import { LandingPageNav } from '../../components/landingpage/nav/LandingPageNav';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const LandingPage = (): JSX.Element => {
  return (
    <NavWrapper>
      <Logo />
      <LandingPageNav />
    </NavWrapper>
  );
};
