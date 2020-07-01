import React from 'react';
import { Card, Row, Typography } from 'antd';

const ChangePasswordConfirm = () => {
  return (
    <Card style={{ paddingLeft: '5%' }}>
      <Row style={{ paddingBottom: '1%' }}>
        <Typography.Text underline strong style={{ fontSize: '22px' }}>
          Change Password
        </Typography.Text>
      </Row>
      <Row>
        <Typography.Text type="secondary">
          Your password has been successfully updated!
        </Typography.Text>
      </Row>
    </Card>
  );
};

export default ChangePasswordConfirm;
