import React from 'react';
import { Layout } from 'antd';
// import Navbar from './navbar/navbar';
// import Footer from './footer/footer';

const MainLayout = (props) => {
  return (
    <div>
      <Layout>
        {/* <Navbar
          path={props.children.props.match.path}
          name={props.children.type.name}
        /> */}
        <main>
          {/* {childern} */}
          {props.children}
        </main>
        {/* <Footer /> */}
      </Layout>
    </div>
  );
};

export default MainLayout;
