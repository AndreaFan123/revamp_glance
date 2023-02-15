import { NavWrapper, NavRight, HeaderContainer } from './Landing.styled';
import { LandingPageNav, Logo, SelectLan } from '../../components/landingpage';
import { FiSun } from 'react-icons/fi';

export const LandingPage = (): JSX.Element => {
  return (
    <>
      <NavWrapper>
        <Logo />
        <NavRight>
          <SelectLan />
          <FiSun color="black" fontSize="1.5em" />
          <LandingPageNav />
        </NavRight>
      </NavWrapper>
      <HeaderContainer>
        <h1>Glance</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, book.
        </p>
      </HeaderContainer>
    </>
  );
};
