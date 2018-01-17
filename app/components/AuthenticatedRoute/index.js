/**
*
* AuthenticatedRoute
*
*/

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import styled from 'styled-components';

class AuthenticatedRoute extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      component: Component, // eslint-disable-line react/prop-types
      authenticating, authenticatedUser, location, onSetAppBarTitle, ...rest // eslint-disable-line react/prop-types
    } = this.props;
    const hasAuthenticatedUser = Boolean(authenticatedUser && authenticatedUser.id);

    // let loc = location;

    // if (!loc.state) {
    //   loc = Object.assign({}, loc, {
    //     ...loc,
    //     state: {
    //       action: hasAuthenticatedUser ? 'logout' : 'authenticate',
    //       isAuthenticated: hasAuthenticatedUser,
    //     },
    //   });
    // }

    // const passAuthentication = loc.state.isAuthenticated;
    const isAuthenticated = hasAuthenticatedUser;
    // console.log({ passAuthentication });

    // const doLogout = loc.state.action === 'logout';

    return !authenticating ? (
      <Route
        {...rest}
        render={(props) => (
          isAuthenticated ? (
            <Component
              authenticatedUser={authenticatedUser}
              onSetAppBarTitle={onSetAppBarTitle}
              {...props}
            />
          ) : (
            <Redirect
              to={{
                pathname: '/account/signin',
                state: { from: props.location },
              }}
            />
          )
        )}
      />
    ) : <div>Authenticating...</div>;
  }
}

AuthenticatedRoute.propTypes = {

};

export default AuthenticatedRoute;
