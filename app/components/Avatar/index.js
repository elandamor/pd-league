/**
 * Avatar
 * @type {Component} Presentational
 */

import React from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

const Avatar = ({ src, ...rest }) => (
  <Wrapper className={rest.className} {...rest}>
    <img src={src} alt="" />
  </Wrapper>
);

Avatar.defaultProps = {
  className: '',
};

Avatar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  src: PropTypes.string,
};


export default Avatar;
