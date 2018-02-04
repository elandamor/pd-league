/**
 *
 * GetStandings
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
// Components
import Avatar from '../../components/Avatar';
// import Table from '../../components/Table';
// Queries
import getStandingsGQL from '../../graphql/queries/getStandings.gql';
// Styled-Components
import Table from './styles';

const GetStandings = ({ onLoad, standings }) => {
  if (standings) {
    onLoad();
  }

  const columns = [{
    id: 'position',
    className: 'position',
    Header: 'Position',
    accessor: (d) => (
      <span className="number">
        {d.position.current}
        {
          d.position.current === d.position.previous
          && (
            <span className="a-movement"></span>
          )
        }
        {
          d.position.current < d.position.previous
          && (
            <span className="a-movement -up"></span>
          )
        }
        {
          d.position.current > d.position.previous
          && (
            <span className="a-movement -down"></span>
          )
        }
        <span className="c-tooltip -left" role="tooltip">
          <span className="c-tooltip__content">Previous Position
            <strong>{d.position.previous}</strong>
          </span>
        </span>
      </span>
    ),
  }, {
    id: 'club',
    className: 'club',
    headerClassName: 'club',
    Header: 'Club',
    accessor: (d) => (
      <Link to={`/clubs/${d.club.abbr}/overview`}>
        <Avatar className="c-badge" src={d.club.badge} />
        {d.club.name}
      </Link>
    ),
  }, {
    Header: 'Played',
    accessor: 'played',
  }, {
    Header: 'Won',
    accessor: 'won',
  }, {
    Header: 'Drawn',
    accessor: 'drawn',
  }, {
    Header: 'Lost',
    accessor: 'lost',
  }, {
    Header: () => <abbr title="Goals For">GF</abbr>,
    accessor: (d) => d.goals.for,
  }, {
    Header: () => <abbr title="Goals Against">GA</abbr>,
    accessor: (d) => d.goals.against,
  }, {
    Header: () => <abbr title="Goal Difference">GD</abbr>,
    accessor: (d) => d.goals.difference,
  }, {
    id: 'points',
    Header: 'Points',
    accessor: (d) => <strong>{d.points}</strong>,
  }, {
    id: 'form',
    className: 'form',
    headerClassName: 'form',
    Header: 'Form',
    accessor: ({ form }) => (
      form.map((match) => {
        let cls;
        let title;

        switch (match.result) {
          case 'W':
            cls = ' won';
            title = 'Won';
            break;
          case 'D':
            cls = ' draw';
            title = 'Drawn';
            break;
          case 'L':
            cls = ' lose';
            title = 'Lost';
            break;
          default:
            cls = '';
            title = '';
            break;
        }
        return (
          <li key={match.id} className={`c-tooltip__wrapper ${cls}`}>
            <abbr title={title}>{match.result}</abbr>
          </li>
        );
      })
    ),
  }, {
    id: 'nextMatch',
    Header: 'Next',
    accessor: ({ nextMatch }) => ( // eslint-disable-line react/prop-types
      <div className="nextMatch" role="tooltip">
        <Avatar src={nextMatch.against && nextMatch.against.badge} />
      </div>
    ),
  }];

  return (
    <Table
      data={standings}
      columns={columns}
    />
  );
};

GetStandings.propTypes = {
  onLoad: PropTypes.func,
  standings: PropTypes.array,
};

const mapStandingsToProps = ({ data }) => {
  if (data.error) {
    return {
      loading: data.loading,
    };
  }

  if (!data.standings) {
    return {
      loading: data.loading,
    };
  }

  const { standings } = data;

  return {
    loading: data.loading,
    standings,
  };
};

/* eslint-disable function-paren-newline */
export default compose(
  graphql(getStandingsGQL, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: mapStandingsToProps,
  })
)(GetStandings);
/* eslint-enable function-paren-newline */
