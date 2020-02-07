import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { getToken } from '../utils/api';

const NavDiv = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  margin-left: 15%;
`;
const LogoDiv = styled.div`
  display: flex;
`;
const BottonsDiv = styled.div`
  margin-top: 5%;
`;

export default function NavBar(props) {
  const signedIn = getToken();
  const id = localStorage.getItem('id');
  return (
    <div>
      <NavDiv>
        <LogoDiv>
          <img className="navImage" src={logo} alt="logo" />
          <h4>
            Help us Save <br></br> the Animals!
          </h4>
        </LogoDiv>
        <BottonsDiv>
          {' '}
          {/* &nbsp Give spaces between buttons */}
          <Button color="secondary">
            <Link to="/" className="NavButtons">
              Home
            </Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button color="secondary">
            <Link to="/campaigns" className="NavButtons">
              Campaigns
            </Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          {signedIn && (
            <Button color="secondary">
              <Link to={`/supporter/${id}`} className="NavButtons">
                Supporter Dashboard
              </Link>
            </Button>
          )}
          <Button color="secondary">
            <Link to="/OrganizationDashboard" className="NavButtons">
              Organizations
            </Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button color="secondary">
            <Link to="/OrganizationDashboardTwo" className="NavButtons">
              Organizations Two
            </Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          {!signedIn && (
            <Button color="secondary">
              <Link to="/login" className="NavButtons">
                Login
              </Link>
            </Button>
          )}
          &nbsp;&nbsp;&nbsp;
          {!signedIn && (
            <Button color="info">
              <Link to="/signUp" className="NavButtons">
                Sign Up
              </Link>
            </Button>
          )}
          {signedIn && (
            <Button color="info">
              <Link to="/logout" className="NavButtons">
                LogOut
              </Link>
            </Button>
          )}
          &nbsp;&nbsp;&nbsp;
        </BottonsDiv>
      </NavDiv>
      <hr></hr>
    </div>
  );
}
