import React, { Component } from 'react';
import { Card, Form, Row, Input, Button, Alert, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

class Login extends Component {
  state = {
    error: '',
  };
  clearErrorState = () => {
    this.setState({
      error: '',
    });
  };
  handleFinish = async (value) => {
    this.clearErrorState();
    const { username, password } = value;
    try {
      //AWS cognito calling
      const user = await Auth.signIn(username, password);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      console.log(user);
      this.props.history.push('/');
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({ error: err });
    }
  };
  render() {
    return (
      <Card>
        <Row justify="center" style={{ paddingBottom: '1%' }}>
          <Typography.Text underline strong style={{ fontSize: '22px' }}>
            Login
          </Typography.Text>
        </Row>
        <Row justify="center">
          <Form
            name="normal_login"
            style={{ maxWidth: '500px' }}
            onFinish={this.handleFinish}
          >
            {this.state.error !== '' ? (
              <Form.Item>
                <Alert message={this.state.error} type="error" showIcon />
              </Form.Item>
            ) : null}
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Link style={{ float: 'right' }} to="/forgotpassword">
                Forgot password?
              </Link>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Log in
              </Button>
              Or <Link to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    );
  }
}

export default Login;
