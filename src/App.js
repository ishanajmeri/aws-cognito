import React, { Component } from 'react';
import Routes from './routes/Routes';
import './App.css';
class App extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  setAuthStatus = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };
    return (
      <React.Fragment>
        <Routes auth={authProps} />
      </React.Fragment>
    );
  }
}

export default App;
