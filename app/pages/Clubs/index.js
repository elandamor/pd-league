/**
 * Clubs
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// Containers
import GetClubs from '../../containers/GetClubs';
import GetClubByKey from '../../containers/GetClubByKey';

const Club = (props) => {
  const { match } = props;

  return (
    <div>
      <GetClubByKey target={match.params.club} />
    </div>
  );
};

Club.propTypes = {
  match: PropTypes.object,
};

// eslint-disable-next-line react/prefer-stateless-function
class Clubs extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Clubs - pdLeague</title>
          <meta name="description" content="Find profiles and information about current and all-time pdLeague clubs, on the official website of the pdLeague." />
        </Helmet>
        <GetClubs />
        <Switch>
          <Route
            exact
            path="/clubs/:club"
            render={(props) => (
              <Club {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

Clubs.propTypes = {

};

export default Clubs;
