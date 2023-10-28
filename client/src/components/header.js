import React from 'react';
import { colors, widths } from '../styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../assets/space_cat_logo.png';

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
              <Title>
                <h3>Catstronaut</h3>
                <div>Kitty space academy</div>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        <CertificationText>Apollo Graph Developer - Associate Certification</CertificationText>
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `solid 1px ${colors.pink.light}`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: `${widths.regularPageWidth}px`,
  flex: 1,
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  color: colors.accent,
  alignItems: 'center',
  ':hover': {
    color: colors.pink.dark,
  },
});

const LogoContainer = styled.div({ display: 'flex', alignSelf: 'center' });

const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8,
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
  },
});

const CertificationText = styled.div({
  marginLeft: 'auto', 
  fontSize: '1.1em',
  color: colors.accent, 
  cursor: 'pointer',
});
