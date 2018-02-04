/**
 *
 * GetClubByAbbr
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { compose, graphql } from 'react-apollo';
// Components
import Avatar from '../../components/Avatar';
// Queries
import getClubByAbbrGQL from '../../graphql/queries/getClubByAbbr.gql';
// Styled-Components
import Wrapper, { Masthead, Squad, Player } from './styles';

class GetClubByAbbr extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { club, match } = this.props;

    return (
      <Wrapper>
        <Helmet>
          <title>{`${club && club.name} News, Fixtures and Results - Premier League`}</title>
          <meta name="description" content={`For the latest news on ${club && club.name}, including scores, fixtures, results, form guide & league position, visit the official website of the Zimbabwe Premier League.`} />
        </Helmet>
        <Masthead className="-overview" role="banner">
          <div className="c-inner">
            <div className="c-info-container">
              <Avatar className="c-badge" src={club && club.badge} />
              <div className="c-info">
                <h2 className="c-title">{club && club.name}</h2>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink activeClassName="-active" to={`${match.url}/overview`}>Overview</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="-active" to={`${match.url}/squad`}>Squad</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="-active" to={`${match.url}/fixtures`}>Fixtures</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="-active" to={`${match.url}/results`}>Results</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="-active" to={`${match.url}/stats`}>Stats</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="-active" to={`${match.url}/stadium`}>Stadium</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </Masthead>
        <Switch>
          <Route
            exact
            path="/clubs/:abbr/squad"
            render={() => (
              <Squad>
                {
                  club && club.squad && club.squad.map((player) => (
                    <Player key={player.number}>
                      <header className="c-header">
                        <Avatar className="c-image" src={player.avatar} />
                        <div className="c-info">
                          <span className="a-number">{player.number}</span>
                          <h4 className="a-name">{player.name}</h4>
                          <span className="a-position">{player.position}</span>
                        </div>
                      </header>
                    </Player>
                  ))
                }
              </Squad>
            )}
          />
        </Switch>
      </Wrapper>
    );
  }
}

GetClubByAbbr.propTypes = {
  club: PropTypes.object,
  match: PropTypes.object,
};

const mapClubToProps = ({ data }) => {
  if (data.error) {
    return {
      error: data.error,
      loading: data.loading,
    };
  }

  if (!data.club) {
    return {
      loading: data.loading,
    };
  }

  const { club } = data;

  return {
    club,
    loading: data.loading,
  };
};
/* eslint-disable function-paren-newline */
export default compose(
  graphql(getClubByAbbrGQL, {
    options: ({ match: { params: { abbr } } }) => ({
      variables: {
        abbr,
      },
      fetchPolicy: 'cache-and-network',
      skip: !abbr,
    }),
    props: mapClubToProps,
  }),
)(GetClubByAbbr);
/* eslint-enable function-paren-newline */
