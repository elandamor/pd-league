/**
 * Clubs
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Components
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
// Containers
import GetClubs from '../../containers/GetClubs/Loadable';
// Styled-Components
import Wrapper, { Masthead, Dropdown, Filters } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Clubs extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Premier League Clubs - Fixtures, Results, Stats & Profiles</title>
          <meta name="description" content="Find profiles and information about current and all-time pdLeague clubs, on the official website of the pdLeague." />
        </Helmet>
        <Masthead role="banner">
          <div className="c-inner">
            <h2 className="c-title">Clubs</h2>
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
          <button className="c-bttn-reset">
            Reset Filters <Icon icon={ICONS.RESET} />
          </button>
        </Filters>
        <GetClubs />
      </Wrapper>
    );
  }
}

Clubs.propTypes = {

};

export default Clubs;
