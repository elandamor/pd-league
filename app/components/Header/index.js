import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper, { Title } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
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

Header.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

export default Header;
