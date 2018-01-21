/**
 * Tables
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// Components
import Avatar from '../../components/Avatar';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
// Styled-Components
import Wrapper, { Masthead, Dropdown, Filters, Table } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Tables extends React.Component {
  render() {
    const data = [{
      position: {
        current: 10,
        previous: 10,
      },
      club: {
        badge: '',
        key: 'mancity',
        name: 'Manchester City',
      },
      played: 24,
      won: 21,
      drawn: 2,
      lost: 1,
      goals: {
        for: 70,
        against: 18,
        // eslint-disable-next-line no-constant-condition
        difference: 70 - 18 > 0 ? `+${70 - 18}` : `-${70 - 18}`,
      },
      points: 65,
      form: [
        {
          id: '22577',
          kickoff: 'Wednesday 27 December 2017',
          home: false,
          against: {
            badge: '',
            name: 'Newcastle United',
            abbr: 'NEW',
          },
          result: 'W',
        }, {
          id: '22578',
          kickoff: 'Sunday 31 December 2017',
          home: false,
          against: {
            name: 'Crystal Palace',
            abbr: 'CRY',
          },
          result: 'D',
        }, {
          id: '22579',
          kickoff: 'Tuesday 2 January 2018',
          home: true,
          against: {
            name: 'Watford',
            abbr: 'WAT',
          },
          result: 'W',
        }, {
          id: '22580',
          kickoff: 'Sunday 14 January 2018',
          home: false,
          against: {
            name: 'Liverpool',
            abbr: 'LIV',
          },
          result: 'L',
        }, {
          id: '22581',
          kickoff: 'Saturday 20 January 2018',
          home: true,
          against: {
            name: 'Newcastle United',
            abbr: 'NEW',
          },
          result: 'W',
        },
      ],
      nextMatch: {
        kickoff: 'Wednesday 31 January 2018',
        against: {
          badge: '',
          name: 'West Bromwich Albion',
          abbr: 'WBA',
        },
      },
    }];

    const columns = [{
      id: 'position',
      Header: 'Position',
      accessor: (d) => (
        <span className="position">
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
      Header: 'Club',
      accessor: (d) => (
        <Link to={`/clubs/${d.club.key}`}>
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
      accessor: 'goals.for',
    }, {
      Header: () => <abbr title="Goals Against">GA</abbr>,
      accessor: 'goals.against',
    }, {
      Header: () => <abbr title="Goal Difference">GD</abbr>,
      accessor: 'goals.difference',
    }, {
      id: 'points',
      Header: 'Points',
      accessor: (d) => <strong>{d.points}</strong>,
    }, {
      id: 'form',
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
      accessor: ({ nextMatch }) => (
        <div className="nextMatch" role="tooltip">
          <Avatar src={nextMatch.against.badge} />
        </div>
      ),
    }];

    return (
      <Wrapper>
        <Helmet>
          <title>Premier League Table, Form Guide & Season Archives</title>
          <meta name="description" content="View the latest Premier League tables, form guides and season archives, on the official website of the Zimbabwe Premier League." />
        </Helmet>
        <Masthead role="banner">
          <div className="c-inner">
            <h2 className="c-title">Tables</h2>
            <button className="c-bttn-share">
              <Icon icon={ICONS.LOCK} /> Share
            </button>
          </div>
        </Masthead>
        <Filters>
          <Dropdown className="c-dropdown">
            <div
              id="dd-seasons"
              className="label"
            >
              Filter by Season
            </div>
            <div
              className="c-bttn"
              role="button"
              aria-expanded="false"
              aria-labelledby="dd-seasons"
              tabIndex="0"
            >
              2017/18
            </div>
            <ul
              className="c-dropdown__list"
              data-dropdown-list="seasons"
              aria-labelledby="dd-seasons"
              role="listbox"
            >
              <li
                role="option"
                tabIndex="0"
                aria-selected="false"
                data-option-name="2017/18"
                data-option-value="17-18"
              >
                2017/18
              </li>
              <li
                role="option"
                tabIndex="0"
                aria-selected="false"
                data-option-name="2016/17"
                data-option-value="16-17"
              >
                2016/17
              </li>
              <li
                role="option"
                tabIndex="0"
                aria-selected="false"
                data-option-name="2015/16"
                data-option-value="15-16"
              >
                2015/16
              </li>
            </ul>
          </Dropdown>
          <Dropdown className="c-dropdown">
            <div
              id="dd-gameweekNumbers"
              className="label"
            >
              Filter by Matchweek
            </div>
            <div
              className="c-bttn"
              role="button"
              aria-expanded="false"
              aria-labelledby="dd-gameweekNumbers"
              tabIndex="0"
            >
              All Matchweeks
            </div>
            <ul
              className="c-dropdown__list"
              data-dropdown-list="gameweekNumbers"
              aria-labelledby="dd-gameweekNumbers"
              role="listbox"
            >
              <li
                role="option"
                tabIndex="0"
                aria-selected="false"
                data-option-name="All Matchweeks"
                data-option-value="-1"
              >
                All Matchweeks
              </li>
              {
                [...Array(24).keys()].map((key) => {
                  const week = key + 1;

                  return (
                    <li
                      key={key}
                      role="option"
                      tabIndex="0"
                      aria-selected="false"
                      data-option-name={week}
                      data-option-value={week}
                    >
                      {week}
                    </li>
                  );
                })
              }
            </ul>
          </Dropdown>
          <Dropdown className="c-dropdown">
            <div
              id="dd-homeaway"
              className="label"
            >
              Filter by Home or Away
            </div>
            <div
              className="c-bttn"
              role="button"
              aria-expanded="false"
              aria-labelledby="dd-homeaway"
              tabIndex="0"
            >
              All Matches
            </div>
            <ul
              className="c-dropdown__list"
              data-dropdown-list="homeaway"
              aria-labelledby="dd-homeaway"
              role="listbox"
            >
              <li
                role="option"
                tabIndex="0"
                aria-selected="false"
                data-option-name="All Matches"
                data-option-value="-1"
              >
                All Matches
              </li>
              <li
                role="option"
                tabIndex="0"
                aria-selected="false"
                data-option-name="Home"
                data-option-value="H"
              >
                Home
              </li>
              <li
                role="option"
                tabIndex="0"
                aria-selected="false"
                data-option-name="Away"
                data-option-value="A"
              >
                Away
              </li>
            </ul>
          </Dropdown>
          <button className="c-bttn-reset">
            Reset Filters <Icon icon={ICONS.RESET} />
          </button>
        </Filters>
        <Table
          className="-striped"
          data={data}
          columns={columns}
          resizable={false}
          showPagination={false}
        />
      </Wrapper>
    );
  }
}

Tables.propTypes = {

};

export default Tables;
