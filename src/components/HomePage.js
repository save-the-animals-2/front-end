import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import Carousel from './Carousel';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const SuperSignUpDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  margin-top: 10%;
  margin-left: 14%;
`;
const FooterDiv = styled.footer`
  background-color: #d3d3d3;
  margin-top: 10%;
  border-radius: 10px;
`;

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to KEY !</h1>
      <Carousel />
      <SuperSignUpDiv>
        <div>
          <Card className="joseScard1">
            <CardImg
              src="https://images.unsplash.com/photo-1414445092210-ee1a2da44ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>Supporters:</strong>
              </CardTitle>
              <CardSubtitle>
                <strong>Features:</strong>
              </CardSubtitle>
              <CardText>
                Supporters can view all posted campaigns, and filter by
                location, species, and issues as well as choose their favorite
                ones!
              </CardText>
              <Button className="joseSbuttonCard" color="info">
                <Link to="/signUp" className="NavButtons">
                  Sign Up
                </Link>
              </Button>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="joseScard2">
            <CardImg
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3734&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>Organizations:</strong>
              </CardTitle>
              <CardSubtitle>
                <strong>Features:</strong>
              </CardSubtitle>
              <CardText>
                Sign up to list, edit, and update your campaigns to reach to our
                supporters!.
              </CardText>
              <Button className="joseSbuttonCard" color="info">
                <Link to="/signUp" className="NavButtons">
                  Sign Up
                </Link>
              </Button>
            </CardBody>
          </Card>
        </div>
      </SuperSignUpDiv>
      <FooterDiv>
        <p>
          <strong>KEY</strong>
        </p>
        <p>
          <strong>Address:</strong>
        </p>
        <p>
          11 SE. Wentworth St.<br></br>Wonderland,Forever 01156
        </p>
      </FooterDiv>
    </div>
  );
}

//Welcome Page talks about sad burnt up animals
