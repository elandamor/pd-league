/**
 *
 * GetClubByKey
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
// Queries
import getClubByKeyGQL from '../../graphql/queries/getClubByKey.gql';

const GetClubByKey = ({ club }) => { // eslint-disable-line arrow-body-style
  return (
    <div>
      <h2>{club && club.name}</h2>
      <h3>Squad</h3>
      <ul>
        {
          club && club.squad && club.squad.map((player) => (
            <li key={player.number}>
              <img src={player.avatar} alt={player.name} />
              <a>{player.number}</a>
              <div>
                <a>{player.name}</a>
                <small>{player.position}</small>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

GetClubByKey.propTypes = {
  club: PropTypes.object,
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

export default compose(
  graphql(getClubByKeyGQL, {
    options: ({ target }) => ({
      variables: {
        key: target,
      },
      fetchPolicy: 'cache-and-network',
      skip: !target,
    }),
    props: mapClubToProps,
  }),
)(GetClubByKey);
