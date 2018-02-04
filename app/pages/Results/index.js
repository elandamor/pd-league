/**
 * Results
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Components
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
// Containers
import GetResults from '../../containers/GetResults/Loadable';
// Styled-Components
import Wrapper, { Masthead, Dropdown, Filters } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Results extends React.Component {
  constructor() {
    super();

    this.state = {
      hasLoaded: false,
    };
  }

  onLoad = () => {
    this.setState({
      hasLoaded: true,
    });
  }

  render() {
    const { hasLoaded } = this.state;

    return (
      <Wrapper className={hasLoaded ? '-loaded' : ''}>
        <Helmet>
          <title>Premier League Table, Form Guide & Season Archives</title>
          <meta name="description" content="View the latest Premier League tables, form guides and season archives, on the official website of the Zimbabwe Premier League." />
        </Helmet>
        <Masthead role="banner">
          <div className="c-inner">
            <h2 className="c-title">Results</h2>
            <button className="c-bttn-share" />
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
        <GetResults onLoad={this.onLoad} />
      </Wrapper>
    );
  }
}

Results.propTypes = {

};

export default Results;
