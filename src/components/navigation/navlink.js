// dependencies
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styles
import { color, media, nav } from '../../styles/theme';

const NavLink = styled(Link)`
  color: ${color.white};
  display: block;
  font-size: 1.125rem; /* 18px */
  line-height: ${nav.topbarHeight};

  &:hover {
    color: #fff;
  }

  ${media.medium} {
    font-size: 1rem;
  }
`;

export default NavLink;