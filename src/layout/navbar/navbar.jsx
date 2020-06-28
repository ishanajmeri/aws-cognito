import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Layout, Button } from 'antd';

class Navbar extends Component {
  state = { current: true, path: this.props.path };
  handleChange = (e) => {
    console.log(e, 'handleChange');
    this.setState({ current: false, path: e });
  };
  render() {
    return (
      <Layout.Header style={{ backgroundColor: 'white' }}>
        <Row>
          <Col span={19}>
            <img src="favicon.ico" alt="" style={{ height: '30%' }} />
            <Button type="link">
              <NavLink to="/">Home</NavLink>
            </Button>
          </Col>
          <Col span={5}>
            <Button type="link">Register</Button>
            <Button type="link">Login</Button>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default Navbar;
