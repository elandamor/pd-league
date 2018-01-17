/**
 *
 * GetClubs
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
// Queries
import getClubsGQL from '../../graphql/queries/getClubs.gql';
// Styled-Components
import Wrapper from './styles';

const GetClubs = ({ data }) => {
  const hasClubs = data && data.clubs && data.clubs.length > 0;

  let clubs = null;

  if (hasClubs) {
    clubs = data.clubs.map((club) => { // eslint-disable-line arrow-body-style
      return (
        <li key={club.id}>
          <Link
            to={{
              pathname: `/clubs/${club.key}`,
            }}
          >{club.name}</Link>
        </li>
      );
    });
  }

  return (
    <Wrapper>{clubs}</Wrapper>
  );
};

GetClubs.propTypes = {
  data: PropTypes.object,
};

const mapClubsToProps = ({ data }) => {
  if (data.error) {
    return {
      error: data.error,
      loading: data.loading,
    };
  }

  if (!data.clubs) {
    return {
      loading: data.loading,
    };
  }

  const { clubs } = data;

  return {
    data: {
      clubs,
    },
    loading: data.loading,
  };
};

export default compose(
  graphql(getClubsGQL, {
    props: mapClubsToProps,
  }),
)(GetClubs);
