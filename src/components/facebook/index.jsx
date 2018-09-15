import React from 'react';
import Proptypes from 'prop-types';
import { Button } from 'react-bootstrap';
import loadFBSDK from 'facebook-sdk-promise';
import './style.css';

class Facebook extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loginStatus: false,
      displayName: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  componentDidMount() {
    loadFBSDK().then((FB) => {
      FB.init({
        appId: '247799449260996',
        status: true,
        xfbml: true,
        version: 'v3.1',
      });
    });
    this.updateLoginStatus();
  }

  updateLoginStatus() {
    loadFBSDK().then((FB) => {
      FB.getLoginStatus((response) => {
        if (response.authResponse) {
          FB.api('/me', (user) => {
            this.setState({
              loginStatus: true,
              displayName: user.name,
            });
          });
        }
      });
    });
  }

  handleLogin() {
    loadFBSDK().then((FB) => {
      FB.login((response) => {
        if (response.authResponse) {
          FB.api('/me', (user) => {
            this.setState({
              loginStatus: true,
              displayName: user.name,
            });
          });
        }
      });
    });
  }

  handleLogout() {
    loadFBSDK().then((FB) => {
      FB.logout(() => {
        this.setState({
          loginStatus: false,
          displayName: undefined,
        });
      });
    });
  }

  render() {
    const { loginStatus, displayName } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        {
          !loginStatus
          && <Button className="fb-login" bsStyle="primary" onClick={this.handleLogin}>Facebook Login</Button>
        }

        {
          loginStatus
          && (
            <React.Fragment>
              <p>
                { `Hi ${displayName}` }
                <Button className="fb-logout" bsStyle="primary" onClick={this.handleLogout}>Logout</Button>
              </p>
              { children }
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

Facebook.propTypes = {
  children: Proptypes.element.isRequired,
};

export default Facebook;
