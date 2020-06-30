import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Row, Col, Layout, Button } from 'antd';

class Navbar extends Component {
  state = { current: true, path: this.props.path };
  handleChange = (e) => {
    console.log(e, 'handleChange');
    this.setState({ current: false, path: e });
  };
  render() {
    return (
      <Layout.Header>
        <Row>
          <Col xs={19} md={19} lg={19}>
            <NavLink to="/">
              <img src="favicon.ico" alt="" style={{ height: '30%' }} />
            </NavLink>
            <Button type="link">
              <NavLink to="/">Home</NavLink>
            </Button>
          </Col>
          <Col xs={5} md={5} lg={5}>
            <Button type="primary">
              <Link to="/register">Register</Link>
            </Button>
            <Button type="link">
              <Link to="/login">Login</Link>
            </Button>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default Navbar;
