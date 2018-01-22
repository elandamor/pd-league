/**
 *
 * GetClubs
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
// Components
import Avatar from '../../components/Avatar';
import Image from '../../components/Image';
// Queries
import getClubsGQL from '../../graphql/queries/getClubs.gql';
// Styled-Components
import Wrapper, { Club } from './styles';

const GetClubs = ({ data }) => {
  const hasClubs = data && data.clubs && data.clubs.length > 0;

  let clubs = null;

  if (hasClubs) {
    clubs = data.clubs.map((club) => { // eslint-disable-line arrow-body-style
      return (
        <Club key={club.id}>
          <Link
            to={{
              pathname: `/clubs/${club.key}`,
            }}
          >
            <div className="c-image">
              <Image src="" alt="" />
            </div>
            <Avatar className="c-badge" src={club.badge} />
            <div className="c-info">
              <h3 className="a-name">{club.name}</h3>
              <small className="a-stadium">{club.stadium}</small>
              <button className="c-bttn"></button>
            </div>
          </Link>
        </Club>
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

/* eslint-disable function-paren-newline */
export default compose(
  graphql(getClubsGQL, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: mapClubsToProps,
  }),
)(GetClubs);
/* eslint-enable function-paren-newline */
