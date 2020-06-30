import React, { Component } from 'react';
import { Card, Form, Row, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {};
  render() {
    return (
      <Card>
        <Row justify="center">
          <Form
            name="normal_login"
            style={{ maxWidth: '500px' }}
            // onFinish={onFinish}
          >
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
              <Link style={{ float: 'right' }} to="">
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
              Or <Link to="">register now!</Link>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    );
  }
}

export default Login;
