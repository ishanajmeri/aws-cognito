import React, { Component } from 'react';
import { Card, Row, Typography, Form, Input, Button, Alert } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Auth } from 'aws-amplify';

class FPVerification extends Component {
  state = { error: '' };
  clearErrorState = () => {
    this.setState({
      error: '',
    });
  };
  handleFinish = async (value) => {
    this.clearErrorState();
    console.log(value, 'value ');
    try {
      //AWS cognito calling
      await Auth.forgotPasswordSubmit(
        value.email,
        value.verificationcode,
        value.password
      );
      this.props.history.push('/changepasswordconfirmation');
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({ error: err });
    }
  };
  render() {
    return (
      <Card style={{ paddingLeft: '5%' }}>
        <Row style={{ paddingBottom: '1%' }}>
          <Typography.Text underline strong style={{ fontSize: '22px' }}>
            Set new password
          </Typography.Text>
        </Row>
        <Row style={{ paddingBottom: '1%' }}>
          <Typography.Text type="secondary">
            Please enter the verification code sent to your email address below,
            your email address and a new password.
          </Typography.Text>
        </Row>
        <Row>
          <Form onFinish={this.handleFinish}>
            {this.state.error !== '' ? (
              <Form.Item>
                <Alert message={this.state.error} type="error" showIcon />
              </Form.Item>
            ) : null}
            <Form.Item
              name="verificationcode"
              rules={[
                {
                  required: true,
                  message: 'Please input your verification code!',
                },
              ]}
            >
              <Input placeholder="Enter verification code" />
            </Form.Item>
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
              <Input prefix={<MailOutlined />} placeholder="Enter E-mail" />
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
                placeholder="New Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    );
  }
}

export default FPVerification;
