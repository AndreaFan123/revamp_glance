import styled from 'styled-components';
import { LandingPageNav, Logo, SelectLan } from '../../components/landingpage';
import { Sun } from 'feather-icons-react';

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

export const LandingPage = (): JSX.Element => {
  return (
    <NavWrapper>
      <Logo />
      <NavRight>
        <SelectLan />
        <Sun />
        <LandingPageNav />
      </NavRight>
    </NavWrapper>
  );
};
