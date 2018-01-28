/**
 * Clubs
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// Components
// import Icon from '../../components/Icon';
// import { ICONS } from '../../components/Icon/constants';
// Containers
import GetClubs from '../../containers/GetClubs/Loadable';
import GetClubByAbbr from '../../containers/GetClubByAbbr/Loadable';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Clubs extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Premier League Clubs - Fixtures, Results, Stats & Profiles</title>
          <meta name="description" content="Find profiles and information about current and all-time pdLeague clubs, on the official website of the pdLeague." />
        </Helmet>
        <Switch>
          <Route
            exact
            path="/clubs"
            render={(props) => (
              <GetClubs {...props} />
            )}
          />
          <Route
            path="/clubs/:abbr"
            render={(props) => (
              <GetClubByAbbr {...props} />
            )}
          />
        </Switch>
      </Wrapper>
    );
  }
}

Clubs.propTypes = {

};

export default Clubs;
