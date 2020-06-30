import React, { Component } from 'react';
import { Card, Row, Typography } from 'antd';
class Welcome extends Component {
  render() {
    return (
      <Card style={{ paddingLeft: '5%' }}>
        <Row style={{ paddingBottom: '1%' }}>
          <Typography.Text underline strong style={{ fontSize: '22px' }}>
            Welcome!
          </Typography.Text>
        </Row>
        <Row>
          <Typography.Text type="secondary">
            We've sent you a email. Please click on the confirmation link to
            verify your account.
          </Typography.Text>
        </Row>
      </Card>
    );
  }
}

export default Welcome;
