/**
 * Button
 * @type {Component} Presentational
 */

import React from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

const Button = (props) => (
  <Wrapper className={props.className} {...props}>
    {props.children}
  </Wrapper>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Button;
