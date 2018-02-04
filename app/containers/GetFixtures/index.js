/**
 *
 * GetFixtures
 *
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
// Components
// import Avatar from '../../components/Avatar';
// import Table from '../../components/Table';
// Queries
import getFixturesGQL from '../../graphql/queries/getFixtures.gql';
// Styled-Components
import Wrapper from './styles';

const GetFixtures = ({ onLoad, fixtures }) => {
  if (!fixtures) {
    return null;
  }

  if (fixtures) {
    onLoad();
  }

  return (
    <Wrapper>
      {
        fixtures.map(({ matchDate, matchList }) => (
          <div key={matchDate} data-competition-matches-list={matchDate}>
            <time className="date" dateTime={matchDate} >
              <strong>{matchDate}</strong>
            </time>
            <ul className="matchList">
              {
                matchList.map((match, idx) => (
                  <li
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${idx}-${match.kickoff}`}
                    data-home={match.teams[0].shortName}
                    data-away={match.teams[1].shortName}
                    data-venue={`${match.ground.name}, ${match.ground.city}`}
                  >
                    <span
                      className="teams"
                    >
                      <span className="team">
                        <span className="name">
                          {match.teams[0].shortName}
                        </span>
                        <span className="badge"></span>
                      </span>
                      <time dateTime={match.kickoff}>{match.kickoff}</time>
                      <span className="team">
                        <span className="badge"></span>
                        <span className="name">
                          {match.teams[1].shortName}
                        </span>
                      </span>
                    </span>
                    <span
                      className="stadium"
                    >
                      {`${match.ground.name}, ${match.ground.city}`}
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </Wrapper>
  );
};

GetFixtures.propTypes = {
  onLoad: PropTypes.func,
  fixtures: PropTypes.array,
};

const mapFixturesToProps = ({ data }) => {
  if (data.error) {
    return {
      loading: data.loading,
    };
  }

  if (!data.fixtures) {
    return {
      loading: data.loading,
    };
  }

  const { fixtures } = data;

  return {
    loading: data.loading,
    fixtures,
  };
};

/* eslint-disable function-paren-newline */
export default compose(
  graphql(getFixturesGQL, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: mapFixturesToProps,
  })
)(GetFixtures);
/* eslint-enable function-paren-newline */
