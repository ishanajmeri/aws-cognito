import React, { Component } from 'react';
import Routes from './routes/Routes';
import './App.css';
import { Auth } from 'aws-amplify';
class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
  };

  setAuthStatus = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      // console.log(error, 'app.js error');
    }
    this.setState({ isAuthenticating: false });
  }
  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };
    return (
      <React.Fragment>
        {!this.state.isAuthenticating && <Routes auth={authProps} />}
      </React.Fragment>
    );
  }
}

export default App;
