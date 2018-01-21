import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper, { Title } from './styles';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, ...props } = this.props;

    return (
      <Wrapper {...props}>
        <Title>{title}</Title>
        {this.props.children}
      </Wrapper>
    );
  }
}

Header.defaultProps = {

};

Header.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default Header;
