/* /pages/register.js */

import React, { useState, useContext } from 'react';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { registerUser } from '../components/auth';
import AppContext from '../components/context';

const Register = () => {
  const [data, setData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cellphone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const appContext = useContext(AppContext);
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: 'red' }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>First Name:</Label>
                    <Input
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, firstName: e.target.value })
                      }
                      value={data.firstName}
                      type="text"
                      name="firstName"
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Last Name:</Label>
                    <Input
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                      }
                      value={data.lastName}
                      type="text"
                      name="lastName"
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Cellphone:</Label>
                    <Input
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, cellphone: e.target.value })
                      }
                      value={data.cellphone}
                      type="text"
                      name="cellphone"
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      value={data.email}
                      type="email"
                      name="email"
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 25 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      value={data.password}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                    <small>
                      Password should be at least 6 characters long.
                    </small>
                  </FormGroup>
                  <div style={{ marginBottom: 20 }}>
                    By continuing, you agree with our <a>Terms of Use</a>.
                  </div>
                  <FormGroup>
                    <Button
                      style={{
                        width: '100%',
                        maxWidth: '300px',
                        display: 'block',
                        margin: 'auto',
                      }}
                      color="dark"
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        registerUser(
                          data.firstName,
                          data.lastName,
                          data.cellphone,
                          data.email,
                          data.password
                        )
                          .then((res) => {
                            // set authed user in global context object
                            appContext.setUser(res.data.user);
                            setLoading(false);
                            console.log(
                              `registered user: ${JSON.stringify(res.data)}`
                            );
                            alert(`Welcome, ${data.firstName}! Your account at Rocket Food Delivery was created successfully!`)
                          })
                          .catch((error) => {
                            console.log(`error in register: ${error}`);
                            //setError(error.response.data);
                            setLoading(false);
                          });
                      }}
                    >
                      {loading ? 'Loading..' : 'Submit'}
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 60px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 20px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  );
};
export default Register;
