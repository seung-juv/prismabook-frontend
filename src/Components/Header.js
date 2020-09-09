import React from "react";
import { Logo, Home, Watch, Groups, Gamming } from "./Icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { withRouter, Link } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";

const Container = styled.header`
  display: flex;
  padding: 0 1rem;
  background-color: ${props => props.theme.bgColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem 0;
`;

const SearchForm = styled.form`
  position: relative;
  height: 4rem;
  margin-left: .7rem;
`;

const EInput = styled(Input)`
  width: 24rem;
  height: 4rem;
  padding: 1rem 1rem 1rem 3.9rem;
  border-radius: 4rem;
  background-color: ${props => props.theme.lightGreyColor};
  border: 0;
  font-size: 1.5rem;
`;

const SearchIcon = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  top: 0;
  left: 2rem;
  bottom: 0;
  margin: auto 0;
  opacity: .5;
`;

const HeaderCenter = styled.div`flex: 1;`;

const NavigatorWrapper = styled.ul`
  display: flex;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
`;

const Navigator = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 13rem;
  min-width: 5rem;
  position: relative;
  padding: .4rem;
  &.active {
    a {
      fill: ${props => props.theme.blueColor};
    }
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: .3rem;
      position: absolute;
      bottom: 0;
      background-color: ${props => props.theme.blueColor};
    }
  }
  &:not(.active) {
    a:hover {
      transition-duration: 0s;
      background-color: ${props => props.theme.lightGreyColor};
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: ${props => props.theme.borderRadius};
    transition: .25s background-color ease;
    fill: ${props => props.theme.greyColor};
  }
`;

const NavigationInfo = styled.span`display: none;`;

const HeaderRight = styled.div`flex: 1;`;

const Header = ({ history }) => {
  const search = useInput();
  return (
    <Container>
      <HeaderLeft>
        <Link to="/">
          <Logo />
        </Link>
        <SearchForm>
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </SearchIcon>
          <EInput value={search.value} onChange={search.onChange} placeholder="Search Facebook" />
        </SearchForm>
      </HeaderLeft>
      <HeaderCenter>
        <NavigatorWrapper>
          <Navigator className={history.location.pathname === "/" && "active"}>
            <Link to="/">
              <Home />
              <NavigationInfo>Home</NavigationInfo>
            </Link>
          </Navigator>
          <Navigator className={history.location.pathname === "/watch" && "active"}>
            <Link to="/watch">
              <Watch />
              <NavigationInfo>Watch</NavigationInfo>
            </Link>
          </Navigator>
          <Navigator className={history.location.pathname === "/groups" && "active"}>
            <Link to="/groups">
              <Groups />
              <NavigationInfo>Groups</NavigationInfo>
            </Link>
          </Navigator>
          <Navigator className={history.location.pathname === "/gamming" && "active"}>
            <Link to="/gamming">
              <Gamming />
              <NavigationInfo>Gamming</NavigationInfo>
            </Link>
          </Navigator>
        </NavigatorWrapper>
      </HeaderCenter>
      <HeaderRight />
    </Container>
  );
};

export default withRouter(Header);