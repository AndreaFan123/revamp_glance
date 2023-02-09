import { Link } from 'react-router-dom';

export const LandingPageNav = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
