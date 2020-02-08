import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  CardFooter,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  CardGroup,
} from 'reactstrap';
import api from '../utils/api';
import styled from 'styled-components';

const SDiv = styled.div`
  margin: 10px 2.5px;
  border: 2px solid #33d2ff;
  margin-left: 100px;
  background: white;

  // Don't want pointer over whole card no more
  // &:hover {
  //   cursor: pointer;
  // }
`;

const IDiv = styled.div`
  text-align: center;
  margin: 1%;
`;

function OrganizationDashboardCard(props) {
  console.log(props.data.org_name);
  const [toggle, setToggle] = useState(true);

  //states to handle edit form starts here
  const [colorToEdit, setColorToEdit] = useState(props.data);
  const [editing, setEditing] = useState(false);
  //states to handle edit form ENDS here
  console.log(colorToEdit);
  const loggedOn = api();

  const toggleOpen = () => {
    setToggle(!toggle);
  };

  const deleteItem = e => {
    e.preventDefault();
    api()
      .delete(`/api/campaigns/${props.data.id}`)
      .then(res => {
        console.log('Item was deleted');
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const saveEdit = e => {
    e.preventDefault();
    window.location.reload();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    api()
      .put(`/api/campaigns/${props.data.id}`, colorToEdit)
      .then(res => {
        console.log('coming from saveEdit', res);
      })
      .catch(err => {
        console.log('error from ColorList', err);
      });
  };

  return (
    <div>
      <SDiv className={toggle ? 'itemCard' : ''}>
        <CardGroup className="Styling-CardGroups">
          <CardBody>
            <strong>{`Campaign Name:`}</strong>
            <CardHeader className="CardHeader-Items">
              <CardTitle className="H1-CardItemCard">
                {`"${props.data.title}"`}
              </CardTitle>
            </CardHeader>
            <div>
              <CardImg
                className="card-image"
                src={props.data.photo_url}
                alt={''}
              />
              <hr className="Card-hr"></hr>
              <IDiv>
                <CardText>
                  <strong>{`Location: `}</strong>
                  {props.data.location}
                  <br />
                  {''}
                </CardText>
                <CardText>
                  <strong>{`Organization Name: `}</strong>
                  {props.data.org_name}
                  <br />
                  <strong>{`Species: `}</strong>
                  <br></br>
                  {props.data.species} <br></br>
                  <strong>{`Description: `}</strong>
                  <br></br>
                  {props.data.description}
                  <br></br>
                  <strong>{`Goal: `}</strong>
                  <br></br>
                  {props.data.funding_goal}
                </CardText>
                {toggle ? (
                  <Button
                    onClick={toggleOpen}
                    style={{ background: '#07A1C9' }}
                  >
                    Delete or Update
                  </Button>
                ) : (
                  <Button
                    onClick={toggleOpen}
                    style={{ background: '#C0392B' }}
                  >
                    Close Card
                  </Button>
                )}
              </IDiv>
            </div>
            <IDiv className={toggle ? 'hidden' : 'show'}>
              <CardText>
                <br />
                {''}
              </CardText>

              <CardFooter className="Footer-Buttons">
                {/* SaveEdits form stats here */}
                {loggedOn && (
                  <form onSubmit={saveEdit}>
                    <legend>Edit Campaign:</legend>
                    <label>
                      Title:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            title: e.target.value,
                          })
                        }
                        placeholder="Enter Title Here:"
                        value={colorToEdit.title}
                      />
                    </label>
                    <label>
                      Description:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            description: e.target.value,
                          })
                        }
                        value={colorToEdit.description}
                      />
                    </label>
                    <label>
                      Location:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            location: e.target.value,
                          })
                        }
                        value={colorToEdit.location}
                      />
                    </label>
                    <label>
                      Species:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            species: e.target.value,
                          })
                        }
                        value={colorToEdit.species}
                      />
                    </label>
                    <label>
                      Deadline:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            deadline: e.target.value,
                          })
                        }
                        value={colorToEdit.deadline}
                      />
                    </label>
                    <label>
                      Urgency level(select 1 -10):
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            urgency_level: e.target.value,
                          })
                        }
                        value={colorToEdit.urgency_level}
                      />
                    </label>
                    <label>
                      Funding goal(Enter number):
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            funding_goal: e.target.value,
                          })
                        }
                        value={colorToEdit.funding_goal}
                      />
                    </label>
                    <div className="button-row">
                      <Button type="submit" className="SaveEditButton">
                        Save Edit
                      </Button>
                      <Button
                        onClick={`Cancel edit${() => {
                          return <div className="hidden">cansel</div>;
                        }}`}
                      >
                        Cancel Edit
                      </Button>
                    </div>
                  </form>
                )}
                <div>
                  {loggedOn && (
                    <Button onClick={deleteItem} className="Items-Buttons">
                      Delete Campaign
                    </Button>
                  )}
                </div>
              </CardFooter>
            </IDiv>
          </CardBody>
        </CardGroup>
      </SDiv>
    </div>
  );
}

//I just set it up this way in case i needed it to use it
function mapStateToProps(state) {
  return {
    none: '',
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationDashboardCard);
