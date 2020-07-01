import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Row, Col, Layout, Button, Typography } from 'antd';
import { Auth } from 'aws-amplify';

class Navbar extends Component {
  handleLogout = async (event) => {
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    // console.log(this.props.auth);
    const { auth } = this.props;
    return (
      <Layout.Header>
        <Row>
          <Col xs={9} sm={17} md={18} lg={19}>
            <NavLink to="/">
              <img src="favicon.ico" alt="" style={{ height: '30%' }} />
            </NavLink>
            <Button type="link">
              <NavLink to="/">Home</NavLink>
            </Button>
          </Col>
          <Col xs={15} sm={7} md={6} lg={5}>
            {auth.isAuthenticated && auth.user ? (
              <>
                <Typography.Text style={{ paddingRight: '5px' }}>
                  hello ishan
                </Typography.Text>
                <Button type="primary" onClick={this.handleLogout}>
                  <Link to="/">Log out</Link>
                </Button>
              </>
            ) : (
              <>
                <Button type="primary">
                  <Link to="/register">Register</Link>
                </Button>
                <Button type="link">
                  <Link to="/login">Login</Link>
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default Navbar;
