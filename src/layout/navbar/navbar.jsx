import { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Row, Col, Layout } from 'antd';
// import { AntCloudOutlined } from '@ant-design/icons';

class Navbar extends Component {
  state = { current: true, path: this.props.path };
  handleChange = (e) => {
    console.log(e, 'handleChange');
    this.setState({ current: false, path: e });
  };
  render() {
    return (
      // <Layout.Header style={{ backgroundColor: 'white' }}>
      //   <Row>
      //     <Col span={2}>
      //       <NavLink to="/">
      //         <AntCloudOutlined style={{ fontSize: '15px', padding: '10%' }} />
      //         Physics
      //       </NavLink>
      //     </Col>
      //   </Row>
      // </Layout.Header>
      null
    );
  }
}

export default Navbar;
