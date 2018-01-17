/**
 * Account
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
// Components
import Signin from './signin';
import Signup from './signup';

// eslint-disable-next-line react/prefer-stateless-function
class Account extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Account - pdLeague</title>
          <meta name="description" content="pdLeague account" />
        </Helmet>
        <Switch>
          <Route
            exact
            path="/account/signin"
            render={(props) => (
              <Signin {...props} />
            )}
          />
          <Route
            exact
            path="/account/signup"
            render={(props) => (
              <Signup {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

Account.propTypes = {

};

export default Account;
