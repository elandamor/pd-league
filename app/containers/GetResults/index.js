/**
 *
 * GetResults
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
import getResultsGQL from '../../graphql/queries/getResults.gql';
// Styled-Components
import Wrapper from './styles';

const GetResults = ({ onLoad, results }) => {
  if (!results) {
    return null;
  }

  if (results) {
    onLoad();
  }

  return (
    <Wrapper>
      {
        results.map(({ matchDate, matchList }) => (
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
                      <span className="score">
                        {match.score[0].count}
                        <span className="separator">-</span>
                        {match.score[1].count}
                      </span>
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

GetResults.propTypes = {
  onLoad: PropTypes.func,
  results: PropTypes.array,
};

const mapResultsToProps = ({ data }) => {
  if (data.error) {
    return {
      loading: data.loading,
    };
  }

  if (!data.results) {
    return {
      loading: data.loading,
    };
  }

  const { results } = data;

  return {
    loading: data.loading,
    results,
  };
};

/* eslint-disable function-paren-newline */
export default compose(
  graphql(getResultsGQL, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: mapResultsToProps,
  })
)(GetResults);
/* eslint-enable function-paren-newline */
