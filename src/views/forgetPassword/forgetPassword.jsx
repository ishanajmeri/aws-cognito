import React, { Component } from 'react';
import { Card, Row, Typography, Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

class ForgetPassword extends Component {
  state = { error: '' };

  clearErrorState = () => {
    this.setState({ error: '' });
  };
  handleFinish = () => {
    this.clearErrorState();
    try {
      //AWS calling
      this.props.history.push('/fpverification');
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({ error: err });
    }
  };
  render() {
    return (
      <Card style={{ paddingLeft: '5%', paddingTop: '5%' }}>
        <Row style={{ paddingBottom: '1%' }}>
          <Typography.Text underline strong style={{ fontSize: '22px' }}>
            Forgot your password?
          </Typography.Text>
        </Row>
        <Row style={{ paddingBottom: '1%' }}>
          <Typography.Text type="secondary">
            Please enter the email address associated with your account and
            we'll email you a password reset link.
          </Typography.Text>
        </Row>
        <Row>
          <Form onFinish={this.handleFinish}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="E-mail" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    );
  }
}

export default ForgetPassword;
