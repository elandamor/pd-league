/**
 * Tables
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Components
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
// Styled-Components
import Wrapper, { Masthead, Dropdown, Filters, Table } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Tables extends React.Component {
  render() {
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
        <Table>
          <thead className="c-table__header">
            <tr>
              <th>More</th>
              <th>Position</th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
              <th>Form</th>
              <th>Next</th>
            </tr>
          </thead>
          <tbody className="c-table__content">
            <tr data-filtered-table-row-name="Chelsea" data-filtered-table-row-abbr="CHE">
              <td className="revealMore">
                <div className="icn chevron-down-g"></div>
              </td>
              <td className="pos button-tooltip" id="Tooltip">
                <span className="value">3</span>
                <span className="movement up">
                  <span className="tooltipContainer tooltip-left" role="tooltip">
                    <span className="tooltip-content">Previous Position <span className="resultHighlight">4</span></span>
                  </span>
                </span>
              </td>
              <td className="team">
                <a href="//www.premierleague.com/clubs/4/Chelsea/overview">
                  <span className="badge-25 t8"></span>
                  <span className="long">Chelsea</span>
                  <span className="short">CHE</span>
                </a>
              </td>
              <td>24</td>
              <td>15</td>
              <td>5</td>
              <td>4</td>
              <td className="hideSmall">45</td>
              <td className="hideSmall">16</td>
              <td>29</td>
              <td className="points">50</td>
              <td className="form hideMed">
                <ul>
                  <li className="win button-tooltip" id="Tooltip">
                    <abbr title="Won" className="form-abbreviation">W</abbr>
                    <a href="//www.premierleague.com/match/22533" className="tooltipContainer linkable tooltip-link tooltip-right">
                      <span className="tooltip-content">
                        <span className="matchAbridged">
                          <span className="matchInfo">
                            <span className="resultHighlight">Won </span>
                            Tuesday 26 December 2017
                          </span><span className="teamName">Chelsea </span>
                          <span className="badge-20 t8"></span>
                          <span className="score">2<span>-</span>0 </span>
                          <span className="badge-20 t36"></span>
                          <span className="teamName">Brighton and Hove Albion </span>
                          <span className="icn arrow-right"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    );
  }
}

Tables.propTypes = {

};

export default Tables;
