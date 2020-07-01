import React, { Component } from 'react';
import { Descriptions, Card } from 'antd';
class Home extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <Card style={{ padding: '2%' }}>
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">
            {user === null ? user.username : '-'}
          </Descriptions.Item>
          <Descriptions.Item label="Telephone">9xxxxxxx55</Descriptions.Item>
          <Descriptions.Item label="Live">Surat,Gujarat</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Surat,Gujarat.
          </Descriptions.Item>
        </Descriptions>
      </Card>
    );
  }
}

export default Home;
