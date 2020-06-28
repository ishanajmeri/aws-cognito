import React, { Component } from 'react';
import { Descriptions, Card } from 'antd';
class Home extends Component {
  state = {};
  render() {
    return (
      <Card style={{ padding: '2%' }}>
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">Ishan ajmeri</Descriptions.Item>
          <Descriptions.Item label="Telephone">922xxxxx55</Descriptions.Item>
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
