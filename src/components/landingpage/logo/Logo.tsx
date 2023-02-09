import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Glance</Link>
      <span></span>
    </div>
  );
};
