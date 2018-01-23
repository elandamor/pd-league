import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper, { Content, Corporate, Sponsors } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  render() {
    const { ...props } = this.props;

    return (
      <Wrapper {...props}>
        <Sponsors />
        <Content />
        <Corporate />
        {this.props.children}
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
